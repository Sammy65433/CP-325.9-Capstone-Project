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

// Sends a new goal to the backend
export async function createGoal(goalData) {
    // Logs the goal data being sent to the backend
    console.log('createGoal called with:', goalData)

    // Sends a POST request to the goals API endpoint with the new goal data
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            // Tells the backend that the request body contains JSON data
            'Content-Type': 'application/json',
        },

        // Converts the JavaScript goal object into a JSON string for the request body
        body: JSON.stringify(goalData),
    })

    console.log('createGoal response:', response)

    // Converts the backend response from JSON into a usable JavaScript object
    const data = await response.json()
    console.log('createGoal data:', data)

    // Returns the saved goal document back to the component
    return data
}