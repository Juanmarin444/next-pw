import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import myAvatar from '../../public/myAvatar.svg'
import Tech from '../../components/Tech.js'

const About = () => {
  return (
    <section className={`${styles.section} ${styles.about}`}>
      <h1>WHO IS THIS GUY?</h1>
      <div className={styles.avatar}>
        <Image src={myAvatar} alt={"My avatar"} />
      </div>
      <div className={styles.info}>
        <div className={styles.infoText}>
          <h2>If {`you're`} searching for someone with a curious mind and approaches difficulties</h2>
          <h2>with a positive attitude, {`you've`} come to the right place.</h2>
        </div>
        <div className={styles.infoText}>
          <p>{`I'm`} a web developer with experience in a few web frameworks.</p>
          <p>{`I've`} honed my skills working with small groups to produce remarkable things.</p>
          <p>My goal is to join a team where I can help make the internet a more enjoyable place.</p>
        </div>
      </div>
      <div className={styles.skills}>
        <header>
          <h2>{`Here's`} some technologies {`I've`} used</h2>
        </header>
        <div className={styles.alnCenter}>
          <Tech name="JavaScript" src="/assets/javascriptIcon.png" />
          <Tech name="React" src="/assets/reactIcon.png"/>
          <Tech name="Redux" src="/assets/reduxIcon.png" />
          <Tech name="Node.js" src="/assets/nodejsIcon.png" />
          <Tech name="Django" src="/assets/djangoIcon.png" />
          <Tech name="Flask" src="/assets/flaskIcon.png"/>
          <Tech name="SQLite" src="/assets/sqliteIcon.png"/>
          <Tech name="MongoDB" src="/assets/mongodbIcon.png"/>
          <Tech name="Next" src="/assets/nextjsIcon.svg" />
          <Tech name="Pug" src="/assets/pugIcon.png" />
          <Tech name="Sass" src="/assets/sassIcon.png" />
          <Tech name="Swift" src="/assets/swiftIcon.png" />
          <Tech name="Git" src="/assets/gitIcon.png" />
          <Tech name="HTML" src="/assets/htmlIcon.png" />
          <Tech name="CSS" src="/assets/cssIcon.png" />
        </div>
      </div>
    </section>
  )
}

export default About
