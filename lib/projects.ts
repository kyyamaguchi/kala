// Functions
import path from 'node:path'
import fs from 'node:fs/promises'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'

// Components
import { Grid } from '@/components/Grid'
import { Media } from '@/components/Media'
import { Spacer } from '@/components/Spacer'
import { Subtle } from '@/components/Subtle'
import { BelowTheFold } from '@/components/BelowTheFold'

// rehype plugins
import rehypeSlug from 'rehype-slug'

export type Frontmatter = {
  title: string
  area: string
  season: string
  description: string
  thumbnail: string
  published: boolean
}

export async function getMdSlugs(folder: string) {
  const entries = await fs.readdir(folder, { withFileTypes: true })
  const files = entries.filter((file) => file.isFile())
  const directories = entries.filter((file) => file.isDirectory())
  let slugs = files
    .filter((file) => file.name.endsWith('.md'))
    .map((file) => file.name.replace(/\.md$/, ''))
    .map((slug) => path.join(folder, slug))
    .map((slug) => slug.split('/'))
    .map((slug) => slug.slice(1))
    .map((slug) => ({ slug }))

  for (const directory of directories) {
    const nestedSlugs = await getMdSlugs(path.join(folder, directory.name))
    slugs = slugs.concat(nestedSlugs)
  }

  return slugs
}

export async function readPage(slug: string[]) {
  try {
    const filePath = path.join(process.cwd(), 'app', ...slug) + '.md'
    const page = await fs.readFile(filePath, 'utf8')

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: page,
      components: { BelowTheFold, Grid, Media, Spacer, Subtle },
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
}

export async function getProjectSlugs() {
  return await getMdSlugs('app')
}

export async function getProjectFrontmatters(files: { slug: string[] }[]) {
  const projectFrontmatters: Frontmatter[] = []
  for (const file of files) {
    const { frontmatter } = await readPage(file.slug)
    projectFrontmatters.push(frontmatter)
  }
  return projectFrontmatters
}
