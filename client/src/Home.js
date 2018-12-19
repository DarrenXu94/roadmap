import React, { Component } from 'react';
import SectionHandler from './components/SectionHandler'
const mainLayout = require("./api/mainLayout")

class Home extends Component {
    state = {
        sections: null
    }

    componentDidMount() {
        mainLayout()
            .then(res => this.setState({ sections: res.data[0].sections }))
    }
    render() {
        let { sections } = this.state

        return (
            <div>
                {sections && <SectionHandler sections={sections} />}

            </div>
        );
    }
}

export default Home;