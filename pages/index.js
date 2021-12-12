import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { scroll } from '../services/scroll.js'

import Head from 'next/head'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../components/Footer.js'

import styles from '../styles/Home.module.css'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

  const videoRef = useRef(null)

  useEffect(() => {
    scroll(gsap, videoRef)
  })

  return (
    <div className={styles.container} id="container">
      <Head>
        <title>Juan Marin</title>
        <meta name="description" content="GSAP ScrollTrigger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} id="main">
        <div className={styles.header}>
          <h1 className={styles.subHeader}>{`Hi, I'm`}</h1>
          <h1 className={styles.mainHeader}>Juan Marin</h1>
          <h1 className={styles.subHeader}>Take a look at my Portfolio</h1>
        </div>
        <div className={styles.blend}></div>
        <video ref={videoRef} src={"/video.mp4"} className="video-background" muted playsInline sophis-video-control="true"></video>
      </main>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
