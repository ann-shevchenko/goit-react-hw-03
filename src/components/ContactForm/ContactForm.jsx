import React from 'react';
import {Formik, Form, Field} from "formik";
import s from "./ContactForm.module.css"
import * as Yup from "yup";
import { ErrorMessage } from "formik";

function ContactForm({initialValues, addContact, nameFieldId, numberFieldId}) {

    const FeedbackSchema = Yup.object().shape({
        name: Yup
            .string()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Fill in the field"),
        number: Yup
            .string()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Fill in the field")
            .matches(/^[0-9-]+$/, "Must be only digits and dashes")

    });

    return (
        <Formik initialValues={initialValues} onSubmit={addContact} validationSchema={FeedbackSchema}>
            <Form className={s.contactForm}>
                <div>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id="nameFildId"/>
                    <ErrorMessage className={s.error} name="name" component="span" />
                </div>
                {/*onChange={(e) => setNewNameVal(e.target.value)}*/}
                <div>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="tel" name="number" id="numberFieldId"/>
                    <ErrorMessage  className={s.error} name="number" component="span" />
                </div>

                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm;