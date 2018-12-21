import React, { Component, Fragment } from 'react';
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
            <Fragment>
                <div className="showcase"></div>
                <section className="section home">
                    {sections && <SectionHandler sections={sections} />}

                </section>
            </Fragment>
        );
    }
}

export default Home;