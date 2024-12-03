import s from './ContactForm.module.css';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { useId } from 'react';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contactNameId = useId();
    const contactPhoneId = useId();
    const initialValues = {
        name: '',
        number: '',
    }
    const onSubmit = (values, options) => {
        const newContact = {
            name: values.name,
            number: values.number,
        }
        dispatch(addContact(newContact))
        options.resetForm()
    }
    
    return (
        <div className={s.container}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} >
                <Form className={s.form}>
                    <label className={s.label} htmlFor={contactNameId}>Enter the name</label>
                    <Field type='text' className={s.input} name='name' id={contactNameId} /> 
                    <label className={s.label} htmlFor={contactPhoneId}>Enter the phone</label>
                    <Field type='phone' className={s.input} name='number' id={contactPhoneId} />
                    <button className={s.btn} type='submit' >Add contact</button>
                </Form>
        </Formik>
        </div>
)
}
export default ContactForm;