import './App.css';
import Navbar from './componets/Navbar/Navbar';
import Login from './componets/Login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Navbar/>} />
         <Route path="/login" element={<Login/>}/>
      </Routes>  
  </Router>
  );
}

export default App;
