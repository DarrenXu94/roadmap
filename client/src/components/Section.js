import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
    componentDidMount(){
        console.log(this.props.data)
    }
    state = {
        description: ""
    }
    showDescription = (e) => {
        this.setState({description: e.description})
    }
    render() {
        let { name, subSections } = this.props.data
        let { className } = this.props
        let buttonColor = (className === 'bg-light') ? 'btn-light' : 'btn-dark'
        return (
            <div className={`${className} sec`} >
                <h1>{ name }</h1>
                <div>
                { subSections.map(sub => {
                    let { skill, description } = sub
                    return <div key={ skill }><h3>{ skill }</h3><p>{ description }</p></div>
                })}
                { subSections.map(sub => {
                    /*eslint-disable */
                    return <a onClick={()=>this.showDescription(sub)} className={`subSection-button ${buttonColor}`} key={sub.skill}>{ sub.skill }</a>
                    /*eslint-enable */
                })}
                </div>
                <div>{this.state.description}</div>
            </div>
        );
    }
}

Section.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string
  };

export default Section;