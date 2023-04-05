import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Certifications from './Pages/Certifications';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Projects from './Pages/Projects';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
import Workshop from './Pages/Workshop';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="Aboutme" element = {<Aboutme/>}/>
      <Route path="Certifications" element = {<Certifications/>}/>
      <Route path="Experience" element = {<Experience/>}/>
      <Route path="Hobbies" element = {<Hobbies/>}/>
      <Route path="Projects" element = {<Projects/>}/>
      <Route path="Qualifications" element = {<Qualifications/>}/>
      <Route path="Skills" element = {<Skills/>}/>
      <Route path="Workshop" element = {<Workshop/>}/>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
