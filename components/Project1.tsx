export default function Project1Content() {
    return (
        <>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 mt-8 text-center text-white">Branch Library</h2>

            <div className="flex flex-col px-8 pb-10 pt-4 gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Purpose</h3>
                    <hr className="border-white/10 mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed">
                        My crack at a simple application designed to emulate the Git workflow adopted for traditional authors.
                        Users can create accounts, create content, edit other users&apos; content, and browse existing libraries.
                        Written in Python using Flask for the UI and back-end, and SQLite for the app database. Browse the
                        embedded app below.
                    </p>
                </div>

                <iframe
                    title="Branch Library"
                    height="500"
                    loading="lazy"
                    src="https://branchlibrary-8478c72f5159.herokuapp.com/"
                    className="rounded border border-white/10 w-full"
                />

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">User Version Control Flow</h3>
                    <hr className="border-white/10 mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Users can edit and submit merge requests on other user content. Forks of stories can also be made
                        and versioned individually.
                    </p>
                    <img src="/version_ctrl.png" alt="User version control system flowchart" className="rounded border border-white/10" />
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Database Design</h3>
                    <hr className="border-white/10 mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Implemented using SQLite. The schema covers user credentials, stories, versions, and merge requests —
                        enabling both the version control system and secure user authentication.
                    </p>
                    <img src="/db_model.png" alt="Branch Library database schema diagram" className="rounded border border-white/10" />
                </div>

                <a
                    href="https://branchlibrary-8478c72f5159.herokuapp.com/"
                    className="text-center text-sm border border-emerald-800 text-emerald-400 rounded py-2.5 hover:bg-emerald-950 transition-colors duration-200"
                >
                    Visit the Site →
                </a>
            </div>
        </>
    )
}
