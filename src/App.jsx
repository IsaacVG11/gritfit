import "./css/ComponentStyles.css"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Product from './components/Product.jsx'
import Category from './components/Category.jsx'
import Contact from './components/Contact.jsx'
//import About from './components/About.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
      <StrictMode>
          <Navbar />
          <Hero />
          <Category />
          <Product />
          {/**<About /> **/}
          <Contact />
      </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
