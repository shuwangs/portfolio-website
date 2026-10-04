import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Bobo from "./pages/Bobo";
import BoboAlbum from "./pages/BoboAlbum";
import Blog from "./pages/Blog";
import BlogDetail from './pages/BlogDetail';
import Me from './pages/Me';
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/blogs/:slug' element={<BlogDetail />} />
          <Route path="/bobo" element={<Bobo />} />
          <Route path="/bobo/album" element={<BoboAlbum />} />
          <Route path="/me" element={<Me />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;
