export default function Project3Content() {
    return (
        <>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 mt-8 text-center text-white">Thrasher Sentiment Analysis</h2>

            <div className="flex flex-col px-8 pb-10 pt-4 gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Purpose</h3>
                    <hr className="border-white/10 mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Extracts Q&amp;A text from interview articles on Thrashermagazine.com into a local Postgres database,
                        then transforms it through two DBT models — removing punctuation and single-character tokens.
                        The prepped data is tokenised and evaluated for sentiment using NLTK&apos;s SentimentIntensityAnalyzer,
                        producing values from -1 to 1 aggregated per interview.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Data Pipeline Structure</h3>
                    <hr className="border-white/10 mb-4" />
                    <img src="/dataFlow.png" alt="Data pipeline structure diagram" className="rounded border border-white/10" />
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Tooling</h3>
                    <hr className="border-white/10 mb-4" />
                    <ol className="list-decimal text-sm text-slate-400 pl-5 space-y-1">
                        <li>Pandas &amp; Seaborn</li>
                        <li>Postgres + SqlAlchemy</li>
                        <li>Selenium + BeautifulSoup</li>
                        <li>Apache Airflow</li>
                        <li>DBT (Data Build Tool)</li>
                        <li>NLTK</li>
                    </ol>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Airflow DAG</h3>
                    <hr className="border-white/10 mb-4" />
                    <img src="/dag.png" alt="Airflow DAG diagram" className="rounded border border-white/10" />
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Sentiment Distribution</h3>
                    <hr className="border-white/10 mb-4" />
                    <img src="/SentimentHistogram.png" alt="Histogram of Thrasher sentiment score distribution" className="rounded border border-white/10" />
                </div>

                <a
                    href="https://github.com/dbo-keeganpatton/thrasher_data_pipeline/tree/main"
                    className="text-center text-sm border border-emerald-800 text-emerald-400 rounded py-2.5 hover:bg-emerald-950 transition-colors duration-200"
                >
                    Visit the Repository →
                </a>
            </div>
        </>
    )
}
