import {Link} from 'react-scroll'
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

import './NavBar.scss'
const NavBar = () => {
    const { theme, toggleTheme } = useContext(GlobalContext);


    return (
        <nav className={`${theme}`}>
            <Link to='home'>
                <h3> {"<Arthur Pelegrino />"} </h3>            
            </Link>        
            <h3> {theme}</h3>
            <ul>
            <Link to="about" >
                <Button variant='primary'> About </Button>
            </Link>
            <Link to="projects">
                <Button variant='primary'> Projects </Button>
            </Link>
            <Link to="contact">
                <Button variant='primary'> Contact </Button>
            </Link>
            <Button onClick={toggleTheme}>
                {theme === 'dark' ? '☀️' : '🌒'}
            </Button>
            <Button>
                🇧🇷
            </Button>
            </ul>
        </nav>
    )
}

export default NavBar