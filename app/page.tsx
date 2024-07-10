import Image from 'next/image'
import styles from './Home.module.css'
import { Spacer } from '@/components/Spacer'
import { GalleryCard } from '@/components/GalleryCard'

export default function Home() {
  return (
    <>
      <section id={styles.hero}>
        <Image
          unoptimized
          src="/kala-illustration.png"
          alt="An illustration of Kala Yamaguchi"
          width={734}
          height={949}
        />
        <p><strong>Kala Yamaguchi</strong> is a Native Hawaiian designer & illustrator based in San Francisco</p>
      </section>
      <GalleryCard
        src="/thumbnail-2.png"
        alt="A thumbnail of a project"
        title="Dream Big — University of San Francisco"
        link="/projects/dream-big"
      />
      <Spacer size={32} />
      <GalleryCard
        src="/thumbnail-2.png"
        alt="A thumbnail of a project"
        title="The Nuyu Project"
      />
      <Spacer size={32} />
    </>
  )
}
