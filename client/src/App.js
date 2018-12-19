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
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin/">Admin</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
