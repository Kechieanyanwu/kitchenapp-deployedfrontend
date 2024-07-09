import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Checklist from './pages/Checklist';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import AddItem from './pages/AddItem';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/checklist/additem" element={<AddItem />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
