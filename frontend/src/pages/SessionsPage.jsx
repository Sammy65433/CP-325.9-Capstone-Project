import '../styles/SessionsPage.css'

import '../styles/DashboardPage.css'

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
                <p>Your session form will go here.</p>
            </section>

            {/* This section will later display progress updates for the user's goals */}
            <section className="sessions-panel">
                <h2>Your Sessions</h2>
                <p>Your saved training sessions will appear here.</p>
            </section>
        </main>
    )
}
