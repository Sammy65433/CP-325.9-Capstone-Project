import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/RegisterPage.css'

export default function RegisterPage() {
    console.log('RegisterPage rendered')

    const navigate = useNavigate()

    // Stores the simple register form values
    const [formData, setFormData] = useState({
        username: '',
        email: '',
    })

    // Updates the register form fields
    function handleChange(event) {
        console.log('Register form changed:', event.target.name, event.target.value)

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    // Handles the simple register flow by redirecting the user to the dashboard
    function handleSubmit(event) {
        event.preventDefault()
        console.log('Register form submitted:', formData)

        navigate('/dashboard')
    }

    return (
        <main className="register-page">
            {/* Page header introduces the register page */}
            <section className="register-header">
                <h1 className="register-title">Register</h1>
                <p className="register-subtitle">
                    Create a simple athlete profile to start tracking your training.
                </p>
            </section>

            {/* This panel holds the simple register form */}
            <section className="register-panel">
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="register-button">
                        Continue
                    </button>
                </form>
            </section>
        </main>
    )
}