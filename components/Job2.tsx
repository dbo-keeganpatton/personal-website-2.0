export default function Job2 () {
    return (

        <div className="flex flex-col p-5 lg:flex-row gap-20 hover:border hover:border-white/5 hover:rounded-lg hover:bg-white/5 hover:text-emerald-500">
            <h1 className="whitespace-nowrap text-xl"> 2022 ➟  2023 &nbsp; &nbsp; &nbsp; </h1>
            
            <div className="flex flex-col pr-30">
                <h1 className="mr-5 text-2xl font-bold pb-3"> Systems Analyst </h1>
                <p className="text-xl text-gray-300/80"> 
                    Design and develop core semantic data models using Power BI/Power Query to enable operational, financial, and executive reporting. 
                    Build and maintain ETL pipelines to aggregate and cleanse data from diverse sources, ensuring data accuracy and availability. 
                    Collaborate with leadership to define analytic needs, translating business requirements into actionable insights within the
                    Business Analytics team. Evaluate and optimize existing technologies and processes to drive 
                    continuous improvement across the organization.                
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
