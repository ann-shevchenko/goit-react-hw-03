import React from 'react';
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css"



function ContactList({contacts, deleteContact}) {

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