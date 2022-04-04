import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <div>
            <h1 className="heading">App</h1>
          </div>
          <div className="nav">
            <Link to="/" className="link">
              Register
            </Link>
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
