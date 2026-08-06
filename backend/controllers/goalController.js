import Goal from '../models/Goal.js'

// Gets all goals from MongoDB
export async function getGoals(req, res) {
    try {
        console.log('getGoals route hit')

        const goals = await Goal.find()
        console.log('goals found:', goals)

        res.status(200).json(goals)
    } catch (error) {
        console.log('getGoals error:', error.message)
        res.status(500).json({ message: 'Server error' })
    }
}

// Creates a new goal in MongoDB
export async function createGoal(req, res) {
    try {
        console.log('createGoal route hit')
        console.log('req.body:', req.body)

        const { goalTitle, targetValue, currentValue, deadline, status } = req.body

        if (!goalTitle || !targetValue || !currentValue || !deadline || !status) {
            console.log('createGoal failed: missing required fields')
            return res.status(400).json({ message: 'All goal fields are required' })
        }

        const goal = await Goal.create({
            goalTitle,
            targetValue,
            currentValue,
            deadline,
            status,
        })

        console.log('new goal created:', goal)

        res.status(201).json(goal)
    } catch (error) {
        console.log('createGoal error:', error.message)
        res.status(500).json({ message: 'Server error' })
    }
}

// Deletes one goal from MongoDB by id
export async function deleteGoal(req, res) {
    try {
        console.log('deleteGoal route hit')
        console.log('goal id to delete:', req.params.id)

        const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
        console.log('deleted goal:', deletedGoal)

        if (!deletedGoal) {
            console.log('deleteGoal failed: goal not found')
            return res.status(404).json({ message: 'Goal not found' })
        }

        res.status(200).json(deletedGoal)
    } catch (error) {
        console.log('deleteGoal error:', error.message)
        res.status(500).json({ message: 'Server error' })
    }
}
