import {Link} from 'react-scroll'
import Button from 'react-bootstrap/Button';
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <h3> Arthur Pelegrino </h3>
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
            </ul>
        </nav>
    )
}

export default NavBar