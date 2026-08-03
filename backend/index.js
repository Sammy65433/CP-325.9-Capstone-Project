// Loads environment variables from the .env file so we can use process.env
import 'dotenv/config'

// Imports Express, which we use to create the backend server and routes
import express from 'express'

// Imports CORS middleware so the frontend can make requests to the backend
import cors from 'cors'

// Imports the MongoDB connection function from db.js
import connectDB from './config/db.js'

// Imports authentication routes like register, login, and get current user
// import authRoutes from './routes/authRoutes'

// Creates the Express application
const app = express()

// Uses the PORT from environment variables if available, otherwise defaults to 3000
const port = process.env.PORT || 3000

// Enables cross-origin requests so frontend and backend can communicate on different ports
app.use(cors())

// Allows the server to read JSON data sent in request bodies
app.use(express.json())

// Simple test route to confirm the backend server is running
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running' })
})

// Mounts all auth routes under /api/auth
// Example: /api/auth/register, /api/auth/login, /api/auth/me
// app.use('/api/auth', authRoutes)

// Starts the server and connects to MongoDB
app.listen(port, async () => {
    console.log(`Listening on port: ${port}`)
    await connectDB()
})




