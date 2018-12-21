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

    sectionLooper = (arrayOfSections) => {
        for (let sec of arrayOfSections){
            console.log(sec)
            section.getSection(sec)
            .then(res => {
                let newState = this.state.section
                if (res.data.length !== 0 ) {
                    newState.push(res.data)
                }
                this.setState({section: newState })
            })

        }
    }

    componentDidMount(){
        this.sectionLooper(this.props.sections)
    }
    render() {
        let {section} = this.state
        return (
            <div>
                { section.length > 0 && section.map((sec, idx) => {
                    let bgColour = (idx % 2 === 1) ? "bg-dark" : "bg-light"
                    return <Section className={bgColour} key={sec[0]._id} data = {sec[0]} />
                })}
            </div>
        );
    }
}

SectionHandler.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.string)
  };

export default SectionHandler;