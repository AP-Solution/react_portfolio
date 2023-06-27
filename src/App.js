import './App.scss';
import { Header } from './components/Header';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio } from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/dropdown" element={<h1>Dropdown</h1>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<h1>Blog</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
