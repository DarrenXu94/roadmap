import React, { Component } from 'react';
import './App.css';
import SectionHandler from './components/SectionHandler'

const mainLayout = require("./api/mainLayout")

class App extends Component {

  state = {
    sections: null
  }

  componentDidMount(){
    mainLayout()
    .then(res => this.setState({sections:res.data[0].sections}))
  }

  render() {
    let { sections } = this.state
    return (
      <div className="App">
        {/* {sections.toString()} */}
        { sections && <SectionHandler sections = {sections} />}
      </div>
    );
  }
}

export default App;
