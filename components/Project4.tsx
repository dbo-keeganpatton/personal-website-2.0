export default function Project4Content() {
    return (
        <>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 mt-8 text-center text-white">BigQuery Export App</h2>

            <div className="flex flex-col px-8 pb-10 pt-4 gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Purpose</h3>
                    <hr className="border-white/10 mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Native BigQuery resultset CSV exports are incomplete. This app provides a low-code solution
                        requiring no client libraries or extra dependencies — packaged in Go for a cross-platform
                        native UI.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Application UI</h3>
                    <hr className="border-white/10 mb-4" />
                    <img src="/GoQu.png" alt="GoQuery application user interface" className="rounded border border-white/10" />
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Tooling</h3>
                    <hr className="border-white/10 mb-4" />
                    <ol className="list-decimal text-sm text-slate-400 pl-5 space-y-1">
                        <li>Golang</li>
                        <li>Fyne (UI framework)</li>
                    </ol>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Usage</h3>
                    <hr className="border-white/10 mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Download GoQuery.zip and unzip on Mac, or download and run GoQuery.exe on Windows.
                        Input your billing project and query string, then click Run.
                    </p>
                </div>

                <a
                    href="https://github.com/dbo-keeganpatton/GoQuery/tree/main"
                    className="text-center text-sm border border-emerald-800 text-emerald-400 rounded py-2.5 hover:bg-emerald-950 transition-colors duration-200"
                >
                    Visit the Repository →
                </a>
            </div>
        </>
    )
}
