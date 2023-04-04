import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Followers from './Pages/Followers';
import  Following from './Pages/Following';
import Instagramstories from './Pages/Instagramstories';
import Post from './Pages/Post';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
      
      <Route path="Followers" element={<Followers/>}/>
      <Route path="Following" element={<Following/>}/>
      <Route path="Instagramstories" element={<Instagramstories/>}/>
      <Route path="Post" element={<Post/>}/>
      
      </Routes>
      </BrowserRouter>
      
      </div>
     
  );
}

export default App;
