import React, { Component } from 'react';
import FormSnippet from './components/FormSnippet'

class Admin extends Component {
    state = {
        title: null,
        subSections: []
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state)
    }

    submitSkillForm = (values) => {
        let newSS = this.state.subSections
        newSS.push({"skill": values.skill, "description": values.description})
        this.setState({subSections: newSS})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="title" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <FormSnippet submitSkillForm = {this.submitSkillForm} />

                { this.state.subSections.map(entry=> {
                    return <div key={Math.random().toString(36).substr(2, 9)}><h3>{entry.skill}</h3><p>{entry.description}</p></div>
                })}
            </div>
        );
    }
}

export default Admin;