import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Neighborhoods from './pages/Neighborhoods';
import NavigationBar from './components/NavBar';
import { useState, useEffect } from 'react';
import MyList from './pages/MyList';
import Footer from './components/Footer';
import PlanTrip from './pages/PlanTrip';

function App() {
  const [bucketList, setBucketList] = useState([]);
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bucketList'));
    if (saved) setBucketList(saved);
    const savedVisited = JSON.parse(localStorage.getItem('visited'));
    if (savedVisited) setVisited(savedVisited);
  }, []);

  useEffect(() => {
    localStorage.setItem('bucketList', JSON.stringify(bucketList));
  }, [bucketList]);

  useEffect(() => {
    localStorage.setItem('visited', JSON.stringify(visited));
  }, [visited]);

  const handleAdd = (place) => {
    if (!bucketList.includes(place)) {
      setBucketList([...bucketList, place]);
    }
  };

  const clearList = () => {
    setBucketList([]);
    setVisited([]);
  };

  const removeItem = (place) => {
    setBucketList(bucketList.filter(item => item !== place));
    setVisited(visited.filter(v => v !== place));
  };

  const toggleVisited = (place) => {
    if (visited.includes(place)) {
      setVisited(visited.filter(v => v !== place));
    } else {
      setVisited([...visited, place]);
    }
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar bucketListCount={bucketList.length} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home bucketList={bucketList} handleAdd={handleAdd} clearList={clearList} removeItem={removeItem} visited={visited} toggleVisited={toggleVisited} />} />
            <Route path="/neighborhoods" element={<Neighborhoods bucketList={bucketList} handleAdd={handleAdd} clearList={clearList} removeItem={removeItem} />} />
            <Route path="/my-list" element={<MyList bucketList={bucketList} clearList={clearList} removeItem={removeItem} visited={visited} toggleVisited={toggleVisited} />} />
            <Route path="/plan-trip" element={<PlanTrip />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;