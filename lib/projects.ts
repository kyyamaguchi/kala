import { type Frontmatter, getMdSlugs, readPage } from '@/app/[...slug]/page'

export async function getProjectSlugs() {
  return await getMdSlugs('app/projects')
}

export async function readProjects(files: { slug: string[] }[]) {
  const projectFrontmatters: Frontmatter[] = []
  for (const file of files) {
    const { frontmatter } = await readPage(file.slug)
    projectFrontmatters.push(frontmatter)
  }
  return projectFrontmatters
}
