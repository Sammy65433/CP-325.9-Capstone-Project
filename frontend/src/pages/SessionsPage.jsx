import { useEffect, useState } from 'react'
import '../styles/SessionsPage.css'
import { getSessions, createSession } from '../services/sessionService.js'

export default function SessionsPage() {
    console.log('SessionPage rendered')

    // Store the current values typed into the session form
    const [formData, setFormData] = useState({
        sport: '',
        drill: '',
        duration: '',
        date: '',
        notes: '',
    })
    // Stores the list of training sessions shown on the page
    const [sessions, setSessions] = useState([
        
    ])

    // Updates the form state whenever the user types into an input field
    function handleChange(event) {
        // Logs which field changed and the new value entered by the user
        console.log('Sessions form changed:', event.target.name, event.target.value)
        setFormData({
            // Copies the existing form values 
            ...formData,
            // Updates only the input field that was changed
            [event.target.name]: event.target.value,
        })
    }

    // Runs when the session form is submitted
    function handleSubmit(event) {
        // Prevents the browser from refreshing the page on form submit
        event.preventDefault()

        // Logs the full form data being submitted
        console.log('Sessions form submitted:', formData)

        // Creates a new session object using the current form values
        const newSession = {
            // Creates a simple unique id based on the current timestamp
            id: Date.now(),

            // Copies all form fields into the new session object
            ...formData,
        }

        // Adds the new session to the beginning of the sessions array
        setSessions([newSession, ...sessions])

        // Clears the form after the session is added
        setFormData({
            sport: '',
            drill: '',
            duration: '',
            date: '',
            notes: '',
        })
    }

    return (
        <main className="sessions-page">
            {/* Page header introduces the training sessions section */}
            <section className="sessions-header">
                <h1 className="sessions-title">Training Sessions</h1>
                <p className="sessions-subtitle">
                    Add, review, and Organize your Sports Training sessions
                </p>
            </section>

            {/* This section will later hold the form for adding a new training session */}
            <section className="sessions-panel">
                <h2>Add Training Session</h2>
                {/* form layout and structure  */}
                <form className='sessions-form' onSubmit={handleSubmit}>
                    {/* Input for sport category */}
                    <div className='form-group'>
                        <label htmlFor='sport'>Sport</label>
                        <input
                            type='text'
                            id='sport'
                            name='sport'
                            placeholder='Enter sport'
                            value={formData.sport}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Input for workout or drill */}
                    <div className='form-group'>
                        <label htmlFor='drill'>Drill / Workout Name</label>
                        <input
                            type='text'
                            id='drill'
                            name='drill'
                            placeholder='Enter workout or drill'
                            value={formData.drill}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Input for how long training session lasted */}
                    <div className='form-group'>
                        <label htmlFor='duration'>Duration</label>
                        <input
                            type='text'
                            id='duration'
                            name='duration'
                            placeholder='Example: 45mins'
                            value={formData.duration}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Input for date of training session */}
                    <div className='form-group'>
                        <label htmlFor='date'>Date</label>
                        <input
                            type='date'
                            id='date'
                            name='date'
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Text area for extra details  */}
                    <div className='form-group'>
                        <label htmlFor='notes'>Notes</label>
                        <textarea
                            id='notes'
                            name='notes'
                            rows='4'
                            placeholder='Add notes about the session'
                            value={formData.notes}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type='submit' className='sessions-button'>
                        Add session
                    </button>
                </form>
            </section>

            {/* Fake saved  */}
            {/* This panel will later display the user's saved sessions */}
            <section className="sessions-panel">
                <h2>Your Sessions</h2>


                {/* Loops through the sessions array and displays each saved session */}
                {sessions.map((session) => (
                    <div className="session-card" key={session.id}>
                        <h3>{session.sport} - {session.drill}</h3>
                        <p><strong>Duration:</strong> {session.duration}</p>
                        <p><strong>Date:</strong> {session.date}</p>
                        <p><strong>Notes:</strong> {session.notes}</p>
                    </div>
                ))}
            </section>

        </main>
    )
}
