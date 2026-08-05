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
## Step 9 Dashboard Page Completed

After setting up the frontend structure and routing, I built and styled the first main page of the application: the `DashboardPage`.

### What I completed
I created a dashboard layout for the Sports Training Tracker app that gives the user a simple overview of their activity and progress.

The dashboard currently includes:
- a main dashboard title
- three summary cards:
  - `Total Sessions`
  - `Active Goals`
  - `Latest Activity`
- a `Recent Sessions` section
- a `Goal Progress` section

### Why I built the dashboard first
I chose to build the dashboard first because it acts as the main landing page of the app after navigation is in place. It gives the project a central home page and helps shape the overall look and feel of the application before connecting live data.

It also helps me think ahead about what information users should see first when they open the app.

### `DashboardPage.jsx`
The page structure was built using semantic sections and reusable CSS class names.

This gave the page:
- a clear heading
- grouped summary content
- separate content panels for future data

### Styling approach
I added styling through `DashboardPage.css` to make the page feel more like a real application instead of plain placeholder text.

The styling included:
- centered page layout
- spacing and padding
- card-style summary boxes
- bordered content sections
- cleaner visual hierarchy with headings and panels

### What this page is preparing for later
Even though the dashboard is using placeholder content right now, it is designed to support real data later.

Eventually, I plan to connect it to backend data such as:
- total number of training sessions
- active goals count
- recent session entries
- goal progress updates

### Current frontend milestone
At this stage, I now have:
- React Router working
- the main page routes created
- a shared navigation bar
- a completed and styled dashboard page

This means the frontend is starting to move from structure into actual interface design.

### What I learned
This step helped me practice:
- building a page layout in React
- using semantic sections for structure
- using CSS classes to organize styling
- designing with future dynamic data in mind
- thinking about user experience early in the project

### Next step
My next step is to build the `SessionsPage` layout.

That page will likely include:
- a page title
- a form section for adding training sessions
- a list section to display session entries

After that, I will build the `GoalsPage` in a similar way.






### Next Frontend Build Order

- [x] run frontend
- [x] install `react-router-dom`
- [x] create `pages` folder
- [x] create `components` folder
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
- [x] create reusable cards/sections if needed

- [ ] finish `GoalsPage` layout if needed
- [ ] turn `SessionsPage` into a real form layout
- [ ] turn `GoalsPage` into a real form layout
- [ ] add real placeholder profile info in `ProfilePage`
- [ ] style `Navbar`
- [ ] connect session and goal pages to backend











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