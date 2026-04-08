import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Neighborhoods from './pages/Neighborhoods';
import NavigationBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [bucketList, setBucketList] = useState([]);

  const handleAdd = (place) => {
    if (!bucketList.includes(place)) {
      setBucketList([...bucketList, place]);
    }
  };

  const clearList = () => {
    setBucketList([]);
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              bucketList={bucketList} 
              handleAdd={handleAdd}
              clearList={clearList}
            />
          } 
        />
        <Route
          path="/neighborhoods" 
          element={
            <Neighborhoods 
              bucketList={bucketList} 
              handleAdd={handleAdd}
              clearList={clearList}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
