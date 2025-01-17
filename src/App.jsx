import './css/App.css'
import "./css/ComponentStyles.css"
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Product from './components/Product.jsx'
import Category from './components/Category.jsx'

function App() {
  return (
      <section className="main-screen">
        <Navbar />
        <Hero />
        <Category />
        <Product />
      </section>
  )
}

export default App
