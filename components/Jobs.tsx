import ScrollReveal from './ScrollReveal'

const jobs = [
    {
        start: '2025', end: null,
        company: 'Walmart Global Tech',
        role: 'Data Engineer III',
        description:
            'Build and maintain large-scale data pipelines processing enterprise retail data. ' +
            'Drive architecture decisions for team data infrastructure across distributed compute environments.',
        tech: ['Scala', 'Airflow', 'Spark', 'SQL'],
    },
    {
        start: '2023', end: '2025',
        company: 'Walmart',
        role: 'Senior Data Analyst',
        description:
            'Built executive reporting for business-critical transformation initiatives and took end-to-end ' +
            'ownership of data engineering — architecting, building, and maintaining production pipelines in GCP. ' +
            'Applied data modeling principles to design analytics-ready datasets and evaluated emerging technologies ' +
            'to advance team capabilities.',
        tech: ['Python', 'SQL', 'GCP', 'Linux', 'Git', 'DBT', 'Tableau', 'PowerBI'],
    },
    {
        start: '2022', end: '2023',
        company: 'PAM Transport',
        role: 'Systems Analyst',
        description:
            'Designed core semantic data models using Power BI and Power Query for operational, financial, and ' +
            'executive reporting. Built and maintained ETL pipelines to aggregate and cleanse data from diverse ' +
            'sources, ensuring accuracy and availability.',
        tech: ['SQL', 'Data Modeling', 'PowerBI', 'Power Automate'],
    },
    {
        start: '2021', end: '2022',
        company: 'PAM Transport',
        role: 'Associate Systems Analyst',
        description:
            'Developed operational reporting for Fleet Maintenance and Operations using Power BI and Excel. ' +
            'Designed complex DAX measures and leveraged SQL against on-premise SQL Server and MySQL databases. ' +
            'Managed and enhanced core semantic data models for organization-wide reporting.',
        tech: ['SQL', 'Excel', 'PowerBI', 'Power Query'],
    },
]

export default function Jobs() {
    return (
        <section id="experience" className="mb-24">
            <h2 className="text-[11px] font-mono tracking-[0.2em] uppercase text-slate-600 mb-12">
                Experience
            </h2>

            <div className="space-y-12">
                {jobs.map((job, i) => (
                    <ScrollReveal key={i}>
                        <article className="group relative pl-5 border-l border-white/5 hover:border-emerald-800/60 transition-colors duration-300">
                            <p className="text-[11px] text-slate-600 font-mono mb-2 tracking-wide">
                                <time dateTime={job.start}>{job.start}</time>
                                {job.end
                                    ? <> — <time dateTime={job.end}>{job.end}</time></>
                                    : ' — Present'
                                }
                            </p>
                            <h3 className="text-sm font-semibold text-slate-200 mb-1">
                                <span className="text-red-400/80">{job.company}</span>
                                <span className="text-slate-600 mx-2" aria-hidden="true">❯</span>
                                {job.role}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed mt-2 mb-4">
                                {job.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {job.tech.map(t => (
                                    <span
                                        key={t}
                                        className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-emerald-950/60 border border-emerald-900/50 text-emerald-500"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
