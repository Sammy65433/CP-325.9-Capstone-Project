// Stores the backend API endpoint for goal-related requests in one reusable variable
const BASE_URL = 'http://localhost:3000/api/goals'

// Gets all goals from the backend
export async function getGoals() {
    // Logs that the frontend is about to request all goals
    console.log('getGoals called from goalService')

    // Sends a GET request to the goals API endpoint
    const response = await fetch(BASE_URL)
    console.log('getGoals response:', response)

    // Converts the JSON response into a usable JavaScript array or object
    const data = await response.json()
    console.log('getGoals data:', data)

    // Returns the goal data back to the component that called this function
    return data
}
