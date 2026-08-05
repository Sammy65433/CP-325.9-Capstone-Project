import '../styles/DashboardPage.css'

export default function DashboardPage() {
    return (
<main className='dashboard-page'>
    <h1 className='dashboard-title'>
        Sports Training Tracker Dashboard 
    </h1>
    <section className='dashboard-cards'>
        <div className='dashboard-card'>Total Sessions</div>
        <div className='dashboard-card'>Active Goals</div>
        <div className='dashboard-card'>Latest Activity</div>
    </section>

    <section className='dashboard-section'>
        <h2>Recent Sessions</h2>
        <p>Recent Training Sessions Appear here.</p>
    </section>

    <section className='dashboard-section'>
        <h2>Goal Progress</h2>
        <p>Goal Progression appear here.</p>
    </section>
</main>
    )
}
