import React from 'react';
import {FaPhoneAlt} from "react-icons/fa";
import {IoPersonSharp} from "react-icons/io5";
import s from "./Contact.module.css"

function Contact({name, number, deleteContact, id}) {
    return (
        <li>
            <div>
                <p><IoPersonSharp className={s.icon}/>{name}</p>
                <p><FaPhoneAlt className={s.icon}/>{number}</p>
            </div>
            <button type="button" onClick={() => deleteContact(id)}>Delete</button>
        </li>
    );
}

export default Contact;