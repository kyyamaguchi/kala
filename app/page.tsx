import Image from 'next/image'

import { Media } from '@/components/Media'
import { Spacer } from '@/components/Spacer'
import { FadeWrapper } from '@/components/FadeWrapper'

import styles from './Home.module.css'

export default function Home() {
  return (
    <div id={styles.content}>
      <section id={styles.hero}>
        <Image
          priority
          unoptimized
          src="/illustration.jpg"
          alt="An illustration of Kala Yamaguchi"
          width={1371/4.4}
          height={2132/4.4}
        />
        <div>
          <p style={{ lineHeight: '150%' }}>
            Dedicated to innovative creativity, building compelling brands, and the beauty of simplicity in high craftsmanship.
          </p>
          <p className={styles.subtle}>
            Based in San Francisco.
          </p>
        </div>
      </section>
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="Dream Big"
          link="/projects/dream-big"
        />
      </FadeWrapper>
      <Spacer size={64} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="The Nuyu Project"
          link="/projects/nuyu"
        />
      </FadeWrapper>
      <Spacer size={64} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="Dream Big"
          link="/projects/dream-big"
        />
      </FadeWrapper>
      <Spacer size={64} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="The Nuyu Project"
          link="/projects/nuyu"
        />
      </FadeWrapper>
      <Spacer size={64} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="Dream Big"
          link="/projects/dream-big"
        />
      </FadeWrapper>
      <Spacer size={64} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="The Nuyu Project"
          link="/projects/nuyu"
        />
      </FadeWrapper>
    </div>
  )
}
