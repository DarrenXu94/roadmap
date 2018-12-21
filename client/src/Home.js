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
                <div className="showcase">
                <div class="section-main hide-on-small">
                    <h1>Web Developer Roadmap</h1>
                    <p class="hide-on-small">My personal take on the state of Web Development as of 2018</p>
                </div>
                </div>
                <div className="show-on-small bg-light">
                <div class="mobile-title">
                    <h1>Web Developer Roadmap</h1>
                    <p>My personal take on the state of Web Development as of 2018</p>
                </div>
                </div>
                <section className="section home">
                    {sections && <SectionHandler sections={sections} />}

                </section>
            </Fragment>
        );
    }
}

export default Home;