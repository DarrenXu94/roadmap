import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSnippet extends Component {
    state = {
        skill: "",
        description: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state)
        this.props.submitSkillForm(this.state)
    }

    render() {
        let {skill, description} = this.state
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Skill:
                        <input type="text" name="skill" value={skill} onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                        <input type="text" name="description" value={description} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

FormSnippet.propTypes = {
    // entry: PropTypes.object,
    submitSkillForm: PropTypes.func
  };

export default FormSnippet;