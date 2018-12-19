import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSnippet extends Component {
    handleChange = (event) => {
        // this.setState({ [event.target.name]: event.target.value });
        this.props.handleSubformChange(event, this.props.entry.key)
    }

    render() {
        let {skill, description} = this.props.entry
        return (
            <form >
                <label>
                    Skill:
                        <input type="text" name="skill" value={skill} onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                        <input type="text" name="description" value={description} onChange={this.handleChange} />
                </label>
                {this.props.entry.key}
            </form>
        );
    }
}

FormSnippet.propTypes = {
    entry: PropTypes.object,
    handleSubformChange: PropTypes.func
  };

export default FormSnippet;