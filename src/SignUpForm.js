import React, { Component } from 'react';
import { signPasswordLess } from './firebase/auth';


class SignUpForm extends Component {

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={this.handleEmailChange.bind(this)}  placeholder="Your email" />
           
                <button type="submit">Valider</button>
            </form>

        );
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.setState({ error: '' });
        if (this.state && this.state.email) {
            signPasswordLess(this.state.email);
        } else {
            this.setState({ error: 'Please fill email' });
        }
    }
}

export default SignUpForm;