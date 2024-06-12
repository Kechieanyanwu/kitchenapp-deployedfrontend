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

function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/checklist" element={<Checklist />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
