export default function Project5Content() {
    return (
        <>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 mt-8 text-center text-white">Personal Website</h2>

            <div className="flex flex-col px-8 pb-10 pt-4 gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Purpose</h3>
                    <hr className="border-white/10 mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Personal workspace to test new things and advertise experience. This is the 3rd iteration —
                        built with Next.js and TailwindCSS, containerised via Docker, and deployed continuously
                        through GitHub Actions CI/CD for fast, reproducible deployments.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Development Lifecycle</h3>
                    <hr className="border-white/10 mb-4" />
                    <img src="/app_deployment.png" alt="CI/CD deployment pipeline diagram" className="rounded border border-white/10" />
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Tooling</h3>
                    <hr className="border-white/10 mb-4" />
                    <ol className="list-decimal text-sm text-slate-400 pl-5 space-y-1">
                        <li>React (Next.js)</li>
                        <li>TailwindCSS</li>
                        <li>Docker</li>
                        <li>GitHub Actions</li>
                        <li>Linux</li>
                    </ol>
                </div>

                <a
                    href="https://github.com/dbo-keeganpatton/personal-website-2.0"
                    className="text-center text-sm border border-emerald-800 text-emerald-400 rounded py-2.5 hover:bg-emerald-950 transition-colors duration-200"
                >
                    Visit the Repository →
                </a>
            </div>
        </>
    )
}
