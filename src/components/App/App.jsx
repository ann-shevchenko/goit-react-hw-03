import './App.css'
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import {useEffect, useId, useState} from "react";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { nanoid } from 'nanoid';
import listContacts from "../../data/listContacts.json";


function App() {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const initialValues = {
        name: "",
        number: "",
    };

    const [contacts, setContact] = useState(() => {
        const saveContacts = JSON.parse(window.localStorage.getItem('key-contact'))
        if(saveContacts?.length){
            return saveContacts;
        }
        return [];
    });
    const addContact = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        setContact(prev => [...prev, newContact]);
        actions.resetForm();
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
            <ContactForm
                initialValues={initialValues}
                addContact={addContact}
                nameFieldId={nameFieldId}
                numberFieldId={numberFieldId}
                />
            <SearchBox searchName={searchName}
                       setSearchName={setSearchName}/>
            <ContactList contacts={filterContact}
                         setContacts={setContact}
            />
        </div>

    )
}

export default App
