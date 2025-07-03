import Image from 'next/image'
import { Media } from '@/components/Media'
import { Spacer } from '@/components/Spacer'
import * as motion from 'motion/react-client'
import type { TargetAndTransition, Transition } from 'motion/react'

import styles from './Home.module.css'

export default function Home() {
  const fadeInFrom: TargetAndTransition = {
    opacity: 0,
    transform: "translateY(24px)"
  }
  const fadeInTo: TargetAndTransition = {
    opacity: 1,
    transform: "translateY(0px)"
  }
  const fadeInProps: Transition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.8
  }

  return (
    <div id={styles.content}>
      <section id={styles.hero}>

        {/* Hero image */}
        <motion.div
          initial={fadeInFrom}
          animate={fadeInTo}
          transition={fadeInProps}
          viewport={{ once: true }}
        >
          <Image
            priority
            unoptimized
            src="/illustration.jpg"
            alt="An illustration of Kala Yamaguchi"
            width={1371/4.4}
            height={2132/4.4}
          />
        </motion.div>

        {/* Hero text */}
        <div>
          <motion.p
            className={styles.subtitle}
            initial={fadeInFrom}
            animate={fadeInTo}
            transition={{
              ...fadeInProps,
              delay: 0.3
            }}
            viewport={{ once: true }}
          >
            A visual designer working across digital and print, focusing his craft on building branding systems through strategy, intentional simplicity, and meticulous execution.
          </motion.p>
          <motion.p
            className={styles.subtle}
            initial={fadeInFrom}
            animate={fadeInTo}
            transition={{
              ...fadeInProps,
              delay: 0.5
            }}
            viewport={{ once: true }}
          >
            Based in San Francisco, CA.
          </motion.p>
        </div>
      </section>

      <motion.div
        initial={fadeInFrom}
        whileInView={fadeInTo}
        transition={fadeInProps}
        viewport={{ once: true }}
      >
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="Dream Big"
          link="/projects/dream-big"
        />
      </motion.div>
      <Spacer size={32} />
      <motion.div
        initial={fadeInFrom}
        whileInView={fadeInTo}
        transition={fadeInProps}
        viewport={{ once: true }}
      >
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="The Nuyu Project"
          link="/projects/nuyu"
        />
      </motion.div>
      <Spacer size={32} />
      <motion.div
        initial={fadeInFrom}
        whileInView={fadeInTo}
        transition={fadeInProps}
        viewport={{ once: true }}
      >
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="Dream Big"
          link="/projects/dream-big"
        />
      </motion.div>
      <Spacer size={32} />
      <motion.div
        initial={fadeInFrom}
        whileInView={fadeInTo}
        transition={fadeInProps}
        viewport={{ once: true }}
      >
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="The Nuyu Project"
          link="/projects/nuyu"
        />
      </motion.div>
      <Spacer size={32} />
      <motion.div
        initial={fadeInFrom}
        whileInView={fadeInTo}
        transition={fadeInProps}
        viewport={{ once: true }}
      >
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="Dream Big"
          link="/projects/dream-big"
        />
      </motion.div>
      <Spacer size={32} />
      <motion.div
        initial={fadeInFrom}
        whileInView={fadeInTo}
        transition={fadeInProps}
        viewport={{ once: true }}
      >
        <Media
          src="/thumbnail-2.png"
          alt="A thumbnail of a project"
          title="The Nuyu Project"
          link="/projects/nuyu"
        />
      </motion.div>
    </div>
  )
}
