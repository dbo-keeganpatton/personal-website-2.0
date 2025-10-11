'use client'
import { useState } from "react"
import ProjectModal from "./ProjectModal";



export default function Project4() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);



    return (
        <div>
            <div className="flex flex-col hover:border hover:border-white/5 hover:rounded-lg hover:bg-white/5 hover:text-emerald-500 lg:p-5">

                <h3 className="text-md font-bold pb-3 lg:pr-5 text-emerald-500"> GoQuery </h3>
                <p className="text-sm  lg:text-md text-gray-300/80">
                   GCP BigQuery connection app to export full query resultsets to csv. Written in Go. 
                </p>


                {/* Tech Stack items for project  */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Golang (Go)      </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Fyne             </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   GCP (BigQuery)   </div>
                </div>
                {/* End Tech Stack */}



                <button
                    className="text-sm mt-6 w-25 border-2 border-emerald-700 rounded-xl p-1 text-md hover:border-red-800"
                    onClick={handleModalIsOpen}
                > Learn More 
                </button>  
            </div>

            <ProjectModal isOpen={modalIsOpen} onClose={handleSetModalIsOpen}>

                <h1 className="text-3xl lg:text-4xl font-semibold mb-2 mt-6 text-center">BigQuery Export App</h1>
                <div className="flex flex-col p-15">
 
                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold"> Purpose </h1>
                    <hr className="pb-3" />
                    <p className="text-sm lg:text-2xl pb-6">
                        Native Bigquery resultset csv exports are incomplete. This application enables a low code solution 
                        requiring no client libraries or dependencies. Written and packaged using Golang, enabling a cross
                        platform UI for efficient data extraction.
                    </p>

                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold"> Application UI </h1>
                    <hr className="pb-4"/>
                    <img src="/GoQu.png" alt="Pipeline Diagram" />


                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold pt-6">Tooling </h1>
                    <hr />
                    <ol className="list-decimal text-md lg:text-xl pl-5 lg:pl-10 pt-4 pb-1">
                        <li> Golang </li>
                        <li> Fyne (UI Viz) </li>
                    </ol>


                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold pt-6"> Application Use </h1>
                    <hr className="pb-4"/>
                    <p className="text-sm lg:text-2xl pb-6">
                        Download the GoQuery.zip and unzip on Mac, or download and execute the GoQuery.exe program on Windows.
                        Input your billing project and query string and click Run.
                    </p>
                    
                    <a  href="https://github.com/dbo-keeganpatton/GoQuery/tree/main"
                        className="text-2xl text-center border-3 rounded-md border-emerald-800 hover:bg-red-700 p-2 m-5"
                    > 
                        Visit the Repository 
                    </a>

                </div>
            </ProjectModal>


         </div>
    )
}
