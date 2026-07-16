import ProjectDetailClient from './ProjectDetailClient'

// Hardcoded slugs for static export compatibility with Next.js 14
export function generateStaticParams() {
  return [
    { slug: 'sidas-sweb' },
    { slug: 'task-management-app' },
    { slug: 'creative-portfolio' },
    { slug: 'analytics-dashboard' },
  ]
}

export const dynamicParams = false

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectDetailClient slug={params.slug} />
}
