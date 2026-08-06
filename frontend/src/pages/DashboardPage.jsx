import '../styles/DashboardPage.css'

export default function DashboardPage() {
    // console.log('DashboardPage rendered')

    return (
        <main className="dashboard-page">
            {/* Main page heading for the dashboard */}
            <h1 className="dashboard-title">Sports Training Tracker Dashboard</h1>

            {/* Summary cards give a quick overview of the user's training activity */}
            <section className="dashboard-cards">
                <div className="dashboard-card">Total Sessions</div>
                <div className="dashboard-card">Active Goals</div>
                <div className="dashboard-card">Latest Activity</div>
            </section>

            {/* This section will later display the user's most recent training sessions */}
            <section className="dashboard-section">
                <h2>Recent Sessions</h2>
                <p>Recent training sessions will appear here.</p>
            </section>

            {/* This section will later display progress updates for the user's goals */}
            <section className="dashboard-section">
                <h2>Goal Progress</h2>
                <p>Goal progress will appear here.</p>
            </section>
        </main>
    )
}
