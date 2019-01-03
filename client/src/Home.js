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
                    <div className="section-main hide-on-small">
                        <h1>Web Developer Roadmap</h1>
                        <p className="hide-on-small">My personal take on the state of Web Development as of 2019</p>
                    </div>
                    <div className="see-more">
                        <i className="fas fa-angle-double-down fa-6x"></i>
                    </div>
                </div>
                <div className="show-on-small bg-light">
                    <div className="mobile-title">
                        <h1>Web Developer Roadmap</h1>
                        <p>My personal take on the state of Web Development as of 2019</p>
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