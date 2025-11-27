# Snippet Api (Project 2)
## Live Deployment
Live: YOUR_RENDER_URL # Replace this with your application's public URL
## Running Locally
### Prerequisites
You must have Node.js (version 18 or later) installed.
### Setup Instructions
## 1. Install dependencies defined in package.json
npm install
## 2. Start the server - opens on http://localhost:3000/ by default (or the PORT from .env)
npm start 
## Windows and macOS Notes
Open VS Code terminal. The commands are the same on both platforms.
## API Endpoints
GET /api/snippets # Retrieves a list of all snippets. Optional query parameters: ?lang=(language) &limit=(limit the search)

POST /api/snippets # Creates a new snippet. Requires: title, language and code

DELETE /api/snippets/:id # Deletes an existing lead by ID. 

PUT /api/snippets/:id # Update the content of the snippet by ID. Fields you can update:
title, language, code and tags.
## Technology Stack
Node, Express, vanilla JS, JSON, MongoDB(database).
## Project Reflection 
Write 200 to 300 words here on what you built, what you learned, and next improvements.e

I've built application to store, retrieve, edit and delete code snippets in to database.
It consists of server.js wich is the main program, .env where the enviromental variables are stored and node modules  and package.json.

You can make the queries with the app using browser and API Endpoints listed above. http://localhost:3000/api/snippets for example.

Or you can use a program like Postman to make the queries to the database.

While building this application I have learnt about how restful API application works and how to use and implement
for example POST and PUT http requests.

The next steps and improvements for the app is naturally the developing the front end UI using for example REACT.

