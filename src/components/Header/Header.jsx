import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.container}>
            <h1 className={s.title}>Phonebook</h1>
        </header>
    )
}

export default Header;