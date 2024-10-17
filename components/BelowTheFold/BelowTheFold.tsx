'use client'

import { Route } from 'next'
import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'

import { Grid } from '@/components/Grid'

import styles from './BelowTheFold.module.css'

function swipeUp() {
  document.documentElement.animate(
    [
      // 100% (viewport height) - 10vh (footer spacer) - 48px (header bottom margin) - 98px (header rough height) - 96px (header top margin)
      // note: 98px works as an example; won't be exact unless BelowTheFold is clamped at a specific height
      { transform: 'translateY(calc(100% - 10vh - 48px - 98px - 96px))' },
      { transform: 'translateY(0%)' }
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
      fill: 'both',
      pseudoElement: '::view-transition-new(root)',
      delay: 200
    }
  )
}

export function BelowTheFold(
  { title, area, season, description, link }:
  { title: string, area: string, season: string, description: string, link: Route }
) {
  const router = useTransitionRouter()
  return (
    <>
      <hr id={styles.divider} />
      <Link
        id={styles["link-wrapper"]}
        href={link}
        onClick={(event) => {
          event.preventDefault()
          router.push(link, {
            onTransitionReady: swipeUp
          })
        }}
      >
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
