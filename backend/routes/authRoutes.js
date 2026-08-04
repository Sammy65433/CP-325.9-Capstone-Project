import express from 'express'
import { registerUser, loginUser, getCurrentUser } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/register', (req, res, next) => {
    console.log('register route hit in authRoutes')
    next()
}, registerUser)

router.post('/login', (req, res, next) => {
    console.log('login route hit in authRoutes')
    next()
}, loginUser)


router.get('/me', (req, res, next) => {
    console.log('Current User route hit in authRoutes')
    next()
}, authMiddleware, getCurrentUser)

export default router
