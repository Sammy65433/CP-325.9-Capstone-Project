

const BASE_URL = 'http://localhost:3000/api/sessions'

// Gets all sessions from the backend
export async function getSessions() {
    console.log('getSessions called from sessionService')

    // Sends a GET request to the sessions API endpoint
    const response = await fetch(BASE_URL)
    console.log('getSessions response:', response)

    const data = await response.json()
    console.log('getSessions data:', data)

    // Returns the session data back
    return data
}

// Sends a new session to the backend
export async function createSession(sessionData) {
    // Logs the session data being sent to the backend
    console.log('createSession called with:', sessionData)

    // Sends a POST request to the sessions API endpoint 
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            // Tells the backend that the request body contains JSON data
            'Content-Type': 'application/json',
        },

        // Converts the JavaScript session object into a JSON string 
        body: JSON.stringify(sessionData),
    })

    console.log('createSession response:', response)

    // Converts the backend JSON response into a usable JavaScript object
    const data = await response.json()
    console.log('createSession data:', data)

    // Returns the saved session document back to the component
    return data
}