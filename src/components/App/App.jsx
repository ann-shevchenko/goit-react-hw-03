import './App.css'
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import {useEffect, useState} from "react";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { nanoid } from 'nanoid';
import listContacts from "../../data/listContacts.json";


function App() {

    const [contacts, setContacts] = useState(() => {
        const saveContacts = JSON.parse(window.localStorage.getItem('key-contact'))
        if(saveContacts?.length){
            return saveContacts;
        }
        return listContacts;
    });
    const addContact = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        setContacts(prev => [...prev, newContact]);
        actions.resetForm();
        actions.setSubmitting(false);
    }

    const deleteContact = (id) => {
        const filteredArray = contacts.filter(contact => contact.id !== id);
        setContacts(filteredArray);
    }

    const [searchName, setSearchName] = useState('');
    const filterContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchName.toLowerCase()));

    useEffect(() => {
        window.localStorage.setItem('key-contact',JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact}/>
            <SearchBox searchName={searchName}
                       setSearchName={setSearchName}/>
            <ContactList contacts={filterContact}
                         deleteContact={deleteContact}
            />
        </div>

    )
}

export default App
