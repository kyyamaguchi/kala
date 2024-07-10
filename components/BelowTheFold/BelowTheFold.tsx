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
      <Link href={link}>
        <header className={styles.header}>
          <Grid columns={2}>
            <div>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.subtitle}>{area}, {season}</p>
            </div>
            <p className={styles.description}>{description}</p>
          </Grid>
        </header>
      </Link>
    </>
  )
}
