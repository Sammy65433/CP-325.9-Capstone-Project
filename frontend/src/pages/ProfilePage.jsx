import '../styles/ProfilePage.css'


export default function ProfilePage() {
    console.log('ProfilePage rendered')

    return (
        <main className="profile-page">
            {/* Page header introduces the user profile section */}
            <section className="profile-header">
                <h1 className="profile-title">Profile</h1>
                <p className="profile-subtitle">
                    View your account information and training focus.
                </p>
            </section>

            {/* This section will later display user account details */}
            <section className="profile-panel">
                <h2>Account Information</h2>
                <p>Name: User name will appear here.</p>
                <p>Email: User email will appear here.</p>
            </section>

            {/* This section will later display progress updates for the user's goals */}
            <section className="profile-panel">
                <h2>Training Focus</h2>
                <p>Your training focus or favorite sport can appear here.</p>
            </section>
        </main>
    )
}
