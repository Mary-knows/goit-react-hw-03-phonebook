import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './PhoneBookForm.css'


class PhoneBookForm extends Component {
    state = {
        name: '',
        number: '',
    };

    NameId = nanoid();
    NumberId = nanoid();
    

    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    
    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };


    render() {
        const { name } = this.state;

        return <form onSubmit={this.handleSubmit} className='PhoneBookForm'>
            <label htmlFor={this.NameId} className='PhoneBookForm__name'> Name
                <input className='PhoneBookForm__input'
                    id={this.NameId}
                    type="text"
                    value={name}
                    onChange={this.handleInputChange}
                    name='name'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </label>
            <label htmlFor={this.NumberId} className='PhoneBookForm__name'> Number
                <input className='PhoneBookForm__input'
                    id={this.NumberId}
                    value={this.state.number}
                    onChange={this.handleInputChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </label>
            <button type='submit' className='PhoneBookForm__btn'>Add contact</button>
        </form>
    }
}

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PhoneBookForm;