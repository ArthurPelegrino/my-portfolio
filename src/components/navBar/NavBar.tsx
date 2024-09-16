import {Link} from 'react-scroll'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from 'react';
import { useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { navBarButtonsText } from '../../texts/navBarTexts.js'

import './NavBar.scss'
import { DropdownToggle } from 'react-bootstrap';
const NavBar = () => {
    const { theme, toggleTheme, setLanguage, language  } = useContext(GlobalContext);
    const [selectedLanguage, setSelectedLanguage] = useState('🇧🇷');

    const { about, projects, contact, selectedLanguageText} = navBarButtonsText

    const handleSelect = (eventKey: string | null) => {
      if (eventKey === '1') {
        setSelectedLanguage('🇧🇷')
        setLanguage('pt')};
      if (eventKey === '2') { 
        setSelectedLanguage('🇪🇸');
        setLanguage('es')
      }
      if (eventKey === '3'){
        setSelectedLanguage('🇺🇸');
        setLanguage('en')
      } 
    };


    return (
        <nav className={ `navBar ${theme}`}>
            <Link to='home'>
                <h3> {"<Arthur Pelegrino />"}</h3>            
            </Link>
            <ul>
            <Link to="about" >
                <Button variant='primary'> {about[language]} </Button>
            </Link>
            <Link to="projects">
                <Button variant='primary'> {projects[language]} </Button>
            </Link>
            <Link to="contact">
                <Button variant='primary'> {contact[language]} </Button>
            </Link>
            <Dropdown onSelect={handleSelect}>
                <DropdownToggle id='dropdown-basic'>
                   {selectedLanguageText[language]}: {selectedLanguage}
                </DropdownToggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey='3'>🇺🇸 English</Dropdown.Item>
                    <Dropdown.Item eventKey='1'>🇧🇷 Portugês</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>🇪🇸 Español</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>  
            <Button onClick={toggleTheme}>
                {theme === 'dark' ? '☀️' : '🌒'}
                
            </Button>      
            </ul>
        </nav>
    )
}

export default NavBar