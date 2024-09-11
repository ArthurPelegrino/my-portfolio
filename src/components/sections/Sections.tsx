import './SectionClass.scss'

const Sections = () => {
    return (
        <>
            <section id="home" className='mainSection'>
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
                    <h1>Who I Am</h1>
                <div>
                    <h4>A summary of how I became a professional and enthusiastic developer.</h4>
                    <p> I am a Full-Stack Developer with a degree from Trybe and extensive self-taught experience. I have the ability to initiate new applications and features from the ground up, handling everything from project configuration to feature implementation. I prioritize user experience, accessibility, and optimal web performance. Passionate about technology and innovation, I am constantly seeking new knowledge and staying up-to-date with the latest trends.</p>
                </div>
                    <h1>Tech Stack</h1>
                <div>
                    <h4> The tools and technologies I use to bring ideas to life</h4>
                    <p>Throughout my development journey, I have worked with a wide range of tools and technologies that allow me to build efficient and scalable applications. Below are some of the key technologies I use regularly, each playing an important role in bringing projects to life, from the back-end infrastructure to front-end design.</p>
                </div>
            </section>

            <section id="projects" className='sectionClass alter1'>
                <div>
                    <h1>My Work</h1>
                    <h4> My projects</h4>
                    <p>A showcase of the projects that define my skills and creativity</p>
                </div>
            </section>

            <section id="technologies" className='sectionClass alter2'>
                <div>
                    <h1>Tech Stack</h1>
                    <h4>The tools and technologies I use to bring ideas to life</h4>
                    <p>Throughout my development journey, I have worked with a wide range of tools and technologies that allow me to build efficient and scalable applications. Below are some of the key technologies I use regularly, each playing an important role in bringing projects to life, from the back-end infrastructure to front-end design.</p>
                </div>
            </section>

            <section id="contact" className='sectionClass alter1'>
                <div>
                    <h1>Let's Connect</h1>
                    <h4>Feel free to reach out for collaborations or inquiries</h4>
                    <p>This is the contact section.</p>
                </div>
            </section>
        </>

    )
}

export default Sections