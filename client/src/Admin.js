import React, { Component } from 'react';
import FormSnippet from './components/FormSnippet'
import { postSection } from './api/section'
const mainLayout = require("./api/mainLayout")

class Admin extends Component {
    state = {
        name: null,
        subSections: [],
        allSections: null
    }
    componentDidMount() {
        mainLayout()
            .then(res => this.setState({ allSections: res.data[0].sections }))
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // console.log(this.state)
        postSection(this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    submitSkillForm = (values) => {
        let newSS = this.state.subSections
        newSS.push({ "skill": values.skill, "description": values.description })
        this.setState({ subSections: newSS })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <select name="name" value={this.state.value} onChange={this.handleChange}>
                            {this.state.allSections && this.state.allSections.map(sec => {
                                return <option key={sec} value={sec}>{sec}</option>
                            })}
                        </select>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
                <FormSnippet submitSkillForm={this.submitSkillForm} />

                {this.state.subSections.map(entry => {
                    return <div key={Math.random().toString(36).substr(2, 9)}><h3>{entry.skill}</h3><p>{entry.description}</p></div>
                })}
            </div>
        );
    }
}

export default Admin;