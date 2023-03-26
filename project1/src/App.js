import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import CreatedPlaylist from './pages/CreatePlaylist';
import LikedSongs from './pages/LikedSongs';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Create Playlist" element={<CreatedPlaylist/>}/>
        <Route path="/Liked Songs" element={<LikedSongs/>}/>
      </Routes>


    </div>
  );
}

export default App;
