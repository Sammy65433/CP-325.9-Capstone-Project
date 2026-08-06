import express from 'express'
import { getGoals, createGoal, deleteGoal } from '../controllers/goalController.js'

const router = express.Router()

// Route to get all goals
router.get('/', getGoals)

// Route to create a new goal
router.post('/', createGoal)

// Route to delete a goal by id
router.delete('/:id', deleteGoal)

export default router
