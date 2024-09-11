import NavBar from './components/navBar/NavBar';
import './SectionClass.scss'

function App() {
  return (
    <div >
      <NavBar />
      <section id="about" className='sectionClass mainSection'>
        <div>
          <h1>Hi, I am Arthur!</h1>
          <h4>Full-Stack Web Developer</h4>
          <p>This is about section</p>
        </div>
        <div>
          <h1>Teste</h1>
          <h4>A bit about me</h4>
          <p>This is about section</p>
        </div>
      </section>

      <section id="projects" className='sectionClass alter1'>
        <div>
          <h1>Projects</h1>
          <h4> My projects</h4>
          <p>This is the projects section.</p>
        </div>
      </section>

      <section id="contact" className='sectionClass alter2'>
        <h1>Contact</h1>
        <h4>My contact</h4>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
}

export default App;
