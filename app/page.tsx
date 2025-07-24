import Image from 'next/image'
import { Media } from '@/components/Media'
import { Spacer } from '@/components/Spacer'
import * as motion from 'motion/react-client'

import styles from './Home.module.css'
import { fadeInFrom, fadeInProps, fadeInTo } from '@/lib/animations'

export default function Home() {

  return (
    <div id={styles.content}>
      <section id={styles.hero}>

        {/* Hero image */}
        <motion.div
          initial={fadeInFrom}
          animate={fadeInTo}
          transition={{
            ...fadeInProps,
            delay: 0.3
          }}
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
              delay: 0.3
            }}
            viewport={{ once: true }}
          >
            Based in San Francisco, CA.
          </motion.p>
        </div>
      </section>

      <motion.div
        initial={fadeInFrom}
        animate={fadeInTo}
        transition={{
          ...fadeInProps,
          delay: 0.5
        }}
        viewport={{ once: true }}
      >
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
            description="Brand Identity"
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
            description="Brand Identity"
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
            description="Brand Identity"
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
            description="Brand Identity"
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
            description="Brand Identity"
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
            description="Brand Identity"
            link="/projects/nuyu"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
