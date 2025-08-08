// Functions
import { getBelowTheFoldProject, getMdSlugs, readPage } from '@/lib/projects'

// Components
import { Suspense } from 'react'
import { Grid } from '@/components/Grid'
import { BackButton } from '@/components/BackButton'
import { BelowTheFold } from '@/components/BelowTheFold'

// Types
import type { Metadata } from 'next'

// Styles
import styles from './Page.module.css'

export async function generateMetadata(
  { params }:
  { params: { slug: string[] } }
) {
  const { frontmatter } = await readPage(params.slug)
  const metadata: Metadata = {
    title: `${frontmatter.title}`,
    description: frontmatter.description,
    openGraph: {
      siteName: "Kala Yamaguchi's personal website",
      images: '/og-image.png'
    }
  }

  return metadata
}

export const dynamicParams = false
export async function generateStaticParams() {
  const slugs = await getMdSlugs('app')
  return slugs
}

export default async function Page(
  { params }:
  { params: { slug: string[] } }
) {
  const { content, frontmatter } = await readPage(params.slug)
  const nextProject = await getBelowTheFoldProject(params.slug)

  return (
    <>
      <Suspense>
        <div className={styles.content}>
          <BackButton />
          <header className={styles.header}>
            <Grid columns={2}>
              <div>
                <h1 className={styles.title}>{frontmatter.title}</h1>
                <p className={styles.subtitle}>{frontmatter.area}, {frontmatter.season}</p>
              </div>
              <p className={styles.description}>{frontmatter.description}</p>
            </Grid>
          </header>
          {content}
          <BelowTheFold
            title={nextProject.title}
            area={nextProject.area}
            season={nextProject.season}
            description={nextProject.description}
            link={`/${nextProject.slug}`}
          />
        </div>
      </Suspense>
    </>
  )
}
