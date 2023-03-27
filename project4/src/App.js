import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>

      
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </div>
  );
}

export default App;
