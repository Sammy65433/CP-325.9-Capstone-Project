

// Imports bcrypt so passwords can be hashed and compared securely
import bcrypt from 'bcryptjs'

// Imports jsonwebtoken so we can create login tokens
import jwt from 'jsonwebtoken'

// Imports the User model to interact with the users collection
import User from '../models/User.js'

// Helper function to generate a JWT token for a user
function generateToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
}


export async function registerUser(req, res) {
    try {

        console.log('registerUser route hit')
        console.log('req.body:', req.body)

        // Pulls user data from the request body
        const { username, email, password } = req.body
        console.log('parsed fields', { username, email, password })

        // Validates that all required fields were sent
        if (!username || !email || !password) {
            console.log('registerUser failed: missing req fields',)
            return res.status(400).json({ message: 'All fields are required' })
        }
        // Checks if a user with the same email already exists
        const existingUser = await User.findOne({ email })
        console.log('existingUser lookup result:', existingUser)


        if (existingUser) {
            console.log('registerUser failed: user already exists',)
            return res.status(400).json({ message: 'User already exists' })

        }
        // Hashes the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log('hashedPassword created:', hashedPassword)

        // Creates the new user in MongoDB
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        })
        console.log(user)

        // Generates a JWT token for the newly registered user
        const token = generateToken(user._id)

        // Logs that a token was successfully created 
        console.log('token created for new user')


        // Sends back a success response with a token and safe user data
        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
            },
        })
    } catch (error) {
        // Logs backend error details
        console.log('registerUser error:', error.message)

        // Sends a generic server error to the frontend
        res.status(500).json({ message: 'Server error' })
    }
}


// Handles user login
export async function loginUser(req, res) {
    try {
        console.log('loginUser route hit')
        console.log('req.body:', req.body)

        // Pulls login credentials from the request body
        const { email, password } = req.body
        console.log('parsed login fields:', { email, password })

        // Validates required fields
        if (!email || !password) {
            console.log('loginUser failed: missing email or password')
            return res.status(400).json({ message: 'Email and password are required' })
        }

        // Finds the user by email
        const user = await User.findOne({ email })
        console.log('user found by email:', user)

        // If no user exists, return invalid credentials
        if (!user) {
            console.log('loginUser failed: user not found')
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        // Compares entered password to the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password)
        console.log('password match result:', isMatch)

        // If passwords do not match, return invalid credentials
        if (!isMatch) {
            console.log('loginUser failed: password did not match')
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        // Generates a JWT token for the logged-in user
        const token = generateToken(user._id)
        console.log('token created for login')

        // Sends a success response with a token and safe user data
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
            },
        })
    } catch (error) {
        // Logs backend error details
        console.log('loginUser error:', error.message)

        // Sends a generic server error response
        res.status(500).json({ message: 'Server error' })
    }
}
