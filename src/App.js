
import './App.css';
import Navbar from "./Components/Navbar/Navbar";

import Footer from './Components/Footer/Footer';
import{Route, Routes} from "react-router-dom";
import { HomePage , AboutPage ,ProjectPage, SkillPage,ContactPage } from './Page/index';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
  
  <Footer/>
    </div>
  );
}

export default App;
