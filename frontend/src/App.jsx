import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Bobo from "./pages/Bobo";
import Blog from "./pages/Blog";
import BlogDetail from './pages/BlogDetail';
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/blogs/:id' element={<BlogDetail />} /> 
          <Route path="/bobo" element={<Bobo />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
 
    </>
  )
}

export default App;
