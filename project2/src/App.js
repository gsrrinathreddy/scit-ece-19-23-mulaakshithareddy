import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Library from './Pages/Library';
import Shorts from './Pages/Shorts';
import Subscriptions from './Pages/Subscriptions';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="Home" element={<Home/>}/>
      <Route path="Library" element={<Library/>}/>
      <Route path="Shorts" element={<Shorts/>}/>
      <Route path="Subscriptions" element={<Subscriptions/>}/>

      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
