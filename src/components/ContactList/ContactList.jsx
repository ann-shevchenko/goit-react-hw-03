import React from 'react';
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css"

// import listContacts from '../../data/listContacts.json';


function ContactList({contacts, setContacts}) {

    const deleteContact = (id) => {
        const filteredArray = contacts.filter(contact => contact.id !== id);
        setContacts(filteredArray);
    }
    return (
        <ul className={s.contactList}>
            {contacts.map(contact => (
            <Contact
                key={contact.id}
                deleteContact={() => deleteContact(contact.id)}
                name={contact.name}
                number={contact.number}
                {...contact} />))}
        </ul>
    );
}

export default ContactList;