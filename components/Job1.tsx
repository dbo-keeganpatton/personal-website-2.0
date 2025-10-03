export default function Job1 () {
    
    return (
        <div className="flex flex-col p-5 lg:flex-row gap-20 hover:border hover:border-white/5 hover:rounded-lg hover:bg-white/5 hover:text-emerald-500">
            <h1 className="whitespace-nowrap text-xl pr-2"> 2023 ➟  Present  </h1>
            
            <div className="flex flex-col pr-30">
                <h1 className="mr-5 text-2xl font-bold pb-3"> Senior Data Analyst - Transformation </h1>
                <p className="text-xl text-gray-300/80"> 
                    Build and maintain executive reporting to support business-critical transformation initiatives and 
                    internal product analytics. Take end-to-end ownership of data engineering and analytics processes, including
                    architecting, building, and maintaining production data pipelines in a cloud data warehouse aligned with ETL/ELT
                    best practices. Apply data modeling principles to design optimized, analytics-ready datasets. Research, scope,
                    and implement emerging technologies to advance team capabilities. Champion Git best practices and promote agile
                    workflows across projects.
                </p>

                {/* Tech Stack items */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Python         </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   SQL            </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   GCP            </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Linux          </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   DBT            </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Tableau        </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Data Modeling  </div>
                </div>
                {/* End Tech Stack */}

            </div>
        
        </div>

    )
}
