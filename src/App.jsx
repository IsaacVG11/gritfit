import './css/App.css'
import "./css/ComponentStyles.css"
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Product from './components/Product.jsx'
import Category from './components/Category.jsx'
import Contact from './components/Contact.jsx'
function App() {
  return (
      <section className="main-screen">
        <Navbar />
        <Hero />
        <Category />
        <Product />
        <Contact />
      </section>
  )
}

export default App
