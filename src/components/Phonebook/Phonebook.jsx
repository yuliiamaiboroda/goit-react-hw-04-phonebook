import { Label, Input, Button } from "./Phonebook.styled";
import PropTypes from 'prop-types';
import { useState } from "react";

export default function Phonebook ({addContact}){
const [name, setName] = useState("");
const [number, setNumber] = useState("");

const handleChange = e =>{
    const {name,value} = e.target;
    switch (name){
        case 'name':
        setName(value);
        break;

        case 'number':
        setNumber(value);
        break;

        default:
        return
    }
      
}

const SubmitForm = event =>{
        event.preventDefault();
        addContact({name, number});
        event.currentTarget.reset();
      }

return ( <form onSubmit={SubmitForm}> 
       <Label>
        Name
            <Input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            />
        </Label> 
        <Label>
        Number
            <Input
            type="tel"
            name="number"
            placeholder="Telephone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            />
        </Label> 
        <Button type="submit" >Add to contact</Button>
</form>)
     
    }

Phonebook.propTypes = {
    addContact: PropTypes.func.isRequired
}