import React, { Component } from 'react';
import {PhonebookFrame, InputStyle,PhonebookSectionletter, AddButton } from './Layout.js';
import { nanoid } from 'nanoid';


class Form extends Component {
    state = {
        id: '',
           name: '',
            number:'',
    }

  handleInputChange = event => { 
    const { name, value } = event.currentTarget;
      this.setState( {[name]: value,  id: nanoid(),});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.resetForm();
    };
    resetForm = () => {
        this.setState({name: '',number: '',});
    }

    render() {
      return (
          
        <PhonebookFrame>
          <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputid}>
            <PhonebookSectionletter>Name</PhonebookSectionletter>  
        <InputStyle>
          <input
            type="text"
            name="name"
          value={this.state.name}
                        onChange={this.handleInputChange}
                
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
                    </InputStyle>             
            <PhonebookSectionletter>Number</PhonebookSectionletter>
          <InputStyle>
          <input
            type="tel"
            name="number"
            value={this.state.number}
                            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/>
        </InputStyle>    
                </label>
                     
       
        <AddButton type="submit" >Add contact</AddButton>
             
            </form> 
        </PhonebookFrame>
            
        );}
 
}



export default Form;