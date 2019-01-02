import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Admin from './Admin'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <header>
          <nav className='cf'>
            <ul className='cf'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin/">Admin</Link>
              </li>
            </ul>
          </nav>
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
          <footer className="bg-dark center">
            Darren Xu © {(new Date()).getFullYear()}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
