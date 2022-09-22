import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log("I've been clicked", formState);
    }

    const handleChange = event => {
        const isValid = validateEmail(event.target.value);
        if(event.target.name === 'email') {
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
            console.log('handle form', formState);
        }
    };

    return (
        <section>
            <h2>Contact Me</h2>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>
                <button type='submit'></button>
            </form>
        </section>
    )
}


export default Contact;