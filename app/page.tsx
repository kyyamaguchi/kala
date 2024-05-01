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
        <div>
          <p><strong>Kala Yamaguchi</strong> is a native Hawaiian designer, illustrator, human being, and an avid practitioner of the K.I.S.S. philosophy.</p>
          <p>Currently, he&apos;s based out of San Francisco, CA.</p>
        </div>
      </section>
    </>
  )
}
