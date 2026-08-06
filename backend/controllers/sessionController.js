// Imports the Session model so this controller can read and create session documents in MongoDB
import Session from '../models/Session.js'

// Gets all training sessions from MongoDB
export async function getSessions(req, res) {
    try {
        console.log('getSessions route hit')
        // Retrieves all session documents from the sessions collection
        const sessions = await Session.find()
        console.log('sessions found:', sessions)
        // Sends all sessions back to the client with a success status
        res.status(200).json(sessions)
    } catch (error) {
        console.log('getSessions error:', error.message)
        res.status(500).json({ message: 'Server error' })
    }
}

// Creates a new training session in MongoDB
export async function createSession(req, res) {
    try {
        console.log('createSession route hit')
        // Logs the incoming request body for debugging
        console.log('req.body:', req.body)

        // Pulls the session fields from the request body
        const { sport, drill, duration, date, notes } = req.body

        // Checks that the required fields were provided
        if (!sport || !drill || !duration || !date) {
            console.log('createSession failed: missing required fields')

            // Returns a bad request response with a helpful message
            return res.status(400).json({ message: 'Sport, drill, duration, and date are required' })
        }

        // Creates a new session document in MongoDB using the submitted data
        const session = await Session.create({
            sport,
            drill,
            duration,
            date,
            notes,
        })

        console.log('new session created:', session)

        res.status(201).json(session)
    } catch (error) {
        console.log('createSession error:', error.message)

        res.status(500).json({ message: 'Server error' })
    }
}
// Deletes one training session from MongoDB by id
export async function deleteSession(req, res) {
    try {
        console.log('deleteSession route hit')
        console.log('session id to delete:', req.params.id)

        const deletedSession = await Session.findByIdAndDelete(req.params.id)
        console.log('deleted session:', deletedSession)

        if (!deletedSession) {
            console.log('deleteSession failed: session not found')
            return res.status(404).json({ message: 'Session not found' })
        }

        res.status(200).json(deletedSession)
    } catch (error) {
        console.log('deleteSession error:', error.message)
        res.status(500).json({ message: 'Server error' })
    }
}
