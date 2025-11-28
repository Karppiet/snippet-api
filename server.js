// 1. Imports
const express = require("express"); // The web framework
const mongoose = require("mongoose"); // The database tool
const cors = require("cors"); // Allows browser requiest from other domains
require("dotenv").config(); // Load variables from .env file

// 2. Configuration

const app = express();
const PORT = process.env.PORT || 3000;

// 3. Middleware
app.use(cors()); // Enable Cross-Origin Resource sharing
app.use(express.json()); // Allow server to read JSon data in POSt requests

// 4. Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.error("DB Connection Error:", err));

// 5. Schema
const snippetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is mandatory
  },
  language: {
    type: String,
    required: true,
    lowercase: true, // Stores only for lowercase for easer searching
  },
  code: {
    type: String,
    required: true,
  },
  description: String, // Optional field
  tags: [String], // An array of strings, eg, ['web', 'db']
  created_at: {
    type: Date,
    default: Date.now, // Automatically sets current date
  },
});

// Create the model
const Snippet = mongoose.model("Snippet", snippetSchema);

// 6. Routes

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Snippet API is running");
});

// GET ALL SNIPPETS (with Filtering and Limits)
// Example call: GET /api/snippets?lang=javascript&limit=5
app.get("/api/snippets", async (req, res) => {
  try {
    // 1. Check if user provided a 'lang' query parameter
    const filter = {};
    if (req.query.lang) {
      filter.language = req.query.lang.toLowerCase();
    }

    // 2. Check if user provided a limit (default to 10)
    const limit = parseInt(req.query.limit) || 10;

    // 3. Find snippets matching the filter, sort by newest, and limit results
    const snippets = await Snippet.find(filter)
      .sort({ created_at: -1 }) // -1 means descending order (newest first)
      .limit(limit);

    res.json(snippets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE NEW SNIPPET
app.post("/api/snippets", async (req, res) => {
  try {
    // Create a new snippet using data from the request body
    const newSnippet = new Snippet(req.body);
    // Save it to the database
    const savedSnippet = await newSnippet.save();
    // Return the saved object with 201 Created status
    res.status(201).json(savedSnippet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// DELETE SNIPPET
app.delete("/api/snippets/:id", async (req, res) => {
  try {
    const snippet = await Snippet.findByIdAndDelete(req.params.id);
    if (!snippet) {
      return res.status(404).json({ errror: "Snippet not found" });
    }
    res.status(200).json({ message: "Deleted", id: snippet._id });
  } catch (err) {
    res.status(400).json({ error: "Invalid id" });
  }
});

// UPDATE SNIPPET
app.put("/api/snippets/:id", async (req, res) => {
  try {
    const snippet= await Snippet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!snippet) {
      return res.status(404).json({ error: "Snippet not found" });
    }
    res.status(200).json(snippet);
  } catch (err) {
    res.status(400).json({ error: "Invalid update data" });
  }
});

// GET ONE SNIPPET BY ID
app.get("/api/snippets/:id", async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (!snippet) return res.status(404).json({ message: "Not found" });
    res.json(snippet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Start the express server on the given port
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
