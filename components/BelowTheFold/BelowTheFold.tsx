import { Route } from 'next'
import { Link } from 'next-view-transitions'

import { Grid } from '@/components/Grid'

import styles from './BelowTheFold.module.css'

export function BelowTheFold(
  { title, area, season, description, link }:
  { title: string, area: string, season: string, description: string, link: Route }
) {
  return (
    <>
      <hr id={styles.divider} />
      <Link href={link} id={styles["link-wrapper"]}>
      <p>Next project</p>
        <header id={styles.header}>
          <Grid columns={2}>
            <div>
              <h1 id={styles.title}>{title}</h1>
              <p id={styles.subtitle}>{area}, {season}</p>
            </div>
            <p id={styles.description}>{description}</p>
          </Grid>
        </header>
      </Link>
    </>
  )
}
