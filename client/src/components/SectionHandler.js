import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section'

const section = require("../api/section")

// {
// 	"name": "basics",
// 	"subSections": [{"skill":"html", "description":"The markup language for all websites"},{"skill":"css", "description":"Basic understanding of CSS for styling websites"}]
// }

class SectionHandler extends Component {
    state = {
        section: []
    }

    sectionLooper = async (arrayOfSections) => {
        for (let sec of arrayOfSections) {
            // console.log(sec)
            let res = await section.getSection(sec)
            let newState = this.state.section
            if (res.length !== 0) {
                newState.push(res)
            }
            this.setState({ section: newState })

        }
    }

    sectionRender = () => {
        let { section } = this.state

        return (section.length > 0) 
        ? section.map((sec, idx) => {
            let bgColour = (idx % 2 === 1) ? "bg-dark" : "bg-light"
            return <Section className={bgColour} key={sec[0]._id} data={sec[0]} />
        }) 
        : <div>Loading sections ... </div>
    }

    componentDidMount() {
        this.sectionLooper(this.props.sections)
    }

    render() {
        return (
            <div>
                {this.sectionRender()}
            </div>
        );
    }
}

SectionHandler.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.string)
};

export default SectionHandler;