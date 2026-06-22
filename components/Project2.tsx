export default function Project2Content() {
    return (
        <>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 mt-8 text-center text-white">Dark Oura</h2>

            <div className="flex flex-col px-8 pb-10 pt-4 gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Purpose</h3>
                    <hr className="border-white/10 mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Automated self-service analytics pipeline using the Oura Ring V2 API and Streamlit.
                        The user obtains an API token from Oura directly. Secrets are used for the API call
                        but are never stored.
                    </p>
                </div>

                <img src="/sample_token.png" alt="Oura API token input screen" className="rounded border border-white/10" />

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">App UX Flow</h3>
                    <hr className="border-white/10 mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Biometric data is extracted via Ourapi.py, a custom package I built that standardises
                        programmatic extraction from the Oura Ring V2 API. Data is processed with pandas, stored
                        in memory, and visualised across three categories: sleep, stress, and activity. Users
                        define a custom time frame on extraction.
                    </p>
                </div>

                <img src="/sample.png" alt="Dark Oura app dashboard showing biometric data" className="rounded border border-white/10" />

                <a
                    href="https://darkoura.streamlit.app/"
                    className="text-center text-sm border border-emerald-800 text-emerald-400 rounded py-2.5 hover:bg-emerald-950 transition-colors duration-200"
                >
                    Visit the Site →
                </a>
            </div>
        </>
    )
}
