# Snippet Api (Project 2)
## Live Deployment
Live: https://fullstack-snippet-api.onrender.com
## Running Locally
### Prerequisites
You must have Node.js (version 18 or later) installed.
### Setup Instructions
## 1. Install dependencies defined in package.json
npm install
## 2. Add .env
You must have a .env file with mongo database connection string in your root folder
## 3. Start the server - opens on http://localhost:3000/ by default (or the PORT from .env)
npm start 
## Windows and macOS Notes
Open VS Code terminal. The commands are the same on both platforms.
## API Endpoints
GET /api/snippets # Retrieves a list of all snippets. Optional query parameters: ?lang=(language) &limit=(limit the search)

<img width="1169" height="864" alt="Screenshot 2025-11-30 102959" src="https://github.com/user-attachments/assets/8fc8540b-f425-4cc1-a180-41012e005d44" />

Query parameter lang used: 

<img width="1209" height="648" alt="Screenshot 2025-11-30 103854" src="https://github.com/user-attachments/assets/e7ab34be-373d-448e-9324-53e08aded947" />

GET /api/snippets/:id # Retrives the snippet by its ID. 

<img width="1193" height="589" alt="Screenshot 2025-11-30 103039" src="https://github.com/user-attachments/assets/230636d7-ec3a-456d-bb2c-6ebee2aff23e" />

POST /api/snippets # Creates a new snippet. Requires: title, language and code

<img width="1170" height="931" alt="Screenshot 2025-11-30 103324" src="https://github.com/user-attachments/assets/9d6e41fc-3980-4805-8ad9-b2a95bb06d5a" />

DELETE /api/snippets/:id # Deletes an existing lead by ID. 

<img width="1172" height="822" alt="Screenshot 2025-11-30 103638" src="https://github.com/user-attachments/assets/6f29ef8c-f88e-4797-850c-a61cb2da5990" />

PUT /api/snippets/:id # Update the content of the snippet by ID. Fields you can update:
title, language, code and tags.

<img width="1157" height="914" alt="Screenshot 2025-11-30 103541" src="https://github.com/user-attachments/assets/3f9c99ef-a6f6-44ce-bfdb-a1187579447b" />


## Technology Stack
Node, Express, vanilla JS and MongoDB(database).

## Project Reflection 
I've built application to store, retrieve, edit and delete code snippets in to database.
It consists of server.js wich is the main program, .env where the enviromental variables are stored and node modules  and package.json.

You can test using browser and for example: http://localhost:3000/api/snippets. Though you can test only GET like this in the browser.

Or you can use a program like Postman to make the queries to the database.

While building this application I have learnt about how restful API application works and how to use and implement
for example POST and PUT HTTP requests. I had some problems with all of those not working correctly but I got them working trough testing. 
Also the amount of time that documentating requires is been a bit of a surprise. I have worked with this project for a while trying to do all the required things bit by bit.
It has been rewarding and also a bit frustrating process. 

The next steps and improvements for the app is naturally the developing of the front end UI.

## Written self assesment 
I think this project was succesfull. I would give myself 18/20 points. The project reflection part of the documentation could be longer and more in depth. Also the documentation as a whole
could be a bit better. Everyting else is working.

## Timestamps for the video

00:00 Intro
00:26 Architecture of the app
01:15 Demo with Postman
05:00 Closure and next steps

