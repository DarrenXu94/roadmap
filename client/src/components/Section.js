import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
    
    state = {
        skillSelected: "",
        description: ""
    }
    showDescription = (e) => {
        let toShow = (e.description === this.state.description) ? "" : e.description
        this.setState({description: toShow})

        let toShowActive = (e.skill === this.state.skillSelected) ? "" : e.skill
        this.setState({skillSelected: toShowActive})

    }
    render() {
        let { name, subSections } = this.props.data
        let { className } = this.props
        let buttonColor = (className === 'bg-light') ? 'btn-light' : 'btn-dark'
        
        return (
            <div className={`${className} sec`} >
                <h1>{ name }</h1>
                <div style={{width: "70vw", margin: "auto"}}>
                { subSections.map(sub => {
                    let active = (this.state.skillSelected === sub.skill) ? "btn-active" : ""
                    /*eslint-disable */
                    return <a onClick={()=>this.showDescription(sub)} className={`subSection-button ${buttonColor} ${active}`} key={sub.skill}>{ sub.skill }</a>
                    /*eslint-enable */
                })}
                </div>
                <div className="subSection-description"><h3>{ this.state.skillSelected }</h3>
                <p style={{fontSize: "1.3rem"}}>{ this.state.description }</p></div>
            </div>
        );
    }
}

Section.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string
  };

export default Section;