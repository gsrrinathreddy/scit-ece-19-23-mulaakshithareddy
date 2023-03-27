import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import instagramstories from'./components/pages/instagramstories';
import saved from './components/pages/saved';
import followers from './components/pages/followers';
import following from './components/pages/following';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes> 
     <Route path="/instagramstories" element = {<instagramstories/>}/>
     <Route path="/saved" element = {<saved/>}/>
     <Route path="/followers" element = {<followers/>}/>
     <Route path="/following" element = {<following/>}/>
     </Routes>
    </div>
  );
}

export default App;
