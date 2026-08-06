import { useEffect, useState } from 'react'
import '../styles/DashboardPage.css'
import { getSessions } from '../services/sessionService.js'
import { getGoals } from '../services/goalService.js'

export default function DashboardPage() {
    console.log('DashboardPage rendered')

    // Stores sessions loaded from the backend
    const [sessions, setSessions] = useState([])

    // Stores goals loaded from the backend
    const [goals, setGoals] = useState([])

    // Loads dashboard data when the page first renders
    useEffect(() => {
        async function loadDashboardData() {
            try {
                console.log('Fetching dashboard data')

                const sessionsData = await getSessions()
                console.log('Dashboard sessions fetched:', sessionsData)
                setSessions(sessionsData)

                const goalsData = await getGoals()
                console.log('Dashboard goals fetched:', goalsData)
                setGoals(goalsData)
            } catch (error) {
                console.log('Error loading dashboard data:', error.message)
            }
        }

        loadDashboardData()
    }, [])

    // Gets the most recent session from the sessions array
    const latestSession = sessions[0]

    return (
        <main className="dashboard-page">
            {/* Dashboard page header */}
            <section className="dashboard-header">
                <h1 className="dashboard-title">Sports Training Tracker Dashboard</h1>
                <p className="dashboard-subtitle">
                    Track your sessions, monitor your goals, and stay consistent with your training.
                </p>
            </section>

            {/* Summary cards display high-level stats from backend data */}
            <section className="dashboard-cards">
                <div className="dashboard-card">
                    <h3>Total Sessions</h3>
                    <p>{sessions.length}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Active Goals</h3>
                    <p>{goals.length}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Latest Activity</h3>
                    <p>
                        {latestSession
                            ? `${latestSession.sport} - ${latestSession.drill}`
                            : 'No activity yet'}
                    </p>
                </div>
            </section>

            {/* Recent sessions section shows actual saved session data */}
            <section className="dashboard-panel">
                <h2>Recent Sessions</h2>

                {sessions.length > 0 ? (
                    sessions.slice(0, 3).map((session) => (
                        <div className="dashboard-item" key={session._id || session.id}>
                            <p><strong>{session.sport}</strong> - {session.drill}</p>
                            <p>{session.date}</p>
                        </div>
                    ))
                ) : (
                    <p>No sessions yet.</p>
                )}
            </section>

            {/* Goal progress section shows actual saved goal data */}
            <section className="dashboard-panel">
                <h2>Goal Progress</h2>

                {goals.length > 0 ? (
                    goals.slice(0, 3).map((goal) => (
                        <div className="dashboard-item" key={goal._id || goal.id}>
                            <p><strong>{goal.goalTitle}</strong></p>
                            <p>
                                {goal.currentValue} / {goal.targetValue} - {goal.status}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No goals yet.</p>
                )}
            </section>
        </main>
    )
}
