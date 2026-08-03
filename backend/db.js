// Imports Mongoose so we can connect to MongoDB
import mongoose from 'mongoose'

// Creates an async function to connect the backend to MongoDB
async function connectDB() {
    try {
        // Uses the connection string stored in the .env file
        await mongoose.connect(process.env.MONGO_URL)

        // Logs a success message if the database connection works
        console.log('Connected to MongoDB')
    } catch (e) {
        // Logs the error message if connection fails
        console.log(e.message)

        // Stops the server process if the database connection fails
        process.exit(1)
    }
}

// Exports the function so it can be used in index.js
export default connectDB