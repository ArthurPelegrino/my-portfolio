import GlobalContext from '../../context/GlobalContext.js'
import { useContext } from 'react'
import Contact from '../contact/Contact.js'
import TechStack from '../techStack/TechStack.jsx'
import { aboutTexts, techStackTexts, myWorkTexts} from '../../texts/aboutTexts.js'
import { mainSectionTexts } from '../../texts/mainSectionTexts.js'
import './SectionClass.scss'

const Sections = () => {
    const { theme } = useContext(GlobalContext);
    const { language } = useContext(GlobalContext)
    const { myTitle, subtitle, description } = aboutTexts
    

    return (
        <>
            <section id="home" className={`mainSection ${theme}`}>
                <div>
                <h1>{mainSectionTexts.myTitle[language]}</h1>
                <h4>{mainSectionTexts.description[language]}</h4>
                <ul>
                    <p>{mainSectionTexts.links.about[language]}</p>
                    <p> {mainSectionTexts.links.technologies[language]}</p>
                    <p> {mainSectionTexts.links.contact[language]}</p>
                </ul>
                </div>
            </section>

            <section id="about" className='sectionClass alter2'>
                <div>
                    <h1>{myTitle[language]}</h1>
                    <h4>{subtitle[language]}</h4>
                    <p> {description[language]}</p>
                </div>
                <div>
                    <h1>{techStackTexts.myTitle[language]}</h1>
                    <h4>{techStackTexts.subtitle[language]}</h4>
                    <p>{techStackTexts.description[language]}</p>
                        <TechStack />
                </div>
            </section>

            <section id="projects" className='sectionClass alter1'>
                <div>
                    <h1> {myWorkTexts.myTitle[language]}</h1>
                    <h4> {myWorkTexts.subtitle[language]}</h4>
                    <p>{myWorkTexts.description[language]}</p>
                </div>
            </section>
            <section id='contact'>
                < Contact  />
            </section>
        </>

    )
}

export default Sections