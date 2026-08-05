import '../styles/GoalsPage.css'

export default function GoalsPage() {
    console.log('GoalsPage rendered')

    return (
        <main className="goals-page">
            {/* Page header introduces the goals section of the app */}
            <section className="goals-header">
                <h1 className="goals-title">Training Goals</h1>
                <p className="goals-subtitle">
                    Set goals, track progress, and stay focused on your athletic development.
                </p>
            </section>

            {/* This panel holds the goal form users will later use to create new goals */}
            <section className="goals-panel">
                <h2>Add a New Goal</h2>

                {/* The form is currently for layout and structure before backend connection */}
                <form className="goals-form">
                    {/* Input for the title or name of the goal */}
                    <div className="form-group">
                        <label htmlFor="goalTitle">Goal Title</label>
                        <input
                            type="text"
                            id="goalTitle"
                            name="goalTitle"
                            placeholder="Enter Goal title"
                        />
                    </div>

                    {/* Input for the target amount or performance goal */}
                    <div className="form-group">
                        <label htmlFor="targetValue">Target Value</label>
                        <input
                            type="text"
                            id="targetValue"
                            name="targetValue"
                            placeholder="Example: 20 push-ups or 5 miles"
                        />
                    </div>

                    {/* Input for the user's current progress toward the goal */}
                    <div className="form-group">
                        <label htmlFor="currentValue">Current Value</label>
                        <input
                            type="text"
                            id="currentValue"
                            name="currentValue"
                            placeholder="Enter current progress"
                        />
                    </div>

                    {/* Input for the goal deadline */}
                    <div className="form-group">
                        <label htmlFor="deadline">Deadline</label>
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                        />
                    </div>

                    {/* Dropdown for the goal status */}
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="">Select status</option>
                            <option value="not-started">Not Started</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    {/* Submit button will later send the goal data to the backend */}
                    <button type="submit" className="goals-button">
                        Add Goal
                    </button>
                </form>
            </section>

            {/* This panel will later display the user's saved goals */}
            <section className="goals-panel">
                <h2>Your Goals</h2>

                <div className="goal-card">
                    <h3>Run 5 Miles Without Stopping</h3>
                    <p><strong>Target Value:</strong> 5 miles</p>
                    <p><strong>Current Value:</strong> 3 miles</p>
                    <p><strong>Deadline:</strong> 2026-09-01</p>
                    <p><strong>Status:</strong> In Progress</p>
                </div>

                <div className="goal-card">
                    <h3>Complete 50 Push-Ups</h3>
                    <p><strong>Target Value:</strong> 50 push-ups</p>
                    <p><strong>Current Value:</strong> 35 push-ups</p>
                    <p><strong>Deadline:</strong> 2026-08-20</p>
                    <p><strong>Status:</strong> In Progress</p>
                </div>
            </section>

        </main>
    )
}
