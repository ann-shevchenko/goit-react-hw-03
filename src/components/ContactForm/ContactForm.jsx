import React from 'react';
import {Formik, Form, Field} from "formik";
import s from "./ContactForm.module.css"

function ContactForm({initialValues, addContact, nameFieldId, numberFieldId}) {


    return (
        <Formik initialValues={initialValues} onSubmit={addContact}>
            <Form className={s.contactForm}>
                <div>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id="nameFildId"/>
                </div>
                {/*onChange={(e) => setNewNameVal(e.target.value)}*/}
                <div>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="number" name="number" id="namberFildId"/>
                </div>

                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm;