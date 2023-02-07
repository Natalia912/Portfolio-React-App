import Nav from "../components/Nav/Nav"
import Intro from "../components/Intro/Intro"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Contacts from "../components/Contacts/Contacts"
import Footer from "../components/Footer/Footer"

function Home() {
  return ( 
    <>
      <Nav />
      <Intro />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
   );
}

export default Home;