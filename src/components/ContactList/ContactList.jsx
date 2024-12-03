import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';


const ContactList = () => {
   
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filteredData = contacts.filter(item=> item.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <div className={s.container}>
            <ul className={s.wrapper}>
                {filteredData.map((contact) => (
                    <li key={contact.id} className={s.item}>
                        <Contact contact={contact} id={contact.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ContactList;