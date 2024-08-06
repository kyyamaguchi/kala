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
          src="/kala-illustration-2.png"
          alt="An illustration of Kala Yamaguchi"
          width={330}
          height={560}
        />
        <p><strong>Kala Yamaguchi</strong> is a Native Hawaiian designer &amp; illustrator based in San Francisco</p>
      </section>
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="Dream Big"
          description="Brand Identity"
          link="/projects/dream-big"
        />
      </FadeWrapper>
      <Spacer size={32} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="The Nuyu Project"
          description="Visual Identity"
          link="/projects/nuyu"
        />
      </FadeWrapper>
      <Spacer size={32} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="Dream Big"
          description="Brand Identity"
          link="/projects/dream-big"
        />
      </FadeWrapper>
      <Spacer size={32} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="The Nuyu Project"
          description="Visual Identity"
          link="/projects/nuyu"
        />
      </FadeWrapper>
      <Spacer size={32} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="Dream Big"
          description="Brand Identity"
          link="/projects/dream-big"
        />
      </FadeWrapper>
      <Spacer size={32} />
      <FadeWrapper>
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="The Nuyu Project"
          description="Visual Identity"
          link="/projects/nuyu"
        />
      </FadeWrapper>
    </div>
  )
}
