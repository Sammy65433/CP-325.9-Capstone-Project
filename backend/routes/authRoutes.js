import express from 'express'
import { registerUser, loginUser } from '../controllers/authController.js'

const router = express.Router()

router.post('/register', (req, res, next) => {
    console.log('register route hit in authRoutes')
    next()
}, registerUser)

router.post('/login', (req, res, next) => {
    console.log('login route hit in authRoutes')
    next()
}, loginUser)

export default router
