import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Hobbies from './Pages/Hobbies';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="Aboutme" element={<Aboutme/>}/>
     <Route path="Hobbies" element={<Hobbies/>}/>
     <Route path="Qualifications" element={<Qualifications/>}/>
     <Route path="Skills" element={<Skills/>}/>

      </Routes>
      </BrowserRouter>
      
     </div>
  );
}

export default App;
