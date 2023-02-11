import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.some(e => e.name === name)) {
      return alert(`${name} is already in contacts!`);
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  setFilter = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  getContacts = () => {
    const { contacts, filter } = this.state;
    const validateContact = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
      return validateContact;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  
  render() {
    return <div className='container'>
      <h2>Phonebook</h2>
      <PhoneBookForm
        onSubmit={this.formSubmit} />
      
      <h2>Contacts</h2>
      <Filter
        value={this.state.filter}
        onChange={this.setFilter} />
      
      <ContactsList
        contacts={this.getContacts()}
        onDelete={this.deleteContact}/>
    </div>
  }
  
}



