import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Neighborhoods from './pages/Neighborhoods';
import NavigationBar from './components/NavBar'; 

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neighborhoods" element={<Neighborhoods />} />
      </Routes>
    </Router>
  );
}

export default App;
