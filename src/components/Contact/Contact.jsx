import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({contact, id}) => {
    const dispatch = useDispatch();

    return (
        <ul className={s.wrap}>
            
            <li className={s.item}>
                <div className={s.container}>
                    <p className={s.name}>{contact.name}</p>
                    <p className={s.phone}>{contact.number}</p>
                </div>
                <div className={s.descr}>
                    <button className={s.btn} type='submit' onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </div>
            </li>
            
        </ul>
    )
}

export default Contact