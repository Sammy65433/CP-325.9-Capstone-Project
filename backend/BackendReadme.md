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


## Step 1
- `Start with Backend`

- **Phase 1: Backend setup**
  - initialize server
  - connect MongoDB
  - create models
  - create auth routes
  - create session routes
  - create goal routes
  - test in Postman
  
```
backend/
  controllers/
    authController.js
  middleware/
    authMiddleware.js
  models/
    User.js
  routes/
    authRoutes.js
  .env
  .env.example
  db.js
  index.js
  package.json
```

```
  - backend setup
- database connection
- user model
- auth routes
- auth middleware
- session model + routes
- goal model + routes
- test all endpoints
- then frontend
```

`Install Depencies` 

```
npm init -y
npm install express cors mongoose dotenv bcryptjs jsonwebtoken
npm install --save-dev nodemon
```
- `express`
  - backend server
  - routes like `/api/auth/register`

- `cors`
  - lets frontend talk to backend from a different port

- `mongoose`
  - connect to MongoDB
  - create schemas/models

- `dotenv`
  - loads `.env` variables like `MONGO_URL` and `JWT_SECRET`

- `bcryptjs`
  - hashes passwords

- `jsonwebtoken`
  - creates login tokens for auth

- `nodemon`
  - restarts server automatically during development


`THEN`
- add `"type": "module"` to `package.json`
- create `index.js`
- create `.env`
- create `db.js`


## Step 2

```md
## Why I started with `index.js`

I started with `index.js` because it is the main entry point of the backend. It sets up the Express server, enables middleware like CORS and JSON parsing, connects the authentication routes, and starts the connection to MongoDB.

This file is important because it creates the foundation for the rest of the application. Before building models, controllers, or frontend pages, I need the server running correctly and connected to the database.
```


```
- this file is the **foundation** of my backend
- every request starts here
- without this file:
  - Express does not run
  - CORS is not enabled
  - JSON body parsing will not work
  - auth routes will not exist
  - MongoDB will not connect
  ```


```md
## Frontend and Backend Connection Test

After setting up both the frontend and backend, I tested communication between them to make sure the full-stack foundation was working correctly.

The backend was running on:

```txt
http://localhost:3000
```

The frontend was running on:

```txt
http://localhost:5173
```

```md
## Frontend-Backend Connection

I tested the connection between my React frontend and Express backend by creating a `/test` route in the backend and calling it from `App.jsx` using `fetch()` inside `useEffect()`.

`Backend route:`
```js
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running' })
})
```

`Frontend test:`
```jsx
import { useEffect } from 'react'

export default function App() {
  async function test() {
    const response = await fetch('http://localhost:3000/test')
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    test()
  }, [])

  return <div>Hello World</div>
}
```

When I refreshed the frontend and opened the browser console, I saw:

```js
{ message: 'Server is running' }
```

```md
**This confirmed that:**

- the frontend could successfully send a request to the backend
- the backend route was working correctly
- CORS was configured properly
- JSON data could be sent back from the server and read by the frontend

This was an important milestone because it verified that the frontend and backend were connected before I moved on to authentication, database models, and CRUD functionality.
```

```md
**Basic Setup steps:**
- set up backend - [x]
- setup up db.js n connect database - [x]
- create model - [x]
- create routes - [x]
- create controller logic - [x]
- add middleware - [x]

**************************************************************************** 


`backend/.env`:
```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

`backend/.env.example`:
```env
MONGO_URL=
JWT_SECRET=
```
`backend/.gitignore`:
```gitignore
node_modules/
.env


```
- setup up db.js n connect database - [x]

```md
`process.exit(1)` stops the Node server when the database connection fails. This prevents the backend from running without a working MongoDB connection.
```


```md
- create model - [x]
`backend/models/User.js`


Why I chose this schema:

- it matches the minimum data needed for user authentication
- every user needs:
  - a `username`
  - an `email`
  - a `password`
- this keeps the model simple, clear, and appropriate for the first stage of the app
```

- **`username`**
  - used as the user’s display name
  - `type: String` because it is text
  - `required: true` because every account should have a username
  - `trim: true` removes extra spaces at the beginning or end

- **`email`**
  - used for login and identifying users
  - `type: String` because email is stored as text
  - `required: true` because a user must provide it
  - `unique: true` helps prevent duplicate accounts with the same email
  - `trim: true` removes accidental spaces
  - `lowercase: true` keeps emails consistent, like converting `Sam@email.com` to `sam@email.com`

- **`password`**
  - used for authentication
  - `type: String` because the hashed password is stored as text
  - `required: true` because login cannot work without it
  - I store the **hashed password**, not the plain password, for security

`timestamps: true`:
- automatically adds:
  - `createdAt`
  - `updatedAt`
- this is useful for tracking when a user account was created or updated
- it makes the data more informative

So the flow is:
- `User.js` = what a user looks like
- `authController.js` = what happens when someone registers/logs in
- `authRoutes.js` = URL paths like `/register`, `/login`, `/me`
- `authMiddleware.js` = checks if user is authenticated

- `routes` define the endpoint
- `controller` holds the logic
- `model` defines the data
- `middleware` protects private routes

 ## Step 3
 - A. create controller logic - [x]
 - B. create routes - [x]
 - C. add middleware - [x]


 Best next steps:
1. `authController.js`
2. `authRoutes.js`
3. `authMiddleware.js`
4. connect routes in `index.js`
5. test in Postman
6. then build frontend login/register forms

 ###  A. Create Controller logic - [x]
`I’m building authentication on the backend first because it is the core of the app. Since sessions and goals are user-specific, I need working register, login, and protected user routes before building the frontend forms.`

What `authController.js` is doing:
- **`registerUser`**: creates a new user
- **`loginUser`**: checks credentials and returns a token
- **`getMe`**: returns the currently logged-in user
- **`generateToken`**: creates the JWT used for protected routes

### Route setup
I created an auth route for registration in `authRoutes.js`:

```js
router.post('/register', registerUser)
```

Then I mounted the auth routes in `index.js`:

```js
app.use('/api/auth', authRoutes)
```

This made the full endpoint:

```txt
POST /api/auth/register
```

## Authentication Progress: Register User

I started backend authentication by building the `registerUser` function in `authController.js`. I chose to begin with registration because authentication is the foundation of the application, and later features like sessions and goals will belong to a specific logged-in user.

### What I completed
- Created the `registerUser` controller function
- Imported the `User` model into the controller
- Validated required fields: `username`, `email`, and `password`
- Checked whether a user with the same email already exists
- Hashed the password using `bcryptjs`
- Created and saved the new user in MongoDB
- Generated a JWT token using `jsonwebtoken`
- Returned a successful response with safe user data and a token


## Why I used `bcryptjs` and `jsonwebtoken`

### `bcryptjs`
I used `bcryptjs` to securely hash user passwords before saving them to MongoDB. This is important because passwords should never be stored as plain text in a database. If the database were ever exposed, hashed passwords are much safer than raw passwords.

I also used `bcrypt.compare()` during login to compare the password entered by the user with the hashed password stored in the database.

Example:
```js
const hashedPassword = await bcrypt.hash(password, 10)
const isMatch = await bcrypt.compare(password, user.password)

```md
## Package docs
- `bcryptjs`
  - https://www.npmjs.com/package/bcryptjs

- `jsonwebtoken`
  - https://www.npmjs.com/package/jsonwebtoken

```

```md
### `generateToken(userId)`

I created a helper function called `generateToken(userId)` to generate a JWT for authenticated users.

```js
function generateToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
}
`
I used:
- `{ userId }` as the token payload
- `process.env.JWT_SECRET` as the secret signing key
- `{ expiresIn: '7d' }` to make the token expire after 7 days

Using a helper function keeps the token logic reusable and avoids repeating the same `jwt.sign()` code in multiple controller functions.
```

### Why I used a helper function
I made this a helper function so I could reuse the same token creation logic in multiple places, such as:
- `registerUser`
- `loginUser`

This keeps the code cleaner and follows the DRY principle by avoiding repeated `jwt.sign()` code.

### How it works
The function takes one argument:

- `userId`  
  This is the MongoDB `_id` of the user who just registered or logged in.

Inside the function, `jwt.sign()` creates the token using three parts:

#### 1. Payload
```js
{ userId }
```

The payload is the data stored inside the token. In this case, I included the user's ID so the backend can later identify which user is making a request.

#### 2. Secret key
```js
process.env.JWT_SECRET
```

This is the private secret used to sign the token. It is stored in an environment variable instead of hardcoding it into the application. This is more secure because sensitive values should not be exposed in source code.

#### 3. Options
```js
{ expiresIn: '7d' }
```

This sets the token to expire in 7 days. That means the token will only be valid for a limited time, which improves security. After it expires, the user would need to log in again to get a new token.

### Why JWT is useful in this app
JWT authentication is useful because it allows the app to:
- keep users logged in across requests
- protect private routes
- identify the current logged-in user
- connect user-specific data, such as training sessions and goals, to the correct account

### Example usage
I used this helper function after successful registration and login.

Example:
```js
const token = generateToken(user._id)
```

Then I returned the token in the response:

```js
res.status(200).json({
  message: 'Login successful',
  token,
  user: {
    _id: user._id,
    username: user.username,
    email: user.email,
  },
})
```

### Security note
The token does not store the user's password. It only stores the user ID in the payload. The token is signed with a secret key so the backend can verify that it was created by the application and has not been tampered with.


Perfect. **register works.**

### Successful result
The request worked successfully. In the backend terminal, I saw console logs confirming that:
- the auth routes loaded
- the register route was hit
- the request body was received correctly
- the password was hashed
- the user was created in MongoDB
- a JWT token was created

### Mistakes I made and how I fixed them
- I got an `Invalid URL` error in Thunder Client because I typed the URL incorrectly as `http;//` instead of `http://`
- I initially had missing `.js` file extensions in some import statements, which needed to be fixed for ES modules
- I had to make sure the route was actually mounted in `index.js` with `app.use('/api/auth', authRoutes)`
- I used console logs to verify whether the route and controller were being reached
- I learned that backend `console.log()` output appears in the VS Code terminal, not in the browser console

### What I learned
This step helped me understand how Express routes, controllers, MongoDB models, password hashing, and JWT authentication work together in a real backend flow.

### Testing
I tested the route in Thunder Client using:

```txt
POST http://localhost:3000/api/auth/register
```

With this JSON body:

```json
{
  "username": "sam",
  "email": "sam@test.com",
  "password": "123456"
}
```

### Next step
My next step is to build and test the `loginUser` function, then create protected routes using authentication middleware.



```md
## Authentication Progress: Login User

After successfully testing registration, I built and tested the `loginUser` function in `authController.js`.

### What I completed
- pulled `email` and `password` from `req.body`
- validated that both fields were provided
- searched for the user by email with `User.findOne({ email })`
- used `bcrypt.compare()` to compare the entered password with the hashed password in MongoDB
- generated a JWT token after a successful login
- returned a success response with the token and safe user data

### Route setup
In `authRoutes.js` I added:

```js
router.post('/login', loginUser)
```

Because the routes are mounted in `index.js` with:

```js
app.use('/api/auth', authRoutes)
```

the full endpoint became:

```txt
POST /api/auth/login
```

### Testing
I tested the login route in Thunder Client using:

```txt
POST http://localhost:3000/api/auth/login
```

With this JSON body:

```json
{
  "email": "sam@test.com",
  "password": "123456"
}
```
Perfect. **Login works too.**

### Successful result
The request returned:

- status: `200 OK`
- message: `Login successful`
- a JWT token
- the logged-in user's `_id`, `username`, and `email`

This confirmed that:
- the user could be found in MongoDB
- the hashed password matched correctly
- the login flow worked end to end
- JWT token creation was successful

### Mistake I made
At first, I got a JSON parsing error because my request body had invalid JSON formatting. I fixed the request body and resent it successfully.

### What I learned
This step helped me understand how login works in a MERN backend:
- the backend looks up a user by email
- `bcrypt.compare()` checks the password securely
- `jsonwebtoken` creates a token for authenticated access


- test a **wrong password**
I also tested an incorrect password to confirm the login validation worked properly. The route returned `Invalid credentials`, which confirmed that `bcrypt.compare()` correctly rejected a non-matching password.


- then build/test **`getCurrentUser`** - currently logged-in user's profile

## Authentication Middleware and Current User Route
After building and testing the `registerUser` and `loginUser` routes, I started working on authentication middleware and the `getCurrentUser` controller. These pieces are important because they allow the backend to verify a logged-in user before returning protected data.

I used `.select('-password')` to exclude the password field from the response. Even though passwords are hashed before being stored in MongoDB, they should still never be sent back to the client. The frontend only needs safe user information like `_id`, `username`, and `email`.

### Purpose of the authentication middleware
The purpose of the middleware is to check whether an incoming request includes a valid JWT token. If the token is valid, the middleware decodes it and attaches the user information to `req.user`. If the token is missing or invalid, the middleware returns an unauthorized response.

This is important because protected routes should only be accessible to authenticated users.

### Why I checked for `Bearer`
I checked whether the `Authorization` header starts with `Bearer ` because JWT tokens are typically sent in the format `Bearer <token>`. This let me confirm the request included a token in the expected structure before splitting the header and verifying the token.
JWT tokens are commonly sent in the HTTP `Authorization` header using this format:

```txt
Authorization: Bearer <token>
```
checking for `Bearer `:
- the header should exist
- it should contain a token in the expected format
- then you can safely extract just the token part

Why check `startsWith('Bearer ')`:
- confirms the client sent the token correctly
- prevents trying to verify a missing or malformed token
- lets you split the string reliably


Example header:
```txt
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

So the flow is:
1. read `authorization` header
2. confirm it starts with `Bearer `
3. extract token
4. verify token with `jwt.verify()`
5. attach decoded user info to `req.user`
```

```
###  Added Middleware - [x]
`backend/middleware/authMiddleware.js`

```md
## Authentication Middleware

I created `authMiddleware` to protect private routes by verifying JWT tokens before a controller runs.

The middleware:
- reads the `Authorization` header
- checks that it starts with `Bearer `
- extracts the token
- verifies the token with `jwt.verify()`
- attaches the decoded payload to `req.user`
- calls `next()` to continue if the token is valid

If the token is missing or invalid, the middleware returns a `401 Unauthorized` response.

This is important because routes like `getCurrentUser` need to know which user is making the request. By attaching the decoded `userId` to `req.user`, the backend can securely look up the current logged-in user and protect user-specific data.

```md
## `GET /api/auth/me` Test

I tested the protected `GET /api/auth/me` route using a JWT token from a successful login.

I sent the token in the `Authorization` header using the format:

```txt
Authorization: Bearer <token>
```

This confirmed that:
- the middleware successfully verified the token
- the decoded token data was attached to `req.user`
- `getCurrentUser` found the logged-in user in MongoDB
- the route returned the user's profile without the password field
```

Your auth progress is now:
- `POST /api/auth/register` ✅
- `POST /api/auth/login` ✅
- wrong password test ✅
- `GET /api/auth/me` with middleware ✅
```

How to test:

1. Start backend:

```bash
node index.js
```

2. Test route in browser or Postman:

```txt
http://localhost:3000/test
```

3. Test register in Postman or Thunder Client:

```txt
POST http://localhost:3000/api/auth/register
```

Body JSON:

```json
{
  "username": "sam",
  "email": "sam@example.com",
  "password": "123456"
}
```

4. Test login:

```txt
POST http://localhost:3000/api/auth/login
```

Body JSON:

```json
{
  "email": "sam@example.com",
  "password": "123456"
}
```

5. Test protected route:

```txt
GET http://localhost:3000/api/auth/me
```

Header:

```txt
Authorization: Bearer YOUR_TOKEN_HERE
```
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "...",
    "username": "sam",
    "email": "sam@test.com"
  }
}
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTcyMDM0OTIwMzc1ZGNhZjZmOTM3ZWYiLCJpYXQiOjE3ODU4Njk4NzgsImV4cCI6MTc4NjQ3NDY3OH0.VvrNhUt2O6uVhGkZIV9LWbNP08MBtTV1SWOfiojpKsc",
  "user": {
    "_id": "6a72034920375dcaf6f937ef",
    "username": "sam",
    "email": "sam@test.com"
  }
}
Yes, it works. You successfully tested **`GET /api/auth/me`**.

What I proved:
- login returned a valid JWT
- the token was sent in the `Authorization` header
- `authMiddleware` read and verified the token
- decoded payload was attached to `req.user`
- `getCurrentUser` used `req.user.userId`
- MongoDB returned the correct user
- password was not returned

```md
## Protected Route Test: Get Current User

After building registration, login, and authentication middleware, I tested the protected current-user route.

### Route tested
```txt
GET /api/auth/me
```

### Header used
```txt
Authorization: Bearer <JWT token from login>
```

### What this test confirmed
This test confirmed that:
- the login route returned a valid JWT token
- the token could be sent in the `Authorization` header
- the authentication middleware could read the header
- the middleware correctly checked for the `Bearer` format
- the token was extracted successfully
- `jsonwebtoken.verify()` decoded the token payload
- the decoded payload was attached to `req.user`
- `getCurrentUser` used `req.user.userId` to find the logged-in user in MongoDB
- the protected route returned the current user's profile
- the password field was excluded from the response using `.select('-password')`

### Example successful response
```json
{
  "_id": "6a72034920375dcaf6f937ef",
  "username": "sam",
  "email": "sam@test.com",
  "createdAt": "2026-08-04T15:20:41.634Z",
  "updatedAt": "2026-08-04T15:20:41.634Z",
  "__v": 0
}
```

### Important security detail
The password field was not returned in the response. This is because I used:

```js
.select('-password')
```
to remove the hashed password before sending user data back to the client.
### What I learned
This helped me understand how protected routes work in a MERN application:
- login creates a token
- the client sends the token back on future requests
- middleware verifies the token
- the backend can identify the authenticated user
- protected routes can safely return user-specific data
```


Also: **commit and push right now**.


```
###  Created Routes - [x]
## Routes Created So Far

### Auth Routes

#### Register User
- **Method:** `POST`
- **Route:** `/api/auth/register`
- **Purpose:** creates a new user, hashes the password, saves the user in MongoDB, and returns a JWT token

#### Login User
- **Method:** `POST`
- **Route:** `/api/auth/login`
- **Purpose:** checks the user's email and password, verifies the hashed password with `bcrypt.compare()`, and returns a JWT token if login is successful

These routes are defined in `authRoutes.js` and mounted in `index.js` using:

```js
app.use('/api/auth', authRoutes)
```
****************************************************************************
- **Test**
  - 1stTest[x] - confirmed frontend and backend communication
  - 2ndTest[x] - confirmed backend and MongoDB connection
  - 3rdTest[x] - confirmed `POST /api/auth/register` worked
  - 4thTest[x] - confirmed `POST /api/auth/login` worked
  - 5thTest[x] - confirmed wrong password returned `Invalid credentials`
  - 6thTest[x] - confirmed `GET /api/auth/me` worked with a valid Bearer token
  - 7thTest[x] - confirmed `authMiddleware` verified the token and attached decoded user data to `req.user`
  - 8thTest[x] - confirmed the password field was excluded from the response
****************************************************************************
- [x] Done item
- [ ] Not done item

`backend/middleware/authMiddleware.js`

- **jsonwebtoken docs**
  - https://www.npmjs.com/package/jsonwebtoken
- **HTTP Authorization header**
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization
- **JavaScript strings `startsWith()`**
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
- **JavaScript `split()`**
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- **try...catch**
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

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

## MDN links for related JavaScript concepts
- `async function`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

- `await`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

- `try...catch`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

- destructuring
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring

- `import`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

- `export`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

- `process.env` in Node environment variables
  - https://nodejs.org/api/process.html#processenv

