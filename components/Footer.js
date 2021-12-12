import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <a href="https://juanmarin.netlify.app/" target="_blank" rel="noopener noreferrer">
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/juanmarin-white.svg" alt="Juan Marin Logo" width={950/14} height={333/14} />
        </span>
      </a>
    </footer>
  )
}
export default Footer;
