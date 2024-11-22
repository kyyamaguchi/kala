import Link from "next/link"
import Image from "next/image"
import { Spacer } from "@/components/Spacer"

import styles from "./About.module.css"

export default function About() {
  return (
    <>
      <Spacer size={64} />
      <article className={styles.about}>
        <Image
          src="/headshot.png"
          alt="A headshot of Kala Yamaguchi"
          width={310}
          height={417}
        />
        <section className={styles.text}>
          <p>
            <strong>Hey, I&apos;m Kala.</strong>
          </p>
          <p>
            I&apos;m a designer who&apos;s truly cool and has a fun time. Originally from Oahu, Hawai&apos;i, I moved to San Francisco for undergrad, where I&apos;m currently in my 4th year. I grew up playing baseball (...)
          </p>
          <p>
            You can learn more about my work on my <Link href="#">résumé</Link>.
          </p>
          <p>
            You can connect with me on <Link href="https://linkedin.com/in/kalayamaguchi">LinkedIn</Link>, or drop me a note via <Link href="#">email</Link>.
          </p>
        </section>
      </article>
    </>
  )
}
