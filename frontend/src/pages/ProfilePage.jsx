import '../styles/ProfilePage.css'

export default function ProfilePage() {
    console.log('ProfilePage rendered')

    return (
        <main className="profile-page">
            {/* Page header introduces the user profile section */}
            <section className="profile-header">
                <h1 className="profile-title">Athlete Profile</h1>
                <p className="profile-subtitle">
                    Review your training identity, goals, and activity summary.
                </p>
            </section>

            {/* This section shows sample account details for the athlete */}
            <section className="profile-panel">
                <h2>Account Information</h2>
                <p><strong>Name:</strong> Samuel Johnson</p>
                <p><strong>Email:</strong> samuel@example.com</p>
                <p><strong>Member Since:</strong> August 2026</p>
            </section>

            {/* This section shows sample sports and training preferences */}
            <section className="profile-panel">
                <h2>Training Focus</h2>
                <p><strong>Favorite Sport:</strong> Basketball</p>
                <p><strong>Main Goal:</strong> Improve endurance and consistency</p>
                <p><strong>Weekly Training Days:</strong> 4 days</p>
            </section>

            <section className="profile-panel">
                <h2>Quick Stats</h2>
                <p><strong>Total Sessions:</strong> 12</p>
                <p><strong>Active Goals:</strong> 3</p>
                <p><strong>Last Workout:</strong> Sprint Practice</p>
            </section>

        </main>
    )
}
