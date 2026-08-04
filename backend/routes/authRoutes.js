import express from 'express'
import { registerUser } from '../controllers/authController.js'

const router = express.Router()

router.post('/register', (req, res, next) => {
  console.log('register route hit in authRoutes')
  next()
}, registerUser)

export default router
