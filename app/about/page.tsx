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
            Hey, I&apos;m Kala. I&apos;m a designer who&apos;s truly cool and has a fun time. Originally from Oahu, Hawai&apos;i, I moved to San Francisco for undergrad, where I&apos;m currently in my 4th year. I grew up playing baseball (...)
          </p>
          <p>
            You can learn more about my work on my <Link href="#">résumé</Link>.
          </p>
          <p>
            You can connect with me on <Link href="https://linkedin.com/in/kalayamaguchi">LinkedIn</Link>, or drop me a note through <Link href="#">email</Link>.
          </p>
          <p>
            I&apos;m always looking to expand my collection of design books — send me a rec below!
          </p>
        </section>
      </article>
    </>
  )
}
