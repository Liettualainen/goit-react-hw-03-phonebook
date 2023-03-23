import  React, {Component} from 'react';
import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';
// import { nanoid } from 'nanoid';
import { Layout, Sectionletter, Headerletter } from './Layout.js';
import Form from './Form.js';
import { Contacts } from './Contacts.js';
import { FilterContacts } from './FilterContact';

export class App extends Component {

  state = {
    contacts: [
      //  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      // { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      // { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      // { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
        ],
    filter: '',
  }

  componentDidMount() {
    // localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
       this.setState({contacts: parsedContacts });
    }
     
  }  

  componentDidUpdate(contacts, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  formSubmitHandler = (data) => {
 const theSameName = this.state.contacts.map(contacts => contacts.name).includes(data.name);

    if (theSameName) {alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
      console.log(data);
  }

 changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };


  filterContacts = contacts => {
    const lowCaseFilter = this.state.filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowCaseFilter)
    );
  };
  deleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  
  render() {
    const { formSubmitHandler, changeFilter, deleteContact, filterContacts} = this;
 const { filter, contacts } = this.state;

    return (      
      <Layout>
      <Headerletter>Phonebook</Headerletter>        
        <Form onFormSubmit={formSubmitHandler} />
        
      <Sectionletter>Contacts</Sectionletter>
      <FilterContacts filter={filter} onChangeFilter={changeFilter} />
      <Contacts
            contactsFilter={filterContacts(contacts)}
            onDelete={deleteContact}
          />
       


   
        <GlobalStyle />
      </Layout>
    );
  }
}