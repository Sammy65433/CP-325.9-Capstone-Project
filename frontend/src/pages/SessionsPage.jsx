import '../styles/SessionsPage.css'

export default function SessionsPage() {
    console.log('SessionPage rendered')

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
                <form className='sessions-form'>
                    {/* Input for sport category */}
                    <div className='form-group'>
                        <label htmlFor='sport'>Sport</label>
                        <input
                            type='text'
                            id='sport'
                            name='sport'
                            placeholder='Enter sport'
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
                        />
                    </div>

                    {/* Input for date of training session */}
                    <div className='form-group'>
                        <label htmlFor='date'>Date</label>
                        <input
                            type='date'
                            id='date'
                            name='date'
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
                        ></textarea>
                    </div>
                    <button type='submit' className='sessions-button'>
                        Add session
                    </button>
                </form>
                </section>

                
            {/* This section will later display progress updates for the user's goals */}
            <section className="sessions-panel">
                <h2>Your Sessions</h2>
                <p>Your saved training sessions will appear here.</p>
            </section>
        </main>
    )
}
