import express from 'express'
import { getSessions, createSession } from '../controllers/sessionController.js'

const router = express.Router()

// Route to get all sessions
router.get('/', getSessions)

// Route to create a new session
router.post('/', createSession)

export default router