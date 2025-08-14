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
          src="/HEADSHOT_FINAL2.jpg"
          alt="A headshot of Kala Yamaguchi"
          width={310}
          height={417}
        />
        <section className={styles.text}>
          <p>
            I am a graphic designer currently finishing my undergraduate degree at the University of San Francisco. As a designer, I have a deep appreciation and admiration for the complexities and intricacies of the design process. For me, the creative process is a journey and an adventure. The final output is the culmination of this exploration. My work spans a number of disciplines, ranging from brand identity design, publication design, and some illustration. Currently, I have been given the honor of working as lead in-house designer at the University of San Francisco within the Career Services department. In this role, I lead a small team in creating visual identities for career-related conferences and events, as well as designing essential collateral materials that support the office&apos;s initiatives.
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
