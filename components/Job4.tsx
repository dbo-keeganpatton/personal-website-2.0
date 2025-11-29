export default function Job4() {
  return (
    <div className="flex flex-col hover:border hover:border-white/5 hover:rounded-lg hover:bg-white/5 hover:text-emerald-500 lg:p-5">
      <h1 className="whitespace-nowrap text-sm text-gray-300/80"> 2025 ➟  Present  </h1>

      <div className="flex flex-col">
        <h1 className="text-md font-bold pb-3 lg:pr-5 text-emerald-500">
          <span className="text-red-500/80"> Walmart Global Tech  </span>
          ❯ Data Engineer III
        </h1>

        {/* Tech Stack items */}
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Scala        </div>
          <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Airflow      </div>
          <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Spark        </div>
          <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   SQL          </div>
        </div>
        {/* End Tech Stack */}

      </div>

    </div>

  )
}
