import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
    componentDidMount(){
        console.log(this.props.data)
    }
    render() {
        let { name, subSections } = this.props.data
        return (
            <div>
                <h1>{ name }</h1>
                <div>
                { subSections.map(sub => {
                    let { skill, description } = sub
                    return <div key={ skill }><h3>{ skill }</h3><p>{ description }</p></div>
                })}
                </div>
            </div>
        );
    }
}

Section.propTypes = {
    data: PropTypes.object
  };

export default Section;