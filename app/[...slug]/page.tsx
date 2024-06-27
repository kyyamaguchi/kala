import path from 'node:path'
import fs from 'node:fs/promises'
import type { Metadata } from 'next'
import { Suspense, cache } from 'react'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'

import { Grid } from '@/components/Grid'
import { Spacer } from '@/components/Spacer'
import { GalleryCard } from '@/components/GalleryCard'

import rehypeSlug from 'rehype-slug'

const readPage = cache(async (slug: string[]) => {
  try {
    const filePath = path.join(process.cwd(), 'app', ...slug) + '.md'
    const page = await fs.readFile(filePath, 'utf8')

    type Frontmatter = {
      title: string
      description: string
      published: boolean
    }

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: page,
      components: { GalleryCard, Grid, Spacer },
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [ rehypeSlug ]
        }
      }
    })
    return { content, frontmatter }
  } catch (error) {
    notFound()
  }
})

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
  function getMdSlugs(folder: string, paths: string[] = []) {
    const slugs = paths
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''))
      .map((slug) => path.join(folder, slug))
      .map((slug) => slug.split('/'))
      .map((slug) => ({ slug }))
    return slugs
  }

  const app = path.join(process.cwd(), 'app')
  const files = await fs.readdir(app, { withFileTypes: true })
  const folders = files.filter((file) => file.isDirectory())
  let slugs = await Promise.all(
    folders.map(async (folder) => {
      const pathsInFolder = await fs.readdir(path.join(app, folder.name))
      return getMdSlugs(folder.name, pathsInFolder)
    })
  )
  .then((slugs) => slugs.flat())

  const pathsInAppFolder = files.map((file) => file.name)
  const slugsFromAppFolder = getMdSlugs('', pathsInAppFolder)
  slugs = slugs.concat(slugsFromAppFolder)
  return slugs
}

export default async function Page(
  { params }:
  { params: { slug: string[] } }
) {
  const { content, frontmatter } = await readPage(params.slug)

  return (
    <>
      <Suspense fallback={<h1>{frontmatter.title}</h1>}>
        {content}
      </Suspense>
    </>
  )
}
