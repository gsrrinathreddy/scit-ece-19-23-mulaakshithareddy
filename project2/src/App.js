import logo from './logo.svg';
import './App.css';
import navbar from'./components/navbar';
import { routes,Route } from 'react-router-dom'
import Home from'./components/pages/Home';
import Library from'./components/pages/Library';
import shorts from'./components/pages/shorts';
import subscriptions from'./components/pages/subscriptions';
function App() {
  return (
    <div className="App">
      <navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Library" element={<Library/>}/>
        <Route path="/shorts" element={<shorts/>}/>
        <Route path="/subscriptions" element={<subscriptions/>}/>
      </Routes>
    </div>
  );
}

export default App;
