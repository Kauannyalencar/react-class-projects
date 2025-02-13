import {Link} from 'react-router-dom'
import styles from './navbar.css';

function Navbar(params) {
    return (
        <ul className='list'>
            <li className='item'><Link to="/">Home</Link></li>
            <li className='item'>
                <Link to="/empresa">Empresa</Link>
            </li>
            <li className='item'>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    )
}

export default Navbar;