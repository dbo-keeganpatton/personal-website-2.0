export default function Job3 () {
    return (
        <div className="flex flex-col transition-all duration-200 hover:border hover:border-white/5 hover:rounded-lg hover:bg-white/5 hover:text-emerald-500 lg:p-5">
            <p className="whitespace-nowrap text-sm text-gray-300/80">
                <time dateTime="2021">2021</time> ➟ <time dateTime="2022">2022</time>
            </p>

            <div className="flex flex-col">
                <h3 className="text-md font-bold pb-3 lg:pr-5 text-emerald-500">
                   <span className="text-red-500/80"> PAM Transport  </span>
                   ❯ Associate Systems Analyst
                </h3>
                <p className="text-sm  lg:text-md text-white">
                    Developed and maintained operational reporting solutions for Fleet Maintenance and Operations using Power BI and Excel.
                    Designed and optimized complex DAX measures and leveraged SQL to extract and transform data from on-premise SQL Server
                    and MySQL databases. Managed and enhanced core semantic data models to support organization-wide reporting and data-driven
                    decision-making.
                </p>

                {/* Tech Stack items */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   SQL            </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Excel          </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   PowerBI        </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Power Query    </div>
                </div>
                {/* End Tech Stack */}

            </div>

        </div>

    )
}
