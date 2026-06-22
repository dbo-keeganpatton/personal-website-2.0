'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import ProjectModal from './ProjectModal'
import Project1Content from './Project1'
import Project2Content from './Project2'
import Project3Content from './Project3'
import Project4Content from './Project4'
import Project5Content from './Project5'

type ProjectId = 1 | 2 | 3 | 4 | 5

const modalMap: Record<ProjectId, React.ComponentType> = {
    1: Project1Content,
    2: Project2Content,
    3: Project3Content,
    4: Project4Content,
    5: Project5Content,
}

const projects: {
    id: ProjectId
    category: string
    name: string
    description: string
    tech: string[]
    link?: string
}[] = [
    {
        id: 5,
        category: 'Web Development',
        name: 'This Website',
        description:
            'Docker-containerised Next.js application using TailwindCSS for styling, hosted on Heroku with ' +
            'GitHub Actions for CI/CD.',
        tech: ['TypeScript', 'React', 'Next.js', 'Docker', 'CI/CD'],
        link: 'https://github.com/dbo-keeganpatton/personal-website-2.0',
    },
    {
        id: 1,
        category: 'Web Development',
        name: 'Branch Library',
        description:
            'Cooperative web app for collaborative text editing with a Git-inspired version control system ' +
            'for user-generated content. Written in Flask with a SQLite backend.',
        tech: ['Python', 'Flask', 'SQL', 'Data Modeling'],
    },
    {
        id: 2,
        category: 'Data Engineering',
        name: 'Dark Oura',
        description:
            'Self-service analytics pipeline for the Oura Ring biometric tracker. Pulls data via the V2 ' +
            'API and visualises sleep, stress, and activity metrics in a Streamlit app.',
        tech: ['Python', 'Streamlit', 'Data Viz'],
    },
    {
        id: 3,
        category: 'Data Science',
        name: 'Thrasher NLP Pipeline',
        description:
            'Web scraper and NLP pipeline that extracts interview Q&A from Thrasher Magazine, transforms ' +
            'the data through DBT, and scores each interview\'s sentiment with NLTK.',
        tech: ['Selenium', 'DBT', 'Airflow', 'Postgres', 'NLTK'],
    },
    {
        id: 4,
        category: 'App Development',
        name: 'GoQuery',
        description:
            'Native cross-platform desktop app for exporting complete BigQuery resultsets to CSV — ' +
            'no client libraries needed. Written in Go with the Fyne UI framework.',
        tech: ['Go', 'Fyne', 'GCP / BigQuery'],
    },
]

export default function Projects() {
    const [activeId, setActiveId] = useState<ProjectId | null>(null)
    const ActiveContent = activeId ? modalMap[activeId] : null

    return (
        <section id="projects">
            <h2 className="text-[11px] font-mono tracking-[0.2em] uppercase text-slate-600 mb-12">
                Projects
            </h2>

            <div className="space-y-10">
                {projects.map(p => (
                    <ScrollReveal key={p.id}>
                        <article className="group relative pl-5 border-l border-white/5 hover:border-emerald-800/60 transition-colors duration-300">
                            <p className="text-[10px] font-mono tracking-widest uppercase text-emerald-700 mb-1.5">
                                {p.category}
                            </p>
                            <h3 className="text-sm font-semibold text-slate-200 mb-1.5">
                                {p.name}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                {p.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tech.map(t => (
                                    <span
                                        key={t}
                                        className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-emerald-950/60 border border-emerald-900/50 text-emerald-500"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <button
                                onClick={() => setActiveId(p.id)}
                                aria-label={`Learn more about ${p.name}`}
                                className="text-[11px] font-mono text-slate-600 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1.5"
                            >
                                <span aria-hidden="true">→</span> Details
                            </button>
                        </article>
                    </ScrollReveal>
                ))}
            </div>

            <ProjectModal isOpen={activeId !== null} onClose={() => setActiveId(null)}>
                {ActiveContent && <ActiveContent />}
            </ProjectModal>
        </section>
    )
}
