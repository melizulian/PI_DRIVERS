import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import styles from './Navbar.module.scss';
import f1_logo from '../../assets/f1_logo.svg';


const Navbar = ({onSearch}) => {
    return (
        <nav className={styles.navbar_container}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img src={f1_logo} title='Landing' alt="f1_logo"/>
                </Link>
            </div>

            <div className={styles.secondSection}>
                <Link to='/home'>
                    <button id={styles.button}>HOME</button>
                </Link>

                <Link to='/form'>
                    <button id={styles.button}>CREATE</button>
                </Link>

                <Link to='/about'>
                    <button id={styles.button}>ABOUT</button>
                </Link>

                <Searchbar onSearch={onSearch} />
            </div>
        </nav>
    )
}

export default Navbar;