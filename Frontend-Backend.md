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
*************************************************************************************

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


`BACKEND README LINK:`
https://github.com/Sammy65433/CP-325.9-Capstone-Project/blob/main/backend/BackendReadme.md


`FRONTEND README LINK:`
https://github.com/Sammy65433/CP-325.9-Capstone-Project/blob/main/frontend/README.md


## Sessions and Goals Frontend-to-Backend Testing

After building the session and goal forms on the frontend, I connected both pages to the backend using separate service files and tested the full flow.

### Sessions testing
I tested the sessions feature and confirmed that:
- existing session data was successfully fetched from MongoDB
- the session list rendered correctly on the page
- submitting a new session from the frontend form sent the request to the backend
- the backend created and returned the new session document
- the new session appeared immediately on the page

### Goals testing
I tested the goals feature and confirmed that:
- existing goal data was successfully fetched from MongoDB
- the goals list rendered correctly on the page
- submitting a new goal from the frontend form sent the request to the backend
- the backend created and returned the new goal document
- the new goal appeared immediately on the page

### Backend terminal confirmation
The backend terminal logs confirmed that:
- `getSessions` was hit
- `createSession` was hit
- `getGoals` was hit
- `createGoal` was hit
- MongoDB returned and saved the expected documents

### What this proved
This confirmed that:
- the frontend forms are connected to the backend
- the backend routes and controllers are working
- MongoDB is saving and returning the app's main data correctly
- the dummy local-only behavior has started being replaced with real persistent data



- `RegisterPage` collects:
  - username
  - email
- `LoginPage` collects:
  - email
- on submit, redirect to `/dashboard`
- no password
- no JWT
- no backend auth logic

### Frontend references used for `LoginPage.jsx`
To build the login page, I used React and React Router documentation along with MDN references for forms and event handling. The most important references were:
- React `useState` for storing the email field
- React Router `useNavigate` for redirecting the user to the dashboard
- MDN `preventDefault()` for preventing the browser from refreshing on form submit
- MDN HTML form element references for `form`, `label`, `input`, and `button`

### Frontend references used for `RegisterPage.jsx`
To build the register page, I used React and React Router documentation along with MDN references for forms, event handling, and JavaScript object updates. The most important references were:
- React `useState` for storing the `username` and `email` fields
- React Router `useNavigate` for redirecting the user to the dashboard after submit
- MDN `preventDefault()` for preventing the browser from refreshing on form submit
- MDN spread syntax for copying the existing form data before updating one field
- MDN computed property names for updating the correct form field dynamically with `[event.target.name]`
- MDN HTML form element references for `form`, `label`, `input`, and `button`




## Delete Functionality Progress

After building create and read functionality for sessions and goals, I added delete functionality so users could remove saved items directly from the app.

This helped move the project closer to full CRUD behavior for the main features.

---

## What I completed

I added delete functionality for:
- training sessions
- training goals

This included both:
- backend delete routes and controller logic
- frontend delete buttons and state updates

---

## Backend delete work completed

### Session delete
I added a delete controller and route for sessions:

- `deleteSession` in `sessionController.js`
- `DELETE /api/sessions/:id` in `sessionRoutes.js`

The controller:
- reads the session id from `req.params.id`
- uses `Session.findByIdAndDelete()` to remove the document from MongoDB
- returns the deleted session if successful
- returns a `404` response if the session does not exist
- uses `try...catch` for error handling

### Goal delete
I added a delete controller and route for goals:

- `deleteGoal` in `goalController.js`
- `DELETE /api/goals/:id` in `goalRoutes.js`

The controller:
- reads the goal id from `req.params.id`
- uses `Goal.findByIdAndDelete()` to remove the document from MongoDB
- returns the deleted goal if successful
- returns a `404` response if the goal does not exist
- uses `try...catch` for error handling

---

## Frontend delete work completed

### Session delete button
I added a delete button inside each session card on the `SessionsPage`.

When the button is clicked:
- the frontend calls `deleteSession(id)` from `sessionService.js`
- the backend receives the delete request
- the deleted session is removed from React state using `.filter()`
- the UI updates immediately without a page refresh

### Goal delete button
I also added a delete button inside each goal card on the `GoalsPage`.

When the button is clicked:
- the frontend calls `deleteGoal(id)` from `goalService.js`
- the backend receives the delete request
- the deleted goal is removed from React state using `.filter()`
- the UI updates immediately without a page refresh

---

## Thunder Client delete testing

I tested the backend delete routes in Thunder Client before relying on the frontend buttons.


Short version if you need something quick:

```md
## Delete Functionality Completed

I added delete functionality for both sessions and goals.

### Backend
I created:
- `deleteSession` in `sessionController.js`
- `deleteGoal` in `goalController.js`

I also added:
- `DELETE /api/sessions/:id`
- `DELETE /api/goals/:id`

### Frontend
I added delete buttons to:
- each session card
- each goal card

When a user clicks delete:
- the frontend sends a `DELETE` request to the backend
- MongoDB removes the document
- React state updates with `.filter()`
- the item disappears from the page without a refresh

### Troubleshooting
I ran into a few issues, including:
- placing the delete button outside the `.map()` loop
- receiving HTML instead of JSON when the backend route was missing or broken
- import/export mismatches in backend controller files

I fixed these issues by:
- moving the delete button inside each mapped card
- testing delete routes in Thunder Client first
- correcting backend exports and routes
- restarting the backend after file changes

### What I learned
This helped me understand how delete functionality works across:
- frontend buttons
- service files
- Express routes
- controllers
- MongoDB
- React state updates

### Current progress
Sessions and goals now support:
- create
- read
- delete


### Goal delete tested
**Route tested:**
```txt
DELETE /api/goals/:id

```
- total sessions from MongoDB
- total goals from MongoDB
- latest activity from real session data
- recent sessions from real backend data
- goal progress from real backend data

So the process is:
1. import `getSessions`
2. import `getGoals`
3. use `useEffect`
4. store data in `useState`
5. render counts and recent items


## Final Frontend and CRUD Testing Progress

After building the core pages, connecting sessions and goals to the backend, and simplifying login and register, I completed another round of testing to make sure the application flow was working correctly.

### Tests completed

#### Sessions testing
I tested the sessions feature and confirmed that:
- existing session data was fetched from MongoDB and rendered on the page
- submitting a new session from the frontend form successfully sent data to the backend
- the backend created and returned the new session document
- the new session appeared immediately in the UI
- deleting a session removed it from MongoDB
- deleting a session also removed it from the page without needing a refresh

#### Goals testing
I tested the goals feature and confirmed that:
- existing goal data was fetched from MongoDB and rendered on the page
- submitting a new goal from the frontend form successfully sent data to the backend
- the backend created and returned the new goal document
- the new goal appeared immediately in the UI
- deleting a goal removed it from MongoDB
- deleting a goal also removed it from the page without needing a refresh

#### Dashboard testing
I tested the dashboard and confirmed that:
- total sessions updated from real MongoDB data
- total goals updated from real MongoDB data
- latest activity displayed real session information
- recent sessions displayed real backend data
- goal progress displayed real goal data

#### Login and Register testing
I tested the simplified login and register pages and confirmed that:
- the login page renders correctly
- the register page renders correctly
- form input works on both pages
- the login form redirects the user to the dashboard
- the register form redirects the user to the dashboard

### What this confirmed
These tests confirmed that:
- the frontend pages are connected properly
- the backend sessions and goals routes are working
- MongoDB is storing and returning the main application data
- React state updates correctly after create and delete actions
- the dashboard reflects real backend data
- login and register pages work as a simple user flow without blocking the core app

---

## Delete Testing Summary

I completed delete testing for both sessions and goals.

### What I tested
- backend delete routes in Thunder Client
- frontend delete buttons in the browser

### What delete testing confirmed
- `DELETE /api/sessions/:id` works
- `DELETE /api/goals/:id` works
- the correct document id is being sent
- MongoDB deletes the correct document
- React state updates with `.filter()`
- the deleted item disappears from the page immediately

### Troubleshooting during delete testing
I ran into some issues while setting up delete functionality.

#### Problems I hit
- I first placed the delete button outside the `.map()` loop instead of inside each card
- I got a JSON parsing error:
  - `Unexpected token '<', "<!DOCTYPE"... is not valid JSON`
- this happened because the frontend was trying to parse an HTML error page instead of a JSON response
- I also hit backend export/import mismatches while wiring the goal delete route

#### How I fixed them
- moved the delete button inside each mapped session and goal card
- verified the delete routes existed in the backend
- corrected route and controller imports/exports
- restarted the backend after changes
- tested delete routes in Thunder Client first before relying on the frontend

---

## What I learned from this round of testing

This stage helped me understand:
- how create, read, and delete flow across frontend, backend, and MongoDB
- how React state can be updated after backend responses
- why backend routes should be tested first in Thunder Client
- how dashboard data can be driven by real backend data
- how to simplify login/register without letting auth block the project
- how important it is to focus on working core features before adding complexity

---

## Current milestone

At this stage, the project now includes:

### Frontend
- Dashboard
- Sessions page
- Goals page
- Profile page
- Login page
- Register page
- Shared navbar
- Styled layouts and forms

### Backend
- Session model, controller, and routes
- Goal model, controller, and routes
- MongoDB connection
- tested CRUD endpoints for sessions and goals

### Working features
- create sessions
- read sessions
- delete sessions
- create goals
- read goals
- delete goals
- dashboard displays real backend data
- simple login/register pages redirect to dashboard

---

## What is left
The only page I may still polish is the `ProfilePage`.

For now, it can remain a styled sample profile page because the core app features are already working.

---

## Next step
My next step is to:
- lightly polish the `ProfilePage`
- review the full app flow one more time
- make final README updates
- push all final changes to GitHub
- prepare to present the application




## Docs and MDN for `LoginPage.jsx`

### React `useState`
- https://react.dev/reference/react/useState

### React Router `useNavigate`
- https://reactrouter.com/en/main/hooks/use-navigate

### React components
- https://react.dev/learn/your-first-component

### React forms and inputs
- React input docs
  - https://react.dev/reference/react-dom/components/input
- React event handling
  - https://react.dev/learn/responding-to-events

### MDN `Event.preventDefault()`
- https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

### MDN `import`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

### MDN `export`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

### MDN `const`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

### MDN HTML form elements
- `<form>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- `<label>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label
- `<input>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
- `<button>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button

### MDN semantic HTML
- `<main>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
- `<section>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section

## Docs and MDN for `RegisterPage.jsx`

### React `useState`
- https://react.dev/reference/react/useState

### React Router `useNavigate`
- https://reactrouter.com/en/main/hooks/use-navigate

### React components
- https://react.dev/learn/your-first-component

### React forms and inputs
- React input docs
  - https://react.dev/reference/react-dom/components/input
- React form submit and events
  - https://react.dev/learn/responding-to-events

### MDN `Event.preventDefault()`
- https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

### MDN spread syntax
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

### MDN computed property names
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

### MDN `import`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

### MDN `export`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

### MDN `const`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

### MDN HTML form elements
- `<form>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- `<label>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label
- `<input>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
- `<button>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button

### MDN semantic HTML
- `<main>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
- `<section>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
