'use client'
import { useState } from "react"
import ProjectModal from "./ProjectModal";



export default function Project5() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);



    return (
        <div>
            <div className="flex flex-col hover:border hover:border-white/5 hover:rounded-lg hover:bg-white/5 hover:text-emerald-500 lg:p-5">

                <h3 className="text-md font-bold pb-3 lg:pr-5 text-red-500/80"> This Website! </h3>
                <p className="text-sm  lg:text-md text-white">
                   Docker containerized Next.JS application using TailwindCSS to manage styling. Hosted on Heroku, using 
                   Github Actions for CI/CD deployment pipeline.
                </p>


                {/* Tech Stack items for project  */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300"> Typescript </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300"> React (Next.JS) </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300"> Docker </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300"> CI/CD </div>
                </div>
                {/* End Tech Stack */}



                <button
                    className="text-sm mt-6 w-25 border-2 border-emerald-700 rounded-xl p-1 text-md hover:border-red-800"
                    onClick={handleModalIsOpen}
                > Learn More 
                </button>  
            </div>

            <ProjectModal isOpen={modalIsOpen} onClose={handleSetModalIsOpen}>

                <h1 className="text-3xl lg:text-4xl font-semibold mb-2 mt-6 text-center">Personal Website</h1>
                <div className="flex flex-col p-15">
 
                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold"> Purpose </h1>
                    <hr className="pb-3" />
                    <p className="text-sm lg:text-2xl pb-6">
                        Personal workspace where I can test new things, and advertise my experience and the things that I enjoy
                        working with. This is the 3rd iteration of this app, written using Next.JS, TailwindCSS, and containerized
                        via Docker, and deployed continuously via Github Actions (CI/CD), Ensuring fast, efficient and reproducible
                        deployments.
                    </p>

                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold"> Application UI </h1>
                    <hr className="pb-4"/>
                    <img src="/app_deployment.png" alt="Pipeline Diagram" />


                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold pt-6">Tooling </h1>
                    <hr />
                    <ol className="list-decimal text-md lg:text-xl pl-5 lg:pl-10 pt-4 pb-1">
                        <li> React (Next.JS)  </li>
                        <li> Github Actions </li>
                        <li> TailwindCSS </li>
                        <li> Docker </li>
                        <li> Linux </li>
                    </ol>


                    <a  href="https://github.com/dbo-keeganpatton/personal-website-2.0"
                        className="text-2xl text-center border-3 rounded-md border-emerald-800 hover:bg-red-700 p-2 m-5"
                    > 
                        Visit the Repository 
                    </a>

                </div>
            </ProjectModal>


         </div>
    )
}
