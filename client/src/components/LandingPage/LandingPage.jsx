import styles from './LandingPage.module.scss';

const LandingPage = ({enterHome}) => {
  return (
    <div className={styles.landing_container}>
        <h1 className={styles.title}>WELCOME, DRIVERS!</h1>
        <h2 className={styles.subtitle}> Are you ready?</h2>
        <button id={styles.button} onClick={enterHome} >ENTER SITE</button>
      
    </div>
  )}

export default LandingPage;