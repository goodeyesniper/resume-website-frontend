import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import BlogPages from './components/BlogPages';

import LayoutWithLoader from './components/LayoutWithLoader';

function App() {

  return (
    <>
      <Routes>
        {/* Wrapped routes that trigger LoadingScreen */}
        <Route element={<LayoutWithLoader />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogpages" element={<BlogPages />} />
        </Route>

        {/* Unwrapped route: Blog with dynamic postId — no LoadingScreen */}
        <Route path="/blog/:postId?" element={<><Navbar /><Blog /><Footer /></>} />
      </Routes>
    </>
  )
}

export default App;