

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