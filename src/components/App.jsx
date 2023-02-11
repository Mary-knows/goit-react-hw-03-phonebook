import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import './App.css';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
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



