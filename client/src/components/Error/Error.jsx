import styles from './Error.module.scss';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className={styles.errorPage}>
      
    <h5>Oops! Something went wrong.</h5>
    <Link to="/home">
        <button>Go to Home</button>
      </Link>

      
    </div>
  )
}

export default Error;