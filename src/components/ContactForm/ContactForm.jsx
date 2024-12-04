import s from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { useId } from 'react';
import * as Yup from "yup";

const ContactForm = () => {
    const dispatch = useDispatch();
    const contactNameId = useId();
    const contactPhoneId = useId();
    const initialValues = {
        name: '',
        number: '',
    }
    const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  number: Yup.string()
    .required('Phone is required')
    .matches(/^[0-9-]+$/, 'Phone must be only digits')
    .min(10, 'Phone must be at least 10 digits'),
});
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
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                <Form className={s.form}>
                    <label className={s.label} htmlFor={contactNameId}>Enter the name</label>
                    <Field type='text' className={s.input} name='name' id={contactNameId} /> 
                     <ErrorMessage name="name" component="span" className={s.error} />
                    <label className={s.label} htmlFor={contactPhoneId}>Enter the phone</label>
                    <Field type='phone' className={s.input} name='number' id={contactPhoneId} />
                    <ErrorMessage name="phone" component="span" className={s.error} />
                    <button className={s.btn} type='submit' >Add contact</button>
                </Form>
        </Formik>
        </div>
)
}
export default ContactForm;