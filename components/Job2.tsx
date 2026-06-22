export default function Job2 () {
    return (

        <div className="flex flex-col transition-all duration-200 hover:border hover:border-white/5 hover:rounded-lg hover:bg-white/5 hover:text-emerald-500 lg:p-5">
            <p className="whitespace-nowrap text-sm text-gray-300/80">
                <time dateTime="2022">2022</time> ➟ <time dateTime="2023">2023</time>
            </p>

            <div className="flex flex-col">
                <h3 className="text-md font-bold pb-3 lg:pr-5 text-emerald-500">
                    <span className="text-red-500/80"> PAM Transport </span>
                    ❯ Systems Analyst
                </h3>
                <p className="text-sm  lg:text-md text-white">
                    Design and develop core semantic data models using Power BI/Power Query to enable operational, financial, and executive reporting.
                    Build and maintain ETL pipelines to aggregate and cleanse data from diverse sources, ensuring accuracy and availability.
                    Collaborate with leadership to define analytic needs, requirements into actionable insights within the
                    Business Analytics team. Evaluate and optimize existing technologies and processes to drive
                    continuous improvement.
                </p>

                {/* Tech Stack items */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   SQL            </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Data Modeling  </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   PowerBI        </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Power Automate </div>
                </div>
                {/* End Tech Stack */}

            </div>

        </div>

    )
}
