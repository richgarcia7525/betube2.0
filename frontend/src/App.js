import './styles/App.css';
import './styles/index.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '20px', flex: 1 }}>
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
 
