import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/sessions">Sessions</Link>
            <Link to="/goals">Goals</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    )
}
