// Components
import Image from 'next/image'
import { Media } from '@/components/Media'
import { Spacer } from '@/components/Spacer'
import * as motion from 'motion/react-client'

// Styles
import styles from './Home.module.css'

// Constants
import { fadeInFrom, fadeInProps, fadeInTo } from '@/lib/animations'

// Functions
import { getProjectFrontmatters, getProjectSlugs } from '@/lib/projects'

export default async function Home() {
  const projectSlugs = await getProjectSlugs()
  const projectFrontmatters = await getProjectFrontmatters(projectSlugs)

  return (
    <div id={styles.content}>
      <section id={styles.hero}>

        {/* Hero image */}
        <motion.div
          initial={fadeInFrom}
          animate={fadeInTo}
          transition={{
            ...fadeInProps,
            delay: 0.5
          }}
          viewport={{ once: true }}
        >
          <Image
            priority
            unoptimized
            src="/kala_illustration.JPG"
            alt="An illustration of Kala Yamaguchi"
            width={1371/4.4}
            height={2275/4.4}
          />
        </motion.div>

        {/* Hero text */}
        <div id={styles["hero-text"]}>
          <motion.p
            className={styles.subtitle}
            initial={fadeInFrom}
            animate={fadeInTo}
            transition={{
              ...fadeInProps,
              delay: 0.5
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
            Based in Seattle, WA.
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
        {
          projectFrontmatters.map((project, index) => {
            return (
              <div key={index}>
                <motion.div
                  initial={fadeInFrom}
                  whileInView={fadeInTo}
                  transition={fadeInProps}
                  viewport={{ once: true }}
                >
                  <Media
                    src={project.thumbnail}
                    title={project.title}
                    description={project.area}
                    link={projectSlugs[index].slug.join('/')}
                  />
                </motion.div>
                <Spacer size={16} />
              </div>
            )
          })
        }
      </motion.div>
    </div>
  )
}
