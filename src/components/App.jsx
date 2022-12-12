import { useState, useEffect,  useRef } from "react";
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import { nanoid } from 'nanoid'

export function  App (){

const [contacts, setContacts] = useState([]);
const [filter, setFilter]= useState('')

const isFirstRender = useRef(true);

useEffect(()=>{
    const contactsList = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contactsList);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
},[])


useEffect(()=>{
  if(isFirstRender.current){
    isFirstRender.current = false; 
    return;
  }
  localStorage.setItem("contacts", JSON.stringify(contacts))
}, [contacts])


 const addContact = contact=>{ 
  const newContact = {
    ...contact,
    id: nanoid()
  };
  const contactNameLowerCase = newContact.name.toLowerCase();
  const isInContact = contacts.find (el=>el.name.toLowerCase()===contactNameLowerCase);
    if(isInContact){
      alert(`${newContact.name} is already in contact`)
      return }
      setContacts(contacts=>[...contacts, newContact])
}

 const filterContacts = (array)=> {
  const newArray = array.filter(el=>el.name.toLowerCase().includes(filter));
  return newArray;
 }

 const addInFilter =(filterData)=>{
  setFilter(filterData)
 }

 const deleteFromlist = id => {
  setContacts(contacts.filter(
        (contact) => contact.id !== id
  )
    )
 }

  
   return (
    <>
    <Section title="Phonebook">
      <Phonebook addContact={addContact}/>
    </Section>
    
    <Section title="Contacts">
     {contacts.length===0?
    <Notification message="There is no contact yet"/>:
    <>
    <Filter newFilter={addInFilter}/>
    <Contacts contactList={filterContacts(contacts)} deleteFromlist={deleteFromlist}/></>}
    </Section>
    </>
  )
};
