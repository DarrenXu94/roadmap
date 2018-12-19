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

    addNewSubform = (event) => {
        event.preventDefault();
        let newSS = this.state.subSections
        newSS.push({"skill": "Enter Skill", "description": "Enter description", "key": Math.random().toString(36).substr(2, 9)})
        this.setState({subSections: newSS})
    }

    handleSubformChange = (event, key) => {
        console.log(event.target.name, event.target.value, key)
        // let formToUpdate = this.state.subSections.filter(obj => {
        //     return obj.key === key
        // })
        // console.log(formToUpdate)
        for (let i = 0; i < this.state.subSections.length; i++) {
            if (this.state.subSections[i].key === key) {

                let tempObject = this.state.subSections[i]
                tempObject[event.target.name] = event.target.value
                let tempArray = this.state.subSections
                tempArray.splice(i,1)
                tempArray.push(tempObject)
                this.setState({subSections: tempArray})
            };
        }
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
                <button onClick={this.addNewSubform}>+</button>
                { this.state.subSections.map(entry=> {
                    return <FormSnippet key={Math.random().toString(36).substr(2, 9)} entry={entry} handleSubformChange={this.handleSubformChange} />
                })}
            </div>
        );
    }
}

export default Admin;