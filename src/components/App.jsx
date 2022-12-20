import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addFormContact = data => {
    const newContact = { ...data, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return (visibleContactsFilter = contacts.filter(contact =>
  //     contact.text.toLowerCase().includes(normalizedFilter)
  //   ));
  // };
  // onDeleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  render() {
    const { contacts, filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();
    // const normalizedFilter = filter.toLowerCase();
    // const visibleContactsFilter = contacts.filter(contact =>
    //   contact.text.toLowerCase().includes(normalizedFilter)
    // );
    return (
      <div>
        <h1>Phonebook</h1>
        <>
          <ContactForm onSubmit={this.addFormContact} />
        </>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />

        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
