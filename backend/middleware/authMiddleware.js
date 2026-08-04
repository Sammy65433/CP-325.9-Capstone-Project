// Imports jsonwebtoken so we can verify JWT tokens
import jwt from 'jsonwebtoken'

// Middleware function to protect private routes
export default function authMiddleware(req, res, next) {
    try {
        console.log('authMiddleware running')

        // Reads the Authorization header from the request
        const authHeader = req.headers.authorization
        console.log('authorization header:', authHeader)

        // Checks if the header exists and starts with "Bearer "
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.log('authMiddleware failed: no authorization header or bad Bearer format')
            return res.status(401).json({ message: 'Not authorized, no token' })
        }

        // Splits the header and extracts just the token
        const token = authHeader.split(' ')[1]
        console.log('extracted token:', token)

        // Verifies the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log('decoded token payload:', decoded)

        // Attaches decoded user info to the request object
        req.user = decoded
        console.log('req.user attached:', req.user)

        // Moves to the next middleware or route handler
        console.log('authMiddleware success: moving to next handler')
        next()
    } catch (error) {
        // Logs backend error details
        console.log('authMiddleware error:', error.message)

        // Sends an unauthorized response if token is invalid
        res.status(401).json({ message: 'Not authorized, invalid token' })
    }
}
