import React from 'react';
import axios from 'axios';
import './contact.css'



class ContactUs extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    updateformInput(key, userInput) {
        this.setState({[key]: userInput})
    }

    handleSubmit() {
        axios.post('/api/contact', {...this.state}).then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="contact-container">
                <h1>Please feel free to contact us!</h1>
                <input 
                    onChange={(e) => this.updateformInput('name',e.target.value)} 
                    placeholder="Name" 
                    className="name-input"/>
                <input 
                    onChange={(e) => this.updateformInput('email',e.target.value)} 
                    placeholder="Email" 
                    className="email-input"/>
                <textarea 
                    className="text-input" 
                    onChange={(e) => this.updateformInput('message',e.target.value)}
                    placeholder="Tell us what is going on..."/>
                <button onClick={() => this.handleSubmit()} className="contact-submit">Submit</button>
            </div>
        )
    }
}

export default ContactUs