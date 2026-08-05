import '../styles/GoalsPage.css'

export default function GoalsPage() {
    console.log('GoalsPage rendered')

    return (
        <main className='goals-page'>
            {/* Page header introduces the goals section of the app */}
            <section className='goals-header'>
                <h1 className='goals-title'>Training Goals</h1>
                <p className='goals-subtitle'>
                    Set goals, Track progress, and stay focused!</p>
            </section>

            {/* This section will later hold the form for creating a new goal */}
            <section className="goals-panel">
                <h2>Add a New Goal</h2>
                <p>Your goal form will go here.</p>
            </section>

            {/* This section will later display the list of saved goals */}
            <section className="goals-panel">
                <h2>Your Goals</h2>
                <p>Your saved goals will appear here.</p>
            </section>
        </main>
    )
}
