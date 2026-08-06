import { useEffect, useState } from 'react'

import '../styles/GoalsPage.css'
import { getGoals, createGoal, deleteGoal } from '../services/goalService.js'


export default function GoalsPage() {
    console.log('GoalsPage rendered')

    // Stores the current values typed into the goal form
    const [formData, setFormData] = useState({
        goalTitle: '',
        targetValue: '',
        currentValue: '',
        deadline: '',
        status: '',
    })

    // Stores the list of saved goals shown on the page
    // Stores the list of goals loaded from the backend
    const [goals, setGoals] = useState([])

    // Loads goals from the backend when the page first renders
    useEffect(() => {
        async function loadGoals() {
            try {
                console.log('Fetching goals from backend')
                const data = await getGoals()
                console.log('Goals fetched:', data)
                setGoals(data)
            } catch (error) {
                console.log('Error loading goals:', error.message)
            }
        }

        loadGoals()
    }, [])

    // Updates the form state whenever the user types into an input or changes the dropdown
    function handleChange(event) {
        // Logs which goal field changed and the new value entered by the user
        console.log('Goals form changed:', event.target.name, event.target.value)

        setFormData({
            // Copies the existing form values so the other fields are preserved
            ...formData,

            // Updates only the field that changed
            [event.target.name]: event.target.value,
        })
    }
    // Sends form data to the backend and updates the page with the saved goal
    // Runs when the goal form is submitted
    async function handleSubmit(event) {
        // Prevents the browser from refreshing on submit
        event.preventDefault()

        // Logs the full goal form data being submitted
        console.log('Goals form submitted:', formData)

        try {
            const newGoal = await createGoal(formData)
            console.log('Goal saved to backend:', newGoal)

            setGoals([newGoal, ...goals])

            setFormData({
                goalTitle: '',
                targetValue: '',
                currentValue: '',
                deadline: '',
                status: '',
            })
        } catch (error) {
            console.log('Error creating goal:', error.message)
        }
    }
    async function handleDelete(id) {
        console.log('Delete goal clicked:', id)

        try {
            await deleteGoal(id)
            setGoals(goals.filter((goal) => goal._id !== id))
        } catch (error) {
            console.log('Error deleting goal:', error.message)
        }
    }

    return (
        <main className="goals-page">
            {/* Page header introduces the goals section of the app */}
            <section className="goals-header">
                <h1 className="goals-title">Training Goals</h1>
                <p className="goals-subtitle">
                    Set goals, track progress, and stay focused on your athletic development.
                </p>
            </section>

            {/* This panel holds the form for creating a new goal */}
            <section className="goals-panel">
                <h2>Add a New Goal</h2>

                {/* Controlled form stores goal input in React state */}
                <form className="goals-form" onSubmit={handleSubmit}>
                    {/* Input for the goal title */}
                    <div className="form-group">
                        <label htmlFor="goalTitle">Goal Title</label>
                        <input
                            type="text"
                            id="goalTitle"
                            name="goalTitle"
                            placeholder="Enter goal title"
                            value={formData.goalTitle}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Input for the target value of the goal */}
                    <div className="form-group">
                        <label htmlFor="targetValue">Target Value</label>
                        <input
                            type="text"
                            id="targetValue"
                            name="targetValue"
                            placeholder="Example: 20 push-ups or 5 miles"
                            value={formData.targetValue}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Input for the user's current progress toward the goal */}
                    <div className="form-group">
                        <label htmlFor="currentValue">Current Value</label>
                        <input
                            type="text"
                            id="currentValue"
                            name="currentValue"
                            placeholder="Enter current progress"
                            value={formData.currentValue}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Input for the goal deadline */}
                    <div className="form-group">
                        <label htmlFor="deadline">Deadline</label>
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Dropdown for tracking the current status of the goal */}
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="">Select status</option>
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    {/* Submit button adds the new goal to local state */}
                    <button type="submit" className="goals-button">
                        Add Goal
                    </button>
                </form>
            </section>

            {/* This panel displays saved goals from local state */}
            <section className="goals-panel">
                <h2>Your Goals</h2>

                {/* Loops through the goals array and displays each saved goal */}
                {goals.map((goal) => (
                    <div className="goal-card" key={goal._id || goal.id}>
                        <h3>{goal.goalTitle}</h3>
                        <p><strong>Target Value:</strong> {goal.targetValue}</p>
                        <p><strong>Current Value:</strong> {goal.currentValue}</p>
                        <p><strong>Deadline:</strong> {goal.deadline}</p>
                        <p><strong>Status:</strong> {goal.status}</p>

                        <button
                            type="button"
                            className="goals-delete-button"
                            onClick={() => handleDelete(goal._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </section>

        </main>
    )
}
