import Image from 'next/image'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <section id={styles.hero}>
        <Image
          unoptimized
          src='/kala-illustration.png'
          alt='An illustration of Kala Yamaguchi'
          width={734}
          height={949}
        />
        <p>A designer, artist, human being, and avid practitioner of the K.I.S.S. philosophy.</p>
      </section>
    </>
  )
}
