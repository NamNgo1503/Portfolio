import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  let bgColor;
  switch(location.pathname) {
    case '/projects':
      bgColor = '#11100e';  
      break;
    default:
      bgColor = 'black';  
  }
  
  return (
    <div className="App" style={{ backgroundColor: bgColor}}>
    
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
    
    </div>
  );
}

export default App;
