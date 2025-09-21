'use client'
import { useState } from "react"
import ProjectModal from "./ProjectModal";



export default function Project4() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);



    return (
        <div className="border p-6 rounded-3xl shadow transform transition duration-300 ease-in-out hover:scale-105">
          <h3 className="text-xl font-bold"> GoQuery </h3>
            <p className="mt-3">
               GCP BigQuery connection app to export full query resultsets to csv. Written in Go. 
            </p>

            <button
                className="text-sm mt-6 border-2 border-emerald-700 rounded-xl p-2 text-md hover:border-red-800"
                onClick={handleModalIsOpen}
            > Learn More 
            </button>  

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
