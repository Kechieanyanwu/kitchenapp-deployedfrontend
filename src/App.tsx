import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Checklist from './pages/Checklist';
import Inventory from './pages/Inventory';
// import { Login } from './pages/Login';
import Home from './pages/Home';
import WelcomeScreen from './pages/WelcomeScreen';

function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/checklist" element={<Checklist />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<WelcomeScreen />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
