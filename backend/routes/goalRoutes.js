import express from 'express'
import { getGoals, createGoal } from '../controllers/goalController.js'



const router = express.Router()

// Route to get all goals
router.get('/', getGoals)

// Route to create a new goal
router.post('/', createGoal)

export default router