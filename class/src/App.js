import logo from './logo.svg';
import './App.css';
import navbar from './components/navbar';
import { Routes,Route } from 'react-router-dom'
import Hobbies from './components/pages/Hobbies';
import Name from './components/pages/Name';
import Skills from './components/pages/Skills';
function App() {
  return (
    <div className="App">
      <navbar/>
      <Routes>
      <Route path = "/Hobbies" element = {<Hobbies/>}/> 
      <Route path = "/Name" element = {<Name/>}/> 
      <Route path = "/Skills" element = {<Skills/>}/>  
      </Routes>
    </div>
  );
}

export default App;
