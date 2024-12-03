import s from '../components/App.module.css';
import Header from './Header/Header';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Loading from './Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';

const App = () => {
    const isLoading = useSelector(state=>state.isLoading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    return (
        <>
            <Header />
            <div className={s.container}>
                <ContactForm />
                <SearchBox />
                {isLoading && <Loading/>}
                <ContactList/>
            </div>
        </>
)
}
export default App;


