import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.aboutMe}>
        
        <img id={styles.profilePic} src="https://i.imgur.com/zmE4PZB.jpg" title="profilePic" alt="profilePic" />
        
        <div className={styles.text}>
          <h2>HELLO! I'M MELINA</h2>
          <p>
          As a current Full Stack Web Development student at Henry, I am deeply immersed in the world of programming. My journey as a learner has been marked by a profound curiosity and a passion for mastering languages.
          <br />
          My background as a Literary, Technical, and Scientific Translator in English and Spanish has equipped me with a strong foundation in linguistic skills. My pursuit of knowledge led me to venture into Mandarin, which I am currently mastering alongside my studies.
          <br />
          Last year, I embarked on a new adventure into the realm of programming. What initially seemed daunting quickly became a fascinating journey of discovery. I realized that programming languages, much like spoken languages, offer endless opportunities for exploration and creativity.
          <br />
          This project represents a culmination of my efforts—a Single Page Application (SPA) that showcases the skills I have acquired thus far. From HTML and CSS to JavaScript, React, Redux, Node.js, Express, SQL, and beyond, I am constantly expanding my toolkit and embracing new challenges.
          <br />
          Join me on this exciting journey as I continue to push the boundaries of my knowledge and skills in the dynamic world of web development.
          </p>
        </div>
      </div>
      
      
      <div>
        <h5>My profiles: </h5>
        <a href="https://www.linkedin.com/in/melizulian" target="_blank"><img className={styles.myLinks} src="https://i.imgur.com/dBgRYCG.png" title="my_linkedIn" alt="linked_in_logo" /></a>
        <a href="https://github.com/melizulian" target="_blank"><img className={styles.myLinks}src="https://i.imgur.com/2Cp7VkW.png" title="my_github" alt="github_logo" /></a>
      </div>
      
    
    <div>

      <h5>Technologies used:</h5>

      <div className={styles.logos}>
        <img id={styles.logo_1} src="https://i.imgur.com/waXSNHF.png" title="js_logo" alt="js_logo" />
        <img id={styles.logo_2} src="https://i.imgur.com/y6flhRy.png" title="html_logo" alt="html_logo" />
        <img id={styles.logo_3} src="https://i.imgur.com/0kSPhDm.png" title="css_logo" alt="css_logo" />
        <img id={styles.logo_4} src="https://i.imgur.com/wLyjRAI.png" title="sass_logo" alt="sass_logo" />
        <img id={styles.logo_5} src="https://i.imgur.com/qZGgdmv.png" title="react_logo" alt="react_logo" />
        <img id={styles.logo_6} src="https://i.imgur.com/4j4J7sL.png" title="redux_logo" alt="redux_logo" />
        <img id={styles.logo_7} src="https://i.imgur.com/acLgwdD.png" title="nodejs_logo" alt="nodejs_logo" />
        <img id={styles.logo_8} src="https://i.imgur.com/LcWGWHX.png" title="express_logo" alt="express_logo" />
        <img id={styles.logo_9} src="https://i.imgur.com/QTksvlm.png" title="sequelize_logo" alt="sequelize_logo" />
        <img id={styles.logo_10} src="https://i.imgur.com/yNGQH6S.png" title="postgres_logo" alt="postgres_logo" />
      </div>

    </div>
    
  

    </div>
  )
}

export default About