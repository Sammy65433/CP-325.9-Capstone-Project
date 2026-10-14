CP 325.9: Capstone Completion
Due next August 7, 2026 - Friday by 11:59pm
# Sports Training Tracker

A full-stack MERN capstone project for recording sports training sessions, setting goals, and viewing progress in one place.

**Live application:** https://frontend-sports-training-tracker.onrender.com  
**Repository:** https://github.com/Sammy65433/CP-325.9-Capstone-Project

## Project Overview

Sports Training Tracker helps users organize their training activity. Visitors can add and review sessions and goals, remove items they no longer need, and see a dashboard summary based on data retrieved from MongoDB.

I built this project as my CP 325.9 capstone to practice connecting a React frontend to an Express API and a MongoDB database. Rather than keeping sessions and goals only in browser state, I connected the main forms and dashboard to persistent backend data.

## What I Built

### React Frontend

- Built Dashboard, Sessions, Goals, Profile, Login, and Register pages.
- Added shared navigation and styled layouts with CSS.
- Connected the Sessions and Goals pages to the backend through separate service files.
- Updated React state after creating or deleting an item so the page reflects the change without a refresh.
- Built a dashboard that retrieves sessions and goals and displays totals, recent training activity, and goal information.

### Express and MongoDB Backend

- Created Express routes and controllers for training sessions and goals.
- Used Mongoose models to store and retrieve data in MongoDB.
- Implemented create, read, and delete operations for both sessions and goals.
- Added responses for missing records and `try...catch` handling in delete controllers.
- Tested API endpoints independently with Thunder Client before testing them through the frontend.

### Deployment

- Deployed the frontend as a Render static site and the Node/Express API as a separate Render web service.
- Configured the frontend to use the deployed API URL rather than a local development address.
- Kept the MongoDB connection string in the backend environment configuration, not in the frontend.

## Current Features

- Add, view, and delete training sessions.
- Add, view, and delete training goals.
- View dashboard information generated from saved sessions and goals.
- Navigate between the application’s pages using a shared navbar.
- Use Login and Register pages as a basic navigation flow.

**Authentication status:** The current Login and Register pages collect basic information and redirect to the dashboard. They do not verify a password or use JWT authentication. They should not be described as secure authentication.

**CRUD status:** Create, read, and delete are documented as tested for sessions and goals. Edit/update functionality is not documented as complete.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React, Vite, React Router, CSS |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| API testing | Thunder Client |
| Deployment | Render |

## How the Application Works

1. The React frontend requests session and goal data from the Express API.
2. Express routes pass requests to controllers.
3. Controllers use Mongoose models to read from or write to MongoDB.
4. The API returns data to the frontend.
5. React updates the relevant page and dashboard with the returned data.

For example, submitting a new training session sends a request to the API. The backend saves it in MongoDB and returns the created document, which the frontend then adds to the visible session list.

## Testing and Verification

During development, I tested the session and goal routes in Thunder Client and tested their corresponding forms and buttons in the browser.

The development tests documented so far confirmed that:

- Existing sessions and goals were fetched from MongoDB and rendered in the frontend.
- Submitting session and goal forms created MongoDB documents.
- Newly created items appeared without a page refresh.
- Session and goal delete requests removed the selected documents.
- React state updates removed deleted items from the page.
- Dashboard totals and recent information were populated from backend data.
- Login and Register forms rendered and redirected to the dashboard.

These are **development test results**. Deployment of the site does not, by itself, confirm that every feature has been retested successfully against the production API and database.

## Challenges and What I Learned

**Connecting the full data flow:** Building a form was only one part of each feature. I learned how data moves from React components through service files, Express routes, controllers, and Mongoose before returning to the UI.

**Debugging delete functionality:** I initially placed delete buttons outside the mapped item cards, which prevented each button from targeting its own item. Moving the buttons inside `.map()` and passing the correct document ID fixed the UI behavior.

**Diagnosing API responses:** I encountered a JSON parsing error when the frontend received an HTML error page instead of the expected JSON. Testing the route directly in Thunder Client helped me identify and correct backend routing and import/export issues.

**Prioritizing working features:** I kept the Login and Register pages as a simple navigation flow while focusing on persistent session and goal data. Proper authentication remains future work.

## Run Locally

Install dependencies in both project directories:

```bash
cd backend
npm install
```

```bash
cd frontend
npm install
```

Configure the backend’s MongoDB connection using the environment variable name referenced in your backend code. Do not commit your connection string.

Start each application in its own terminal using the scripts defined in its `package.json`. The frontend uses:

```bash
cd frontend
npm run dev
```

Configure the frontend’s API base URL to point to the locally running backend during development. Vite frontend environment variables must not contain database credentials or other server secrets.

## Future Improvements

- Add update/edit functionality for sessions and goals to complete all four CRUD operations.
- Implement real registration, password-based login, and authorization before treating accounts as private.
- Associate sessions and goals with authenticated users so one user cannot access another user’s data.
- Add session filtering by sport and date.
- Improve the Profile page with real user data.
- Add loading states, clearer error messages, and automated tests.
- Consider optional sports API data after the core features are complete.

## Project Documentation

- [Backend documentation](backend/BackendReadme.md)
- [Frontend documentation](frontend/README.md)

## Capstone Context

This project was created for CP 325.9 to demonstrate full-stack development with MongoDB, Express, React, and Node.js. The application is deployed publicly, while authentication, update operations, and some planned enhancements remain identified as future work.

