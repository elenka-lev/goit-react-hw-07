import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
// import { selectContacts } from '../../redux/contactsSlice';
import { selectFilteredContacts } from '../../redux/contactsSlice';


const ContactList = () => {
   
    // const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilteredContacts);
    // const filteredData = contacts.filter(item=> item.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <div className={s.container}>
            <ul className={s.wrapper}>
                {filter.map((contact) => (
                    <li key={contact.id} className={s.item}>
                        <Contact contact={contact} id={contact.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ContactList;