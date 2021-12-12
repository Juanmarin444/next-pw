import styles from '../../styles/Home.module.css'

const Contact = () => {
  return (
    <div className={`${styles.section} ${styles.contact}`}>
      <h1>Get In Touch</h1>

      <div className={styles.contactContent}>
        <div className={styles.getInTouch}>
          <h2>Thanks for stopping by! You can contact me using this form. I look forward to hearing from you.</h2>
        </div>
        <div className={styles.getInTouch}>
          <form name="contact v1" method="post">
            <input type="hidden" name="form-name" value="contact v1" />
            <label className={styles.contactLabel} >Name:
              <input className={styles.textInput} type="text" name="name" size="50" placeholder="Your name..." />
            </label>
            <label className={styles.contactLabel} >Email:
              <input className={styles.emailInput} type="email" name="email" size="50" placeholder="Your email..." />
            </label>
            <label className={styles.contactLabel} >Message:
              <textarea className={styles.textarea} name="message" rows="5" cols="50" placeholder="Your message..." ></textarea>
            </label>
            {/* <div>
              <div data-netlify-recaptcha=""></div>
            </div> */}
            <input className={styles.formSubmit} type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
