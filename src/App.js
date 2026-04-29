import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Neighborhoods from './pages/Neighborhoods';
import NavigationBar from './components/NavBar';
import { useState, useEffect } from 'react';
import MyList from './pages/MyList';
import Footer from './components/Footer';   // ✅ ADD THIS

function App() {
  const [bucketList, setBucketList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bucketList'));
    if (saved) setBucketList(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('bucketList', JSON.stringify(bucketList));
  }, [bucketList]);

  const handleAdd = (place) => {
    if (!bucketList.includes(place)) {
      setBucketList([...bucketList, place]);
    }
  };

  const clearList = () => {
    setBucketList([]);
  };

  const removeItem = (place) => {
    setBucketList(bucketList.filter(item => item !== place));
  };

  return (
    <Router>
      <div className="App">   {/* ✅ ADD THIS WRAPPER */}

      <NavigationBar bucketListCount={bucketList.length} />

        <div className="main-content">   {/* ✅ ADD THIS */}
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  bucketList={bucketList} 
                  handleAdd={handleAdd}
                  clearList={clearList}
                  removeItem={removeItem}
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
                  removeItem={removeItem}
                />
              } 
            />
            <Route
              path="/my-list" 
              element={
                <MyList 
                  bucketList={bucketList} 
                  clearList={clearList}
                  removeItem={removeItem}
                />
              } 
            />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;