import GlobalContext from '../../context/GlobalContext.js'
import { useContext } from 'react'
import Contact from '../contact/Contact.js'
import TechStack from '../techStack/TechStack.jsx'

import './SectionClass.scss'

const Sections = () => {
    const { theme } = useContext(GlobalContext);
    return (
        <>
            <section id="home" className={`mainSection ${theme}`}>
                <div>
                <h1>Hi, I am Arthur!</h1>
                <h4>Full-Stack Web Developer</h4>
                <ul>
                    <p>More about me</p>
                    <p> Tecnologies</p>
                    <p> Contact</p>
                </ul>
                </div>
            </section>

            <section id="about" className='sectionClass alter2'>
                <div>
                    <h1>Who I Am</h1>
                    <h4>A summary of how I became a professional and enthusiastic developer.</h4>
                    <p> I am a Full-Stack Developer with a degree from Trybe and extensive self-taught experience. I have the ability to initiate new applications and features from the ground up, handling everything from project configuration to feature implementation. I prioritize user experience, accessibility, and optimal web performance. Passionate about technology and innovation, I am constantly seeking new knowledge and staying up-to-date with the latest trends.</p>
                </div>
                <div>
                    <h1>Tech Stack</h1>
                    <h4> The tools and technologies I use to bring ideas to life</h4>
                    <p>Throughout my development journey, I have worked with a wide range of tools and technologies that allow me to build efficient and scalable applications. Below are some of the key technologies I use regularly, each playing an important role in bringing projects to life, from the back-end infrastructure to front-end design.</p>
                        <TechStack />
                </div>
            </section>

            <section id="projects" className='sectionClass alter1'>
                <div>
                    <h1>My Work</h1>
                    <h4> My projects</h4>
                    <p>A showcase of the projects that define my skills and creativity</p>
                </div>
            </section>
            <section id='contact'>
                < Contact  />
            </section>
        </>

    )
}

export default Sections