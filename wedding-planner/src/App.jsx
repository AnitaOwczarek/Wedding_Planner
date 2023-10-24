import './App.css'
import Blog from './components/blog/Blog'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Offert from './components/offert/Offert'
import Opinion from './components/opinion/Opinion'
import Contact from './components/contact/Contact'
import OurProjects from './components/our_projects/OurProjects'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Offert />
        <OurProjects />
        <Opinion />
        <Blog />
        <Contact />
      </div>
    </>
  )
}

export default App
