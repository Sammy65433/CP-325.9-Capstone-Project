CP 325.9: Capstone Completion
Due next August 7, 2026 - Friday by 11:59pm

`Introduction`
This document will remind you of the requirements of the course Capstone Project (CP), and give you final tasks to work towards for its completion.


`Capstone Objective`
* Create a full-stack web application using MongoDB, Express, React, and Node (MERN).

`Timeline`
As the course progressed, you were given incremental assignments that challenged you to integrate the content that you have learned into your capstone project, pushing it closer to completion over time.

At each stage of your project, you have witnessed your own growth through the application’s progress. Hopefully, both you and your application have embraced change, persevered through the struggles, and done some try/catching when there was an exception to be handled.

Now that you have reached the final days of the course, there will be eight days of dedicated project time for final tasks. You have made it to the end of the race, now it is time to cross the finish line!

`The complete application is due by 11:59pm on submission day, following the class time zone.`

`Submission`
When your project is finally complete, submit the link to your completed assessment using the Start Assignment button on the assignment page in Canvas.

`Your submission should include:`
* A GitHub link to the repository for your completed project.
You will also be given the opportunity to present your project to guests, instructors, and/or a Talent Advocate Manager (not the class) upon completion. Lean into this opportunity to become accustomed with speaking about your work, both from a technical and non-technical perspective.

`Your presentation should include:`
* A demonstration of the application.
* An overview of the challenges you endured, and how you handled them.
* A short question-and-answer period.

Your instructor will schedule practice presentations throughout the development phase.

`Instructions`
This final assignment is a reminder to double-check everything you have done so far, and finish any remaining tasks over the next eight days. Be sure to reference the requirements outlined below to ensure your project meets the technical criteria outlined.

Your project vision and its implementation likely changed substantially from the planning phase many weeks ago. Check in again with your instructor to make sure that you are on pace for success by the end of this final project phase.

`Finishing Up`
Reference your original project plan and any notes you have made for yourself since then. Ensure that you have time to complete all of the tasks you outlined for yourself. Prioritize well, and if you cannot finish everything, decide what is most important.

`As you finish building your application, ask yourself the following questions:`
* Did you deliver a project that met all of the technical requirements?
* Given what the class has covered, did you build something reasonably complex?
* Did you add a personal touch or a creative element into your project submission?
* Did you deliver something of value to the end-user (not just a login button and an index page)?
* Did you follow the code style guidance and exercise best practices?
* Did you provide an appropriate level of comments?
* Did you try to deploy your application to a public URL as a personal stretch goal?

Lastly, congratulations! You have come incredibly far in a very short period of time. Be proud.

`Requirements and Rubrics`
These requirements are intended to give you as much creative freedom as possible while still showcasing the skills gained during your technical learning journey.

`Requirements`
Your project folder should be named as follows, for submission:
* LastName_FirstName_ProjectName_Capstone

`(20%) Project Structure, Standardization, and Convention	Weight`

Project is organized into appropriate files and directories, following best practices.	2%

Project contains an appropriate level of comments.	2%

Project is pushed to GitHub, and contains a README file that documents the project, including an overall description of the project.	5%

Standard naming conventions are used throughout the project.	2%

Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).	4%

Level of effort displayed in creativity, presentation, and user experience.	5%

`(12%) Core JavaScript	Weight`
Demonstrate proper usage of ES6 syntax and tools.	2%

Use functions and classes to adhere to the DRY principle.	2%

Use Promises and async/await, where appropriate.	2%

Use Axios or fetch to retrieve data from an API.	2%

Use sound programming logic throughout the application.	2%

Use appropriate exception handling.	2%

`(9%) Database	Weight`
Use MongoDB to create a database for your application.	5%

Apply appropriate indexes to your database collections.	2%

Create reasonable schemas for your data by following data modeling best practices.	2%

`(19%) Server	Weight`
Create a RESTful API using Node and Express.* For the purposes of this project, you may forgo the HATEOAS aspect of REST APIs.	7%

Include API routes for all four CRUD operations.	5%

Utilize the native MongoDB driver or Mongoose to interface with your database.	5%

Include at least one form of user authentication/authorization within the application.	2%

`(35%) Front-End Development	Weight`
Use React to create the application’s front-end.	10%

Use CSS to style the application.	5%

Create at least four different views or pages for the application.	5%

Create some form of navigation that is included across the application’s pages, utilizing React Router for page rendering.	5%

Use React Hooks or Redux for application state management.	5%

Interface directly with the server and API that you created.	5%

`(5%) Presentation	Weight`
Create a short overview of your application.	1%

Highlight the use cases of your application.	1%

Highlight the technical functionality of the application, from a high-level perspective.	1%

Discuss what you have learned through the development of the application.	1%

Discuss additional features that could be added to the application in the future.	1%

The following section is NOT included in the requirements for this project. Completing this section is NOT required. This section will NOT negatively impact your grade if left unfinished.

This section is intended for learners looking to go the extra mile by showcasing additional skills such as project management, and optional technologies like TypeScript.

You must complete ALL other requirements to receive credit for this section; however, this extra credit will not be included if you have already received the maximum 100% grade. The extra credit can only offset points lost elsewhere.

`(5%) Extra Credit	Weight`
Adhere to Agile principles and the Scrum framework. Perform stand-up sessions (with an instructor) when possible.	1%

Successfully track your project using a software similar to Jira.	1%

Build your application primarily with TypeScript.	3%
*********************************************************************************************************************************************************************************************************

`Capstone Project:`

  - **Project:** Sports Training Tracker
- **Stack:** MongoDB, Express, React, Node
- **Optional later:** sports API for extra features
- **Main idea:** users log training sessions, track goals, and monitor progress

`Sports Training Tracker`

A full-stack MERN application that allows users to log sports training sessions, set performance goals, and track progress over time.

`Features:`
- User authentication
- Create, edit, delete training sessions
- Create, edit, delete goals
- Dashboard with progress summary
- Filter sessions by sport and date

`Tech Stack`
- MongoDB
- Express
- React
- Node.js
- Mongoose
- JWT Authentication


- User authentication
- Create/read/update/delete training sessions
- Create/read/update/delete goals
- Dashboard summary
- Filter sessions by sport or date
- Profile page

- **Optional later:**
- pull team/player data from a sports API
- or show sports news / team logos / player search

`Continuation form BackendReadme: https://github.com/Sammy65433/CP-325.9-Capstone-Project/blob/main/backend/BackendReadme.md`

`I’m prioritizing the core app first: pages, navigation, sessions, goals, and dashboard. I’m keeping auth on the shelf for now so I don’t lose time on something that could block the rest of the project.`

```md
```



## Step 8: Frontend Setup and Routing

After finishing the backend foundation, I moved to the frontend and started building the main React application structure. At this stage, my goal was to organize the frontend clearly, install routing, and create the first set of pages so the application could start taking shape visually.

### What I completed
I completed the initial frontend setup by:

- installing frontend dependencies
- starting the React development server
- installing `react-router-dom`
- creating the main frontend folder structure
- creating placeholder pages for the core app views
- creating a shared `Navbar` component
- setting up React Router in `App.jsx`
- wrapping the app with `BrowserRouter` in `main.jsx`
- creating a `styles` folder for page and component CSS organization

### Commands used
```bash
npm install
npm run dev
npm install react-router-dom
```

### Frontend structure created
```bash
src/
  components/
    Navbar.jsx

  pages/
    DashboardPage.jsx
    SessionsPage.jsx
    GoalsPage.jsx
    ProfilePage.jsx
    LoginPage.jsx
    RegisterPage.jsx

  services/
    authService.js

  styles/
    Navbar.css
    DashboardPage.css
    SessionsPage.css
    GoalsPage.css
    ProfilePage.css
    LoginPage.css
    RegisterPage.css
    App.css
    index.css

  App.jsx
  main.jsx
```

### Why I created this structure
I organized the frontend this way so the project would stay clean and scalable as more features are added.

- `components/` holds reusable UI pieces like the navigation bar
- `pages/` holds the main views of the application
- `services/` will hold API request logic later
- `styles/` keeps CSS organized by page and component
- `App.jsx` controls the main route structure
- `main.jsx` is the frontend entry point

This structure follows best practices and makes the project easier to maintain.

### `App.jsx`
I updated `App.jsx` to become the main route map for the frontend instead of using the earlier test-only setup.

```jsx
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import SessionsPage from './pages/SessionsPage.jsx'
import GoalsPage from './pages/GoalsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}
```

### Why I changed `App.jsx`
Earlier, `App.jsx` was only being used to test whether the frontend could successfully fetch data from the backend. Once that test was complete, I replaced that temporary setup with the actual route structure for the application.

This was important because:
- the capstone requires multiple pages
- React Router is required
- the app needs navigation between views
- `App.jsx` should act as the main route map for the user interface

### `main.jsx`
I also updated `main.jsx` so the application is wrapped in `BrowserRouter`.

This is necessary because React Router will not work unless the app is wrapped in a router provider.

### `Navbar.jsx`
I created a shared navigation bar using `Link` from `react-router-dom`.

```jsx
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/sessions">Sessions</Link>
      <Link to="/goals">Goals</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  )
}
```

### Why I created the navbar
The navbar gives the user a consistent way to move between pages in the application. It also helps satisfy the capstone requirement to include navigation across pages using React Router.

### Current frontend milestone
At this stage, I have:
- a working React app
- routing installed
- multiple pages created
- a shared navbar
- the main route structure connected

This gives me the frontend skeleton I need before adding page content, forms, and API integration.

### What I learned
This step helped me understand:
- how to structure a larger React project
- the difference between page components and reusable components
- how React Router uses `Routes`, `Route`, and `Link`
- why `BrowserRouter` must wrap the app in `main.jsx`
- how organizing CSS into a `styles` folder can make the project easier to manage

### Notes
While testing, I saw some browser console errors from a Chrome extension. Those errors were not coming from my React project. My app was still rendering correctly, and the route structure was working.

### Next step
My next step is to:
- build out the content of each page
- start with the `DashboardPage`
- create the `SessionsPage` layout
- create the `GoalsPage` layout
- then connect the frontend to backend CRUD routes for sessions and goals
```

```md
## Next Step:
Next, I will build out the actual page content for the dashboard, sessions, goals, and profile pages before connecting those views to backend CRUD functionality.
```


## Step 9: Frontend Page Layout Progress

After building the frontend structure, setting up React Router, and creating the main routes, I continued developing the core interface of the Sports Training Tracker application. At this stage, I focused on shaping the main user-facing pages so the app would look like a real product before connecting live data from the backend.

### Pages completed so far
I created and structured the following frontend pages:

- `DashboardPage`
- `SessionsPage`
- `GoalsPage`
- `ProfilePage`
- `LoginPage`
- `RegisterPage`

At this point, the main app pages are in place and connected through navigation.

### `DashboardPage` completed
I built and styled the dashboard as the central home page of the application.

The dashboard currently includes:
- a main page title
- three summary cards:
  - `Total Sessions`
  - `Active Goals`
  - `Latest Activity`
- a `Recent Sessions` section
- a `Goal Progress` section

I chose to build the dashboard first because it acts as the main landing page of the app and helps establish the visual structure for the rest of the frontend.

### `SessionsPage` completed
I built the `SessionsPage` layout and expanded it beyond a simple placeholder.

The page currently includes:
- a page title and subtitle
- a training session form layout
- fields for:
  - sport
  - drill or workout name
  - duration
  - date
  - notes
- a submit button
- a saved sessions section with dummy session cards

This page is designed to support future CRUD functionality where users will be able to create, view, and later edit or delete training sessions.

### `GoalsPage` completed
I also built the `GoalsPage` layout to mirror the structure of the sessions page.

The page currently includes:
- a page title and subtitle
- a goal form layout
- fields for:
  - goal title
  - target value
  - current value
  - deadline
  - status
- a submit button
- a saved goals section with dummy goal cards

This helps prepare the app for future goal tracking and progress updates once the backend is connected.

### `ProfilePage` completed
I created the `ProfilePage` structure to give the user a place to view account-related information.

The page currently includes:
- a profile title and subtitle
- an account information section
- a training focus section

Right now this page uses placeholder data, but it gives me the structure I need for future user information display.

### Dummy data added
To make the app feel more complete before wiring it to the backend, I added dummy content to the sessions and goals sections.

For example:
- sample saved training sessions
- sample saved training goals

This makes the UI look more realistic and helps me visualize how the live data will appear later.

### Why I focused on layout first
Based on the time available and instructor feedback, I decided to focus first on:
- core pages
- navigation
- forms
- user flow
- the main application idea

instead of spending too much time on full JWT-based authentication right away.

This was important because the capstone needs to feel like a working application, not just a login page with no real features behind it.

### Styling progress
I added basic CSS styling to the page layouts so the app would feel more polished and readable.

Styling currently includes:
- centered content layout
- spacing and padding
- card and panel styling
- form field styling
- button styling
- section hierarchy with headings and subtitles

I also organized the CSS into a dedicated `styles` folder so each page can have its own file.

### Current frontend milestone
At this point, I now have:
- React Router installed and working
- navigation between pages
- `App.jsx` route structure
- `main.jsx` wrapped in `BrowserRouter`
- a shared `Navbar`
- a completed dashboard page
- completed sessions page layout
- completed goals page layout
- completed profile page layout
- placeholder login and register pages
- dummy cards added to sessions and goals

This means the app has moved beyond structure only and now has visible feature pages that represent the main purpose of the project.

### What I learned
This stage helped me practice:
- breaking a React project into pages and components
- using React Router for page navigation
- organizing CSS by page
- building forms in React before backend integration
- designing layouts that can later hold dynamic data
- creating a more realistic user interface using temporary placeholder and dummy content

### Frontend build progress checklist
- [x] run frontend
- [x] install `react-router-dom`
- [x] create `pages` folder
- [x] create `components` folder
- [x] create `services` folder
- [x] create `styles` folder
- [x] build `App.jsx` routes
- [x] create `Navbar`
- [x] create `RegisterPage`
- [x] create `LoginPage`
- [x] create `authService.js`
- [x] create `DashboardPage`
- [x] create `SessionsPage`
- [x] create `GoalsPage`
- [x] create `ProfilePage`
- [x] build `DashboardPage` layout
- [x] build `SessionsPage` layout
- [x] build `GoalsPage` layout
- [x] build `ProfilePage` layout
- [x] add basic CSS for page layouts
- [x] create reusable cards and sections if needed
- [x] turn `SessionsPage` into a real form layout
- [x] turn `GoalsPage` into a real form layout
- [x] add dummy sessions and dummy goals
- [ ] add real placeholder profile info if needed
- [x] style `Navbar`
- [ ] connect session and goal pages to backend
- [ ] decide whether login/register will remain simple placeholders or basic redirect pages

### Next step

## Navbar Styling Completed

After building the main frontend pages, I styled the shared `Navbar` component to improve navigation and give the app a cleaner, more polished look.

### What I completed
I updated the navigation bar to include:
- a brand title for the app
- links to:
  - Dashboard
  - Sessions
  - Goals
  - Profile
  - Login
  - Register

### Styling added
I styled the navbar with:
- a dark background
- horizontal layout using Flexbox
- spacing between brand and links
- link padding and rounded corners
- hover effects for better user interaction

### Why this matters
The navbar is important because it gives users a clear way to move through the application. It also helps satisfy the capstone requirement for navigation across multiple React pages.

My next step is to:
- polish the page layouts
- begin connecting `SessionsPage` and `GoalsPage` to the backend
- start turning the dummy content into real dynamic data from MongoDB

## Sessions and Goals Pages Progress

After building the basic frontend page structure, I upgraded both the `SessionsPage` and `GoalsPage` so they became interactive instead of just static placeholders.

### What I completed
I used React `useState` to make both pages store local form data and update the page dynamically when the user submits a form.

#### `SessionsPage`
The sessions page now includes:
- controlled input fields for:
  - sport
  - drill or workout name
  - duration
  - date
  - notes
- a submit button
- a sessions array stored in React state
- local rendering of saved session cards using `.map()`

#### `GoalsPage`
The goals page now includes:
- controlled input fields for:
  - goal title
  - target value
  - current value
- deadline
  - status
- a submit button
- a goals array stored in React state
- local rendering of saved goal cards using `.map()`

### Why I did this
I made these pages interactive before connecting them to the backend because I wanted the application to feel more like a working product now, even before full CRUD.

```md
This helped me:
- practice React Hooks
- test user interaction on the frontend
- build and verify the page flow early
- make the app more demo-ready
- focus on the core functionality first, as advised
```

### Why I used `useState`
I used `useState` because the sessions and goals forms needed to:
- keep track of what the user types
- update that form data live
- add newly created items to the page
- rerender the UI when the data changes

### Why I used controlled forms
I used controlled inputs because they keep each form field synced with React state. This makes the form easier to manage and easier to connect to backend data later.

### Why I used `.map()`
I used `.map()` to loop through the `sessions` and `goals` arrays and render each saved item as its own card. This is important because later those arrays can be replaced with real data from MongoDB.

### Console logs used
I added temporary `console.log()` statements to help me confirm:
- when the page rendered
- when a form field changed
- when a form was submitted
- what data was being stored in state

### Problems and troubleshooting
While working on the frontend, I had to be careful about:
- matching `name` attributes with the keys in `formData`
- making sure each input used `value` and `onChange`
- remembering to use `event.preventDefault()` so the page would not refresh on submit
- making sure the new session or goal object had a unique `id`
- checking that `.map()` used a proper `key`
- watching browser console logs to confirm the forms were updating correctly

### Mistakes I was trying to avoid
Some common issues I was watching for included:
- forgetting to spread the old `formData`
- forgetting to reset the form after submit
- mismatched field names
- not using controlled inputs consistently
- pushing static placeholder pages too long without interactivity


### What I learned
This step helped me understand:
- how React state drives the UI
- how controlled forms work
- how to store and render local arrays
- how `.map()` is used for dynamic list rendering
- how to make a page interactive before backend integration
- how frontend structure can be built gradually without blocking the rest of the app

### Next step
```md
My next step is to:
- test the sessions page [x]
- test the goals page [x]
- polish the profile page if needed [x]
- then begin connecting sessions and goals to the backend
```

For now, I am still keeping full JWT authentication on the shelf so I can prioritize the core app functionality and meet the capstone requirements first.

`Start building Session and Goal backend CRUD now.`
`backend`
- `models/Session.js`
- `models/Goal.js`
- `routes/sessionRoutes.js`
- `routes/goalRoutes.js`
- `controllers/sessionController.js`
- `controllers/goalController.js`


## Session and Goal Models

I created two new Mongoose models for the main features of my Sports Training Tracker app:

- `Session.js`
- `Goal.js`

### `Session.js`
The `Session` model stores training session data, including:
- `sport`
- `drill`
- `duration`
- `date`
- `notes`

I chose these fields because they match the key information a user would want to log after a workout or practice session.

### `Goal.js`
The `Goal` model stores user goal data, including:
- `goalTitle`
- `targetValue`
- `currentValue`
- `deadline`
- `status`

I chose these fields because they support progress tracking and help users measure improvement over time.

### Why I created these models
I created these models because training sessions and goals are the two main features of the app. Mongoose models help define the structure of the data, validate input, and prepare the backend for CRUD operations.

### Shared features
Both models use:
- required fields for important data
- trimmed string values where appropriate
- `timestamps: true` to automatically store `createdAt` and `updatedAt`

### Next step
Next, I will create the controllers and routes for sessions and goals, test them in Thunder Client, and then connect the frontend forms to the backend.


## `sessionController.js`

I created `sessionController.js` to handle the backend logic for training sessions.

It currently includes:
- `getSessions` to retrieve all training sessions from MongoDB
- `createSession` to create and save a new training session in MongoDB

### Why I created this file
I created a controller file so the route definitions could stay clean and the session logic could be separated into dedicated functions. This follows the same backend structure I used earlier with authentication and makes the code easier to organize and debug.

### What I used
- `Session.find()` to get all session documents
- `Session.create()` to insert a new session document
- `try...catch` for error handling
- validation for required fields before saving data

### Debugging
I added temporary `console.log()` statements to confirm:
- when each controller function was hit
- what data came in through `req.body`
- what data was returned from MongoDB
- whether a new session was successfully created


## Session and Goal Route Testing

After creating the `Session` and `Goal` models, controllers, and routes, I tested the new backend endpoints in Thunder Client to make sure the main app data could be created and retrieved successfully.

### Session routes tested

#### Get all sessions
**Route tested:**
```txt
GET http://localhost:3000/api/sessions



```md
## Thunder Client CRUD Testing Completed

Tested:
- `GET http://localhost:3000/api/sessions`
- `POST http://localhost:3000/api/sessions`
- `GET http://localhost:3000/api/goals`
- `POST http://localhost:3000/api/goals`

These tests confirmed that:
- session routes work
- goal routes work
- session and goal documents can be created in MongoDB
- backend controllers are connected correctly
- the main app data flow is working before frontend integration
```

```md
## `sessionService.js`

I created `sessionService.js` to hold the frontend API request logic for training sessions.

### Why I created this file
I created this service file so the fetch logic would stay separate from the page component. This keeps `SessionsPage.jsx` cleaner and makes the code easier to organize, reuse, and debug.

### What it does
- `getSessions()` sends a `GET` request to retrieve all training sessions from the backend
- `createSession(sessionData)` sends a `POST` request to create a new session in the backend

### Why I used `BASE_URL`
I used a `BASE_URL` constant so I would not have to repeat the same backend endpoint string multiple times. This makes the code easier to update later if the API URL changes.
```

```md
I wrapped the session creation logic in a `try...catch` block so I could safely handle any errors during the backend request. If the request succeeds, the new session is added to the top of the sessions list and the form is reset. If something fails, the error is logged for debugging.
```
## `SessionsPage` Frontend-to-Backend Testing

I tested the `SessionsPage` frontend connection and confirmed that existing session data was successfully fetched from MongoDB and rendered on the page. The browser console showed the fetched array, and the saved session card appeared under `Your Sessions`.

I also tested submitting a new session from the `SessionsPage` form. The form data was successfully sent to the backend, the backend returned a `201 Created` response, and the new session was immediately added to the page under `Your Sessions`.

### What this confirmed
- existing session data can be fetched from MongoDB
- the frontend can render backend data correctly
- the session form can send new data to the backend
- the backend can save a new session document in MongoDB
- the frontend state updates correctly after a successful create request
- the UI re-renders the new session without needing a page refresh


Why you are creating this:
- to keep `GoalsPage.jsx` cleaner
- to separate UI logic from API request logic
- to reuse the same goal request functions later
- to make debugging easier

Short README explanation:

```md
## `goalService.js`

I created `goalService.js` to hold the frontend API request logic for goals.

### Why I created this file
I created this service file so the fetch logic would stay separate from the page component. This keeps `GoalsPage.jsx` cleaner and makes the code easier to organize, reuse, and debug.

### What it does
- `getGoals()` sends a `GET` request to retrieve all goals from the backend
- `createGoal(goalData)` sends a `POST` request to create a new goal in the backend

### Why I used `BASE_URL`
I used a `BASE_URL` constant so I would not need to repeat the same backend endpoint string multiple times. This makes the code easier to update later if the API URL changes.
```

Your next step now:
- **same exact pattern for `GoalsPage`**
- create `goalService.js` [x]
- connect `GET /api/goals`
- connect `POST /api/goals`


```md
## Docs and MDN for `GoalsPage.jsx`

- React `useState`
  - https://react.dev/reference/react/useState

- React components
  - https://react.dev/learn/your-first-component

- React list rendering
  - https://react.dev/learn/rendering-lists

- React forms
  - https://react.dev/reference/react-dom/components/input

- React `select`
  - https://react.dev/reference/react-dom/components/select

- React event handling
  - https://react.dev/learn/responding-to-events

- MDN `Array.prototype.map()`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- MDN spread syntax
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

- MDN computed property names
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

- MDN `Event.preventDefault()`
  - https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

- MDN `Date.now()`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
```
```md
## Docs and MDN for `SessionsPage.jsx`

- React `useState`
  - https://react.dev/reference/react/useState

- React components
  - https://react.dev/learn/your-first-component

- React conditional and list rendering
  - https://react.dev/learn/rendering-lists

- React forms
  - https://react.dev/reference/react-dom/components/input

- React `textarea`
  - https://react.dev/reference/react-dom/components/textarea

- React event handling
  - https://react.dev/learn/responding-to-events

- MDN `Array.prototype.map()`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- MDN spread syntax
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

- MDN computed property names
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

- MDN `Event.preventDefault()`
  - https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

- MDN `Date.now()`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
```

  `MDN Doc used:`

  - `npm init -y`
  - npm docs: `https://docs.npmjs.com/creating-a-package-json-file`

- `express`
  - docs: `https://expressjs.com/`

- `cors`
  - npm: `https://www.npmjs.com/package/cors`

- `mongoose`
  - docs: `https://mongoosejs.com/docs/`

- `dotenv`
  - npm: `https://www.npmjs.com/package/dotenv`

- `bcryptjs`
  - npm: `https://www.npmjs.com/package/bcryptjs`

- `jsonwebtoken`
  - npm: `https://www.npmjs.com/package/jsonwebtoken`

- `nodemon`
  - docs/npm: `https://www.npmjs.com/package/nodemon`

  ## Frontend Docs and MDN References Used for Frontend 

### React
- React docs
  - https://react.dev/

### React DOM
- React DOM docs
  - https://react.dev/reference/react-dom

### React Router
- React Router docs
  - https://reactrouter.com/en/main

### `BrowserRouter`
- React Router `BrowserRouter`
  - https://reactrouter.com/en/main/router-components/browser-router

### `Routes`
- React Router `Routes`
  - https://reactrouter.com/en/main/components/routes

### `Route`
- React Router `Route`
  - https://reactrouter.com/en/main/components/route

### `Link`
- React Router `Link`
  - https://reactrouter.com/en/main/components/link

### JSX
- React docs on writing markup with JSX
  - https://react.dev/learn/writing-markup-with-jsx

### Components
- React docs on your first component
  - https://react.dev/learn/your-first-component

### Import and Export
- MDN `import`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
- MDN `export`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

### Forms
- React docs on forms
  - https://react.dev/reference/react-dom/components/input
- React docs on `textarea`
  - https://react.dev/reference/react-dom/components/textarea
- React docs on `select`
  - https://react.dev/reference/react-dom/components/select
- MDN HTML forms guide
  - https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms

### CSS
- MDN CSS reference
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- MDN `display`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/display
- MDN `grid-template-columns`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
- MDN `gap`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/gap
- MDN `padding`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/padding
- MDN `margin`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/margin
- MDN `border-radius`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
- MDN `box-shadow`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
- MDN `font-size`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
- MDN `font-weight`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
- MDN `color`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/color
- MDN `background-color`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
- MDN `max-width`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
- MDN `text-align`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
- MDN `cursor`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

### Semantic HTML
- MDN `<main>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
- MDN `<section>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
- MDN headings
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
- MDN `<form>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- MDN `<label>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label
- MDN `<input>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
- MDN `<textarea>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea
- MDN `<select>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select
- MDN `<button>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button
