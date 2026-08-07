import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginPage.css'

export default function LoginPage() {
    console.log('LoginPage rendered')

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Login form submitted with:', email)
        navigate('/dashboard')
    }

    return (
        <main className="login-page">
            <section className="login-header">
                <h1 className="login-title">Login</h1>
                <p className="login-subtitle">
                    Enter your email to continue to your training dashboard.
                </p>
            </section>

            <section className="login-panel">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => {
                                console.log('Login email changed:', event.target.value)
                                setEmail(event.target.value)
                            }}
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Continue
                    </button>
                </form>
            </section>
        </main>
    )
}
