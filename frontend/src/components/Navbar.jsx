import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
    console.log('Navbar rendered')
    return (
        <nav className='navbar'>
            {/* App logo / brand section  */}
            <div className='navbar-brand'>
                <Link to="/dashboard">Sports Training Tracker</Link>
            </div>

            <div className='navbar-links'>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/sessions">Sessions</Link>
            <Link to="/goals">Goals</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </div>
        </nav>
    )
}
