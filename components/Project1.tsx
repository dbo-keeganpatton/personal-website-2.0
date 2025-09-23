'use client'
import { useState } from "react"
import ProjectModal from "./ProjectModal";


export default function Project1() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);

    {/* Create a Modal for this project at some point */}


    return (
        <div>
          <div className="border p-6 rounded-3xl shadow transform transition duration-300 ease-in-out hover:scale-105">  
              <h3 className="text-xl font-bold">Branch Library</h3>
                <p className="mt-3">
                    Cooperative Web App for Text Editing, written in Flask. 
                </p>
                

                {/* Tech Stack items for project  */}
                <div className="flex gap-4">
                    <div className="flex-1 border-2 border-emerald-700 p-1 rounded-lg text-sm bg-emerald-700 text-center">   Python    </div>
                    <div className="flex-1 border-2 border-emerald-700 p-1 rounded-lg text-sm bg-emerald-700 text-center">   Flask     </div>
                    <div className="flex-1 border-2 border-emerald-700 p-1 rounded-lg text-sm bg-emerald-700 text-center">   SQL             </div>
                    <div className="flex-1 border-2 border-emerald-700 p-1 rounded-lg text-sm bg-emerald-700 text-center">   HTML/CSS        </div>
                    <div className="flex-1 border-2 border-emerald-700 p-1 rounded-lg text-sm bg-emerald-700 text-center">   Data Modeling   </div>
                </div>
                {/**/}



                <button
                    className="text-sm mt-6 border-2 border-emerald-700 rounded-xl p-2 text-md hover:border-red-800"
                    onClick={handleModalIsOpen}
                > Learn More 
                </button>
            </div>

            <ProjectModal isOpen={modalIsOpen} onClose={handleSetModalIsOpen}>
                <h1 className="text-4xl font-semibold mb-2 mt-6 text-center">Branch Library</h1>
                
               
                <div className="flex flex-col p-15">

					<h1 className="text-xl  lg:text-3xl pb-3 font-bold"> Purpose </h1>
                    <hr className="pb-6" />
                    <p className="text-sm lg:text-2xl pb-6">
                        My crack at a very simple application designed to emulate the Git workflow
                        adopted to traditional authors. Users can create accounts, create content,
                        edit other User content, and browse existing libraries. Writted in Python 
                        implementing Flask for UI and back-end integrations, and SQLite for the
                        app database. Browse the embedded app below!
                    </p>

                    
                    {/*  Site Embed  */}
                    <iframe
                        className="iframe-style"
                        id="branch-library-embed"
                        title="Branch Library"
                        height="500"
                        loading="lazy"
                        src="https://branchlibrary-8478c72f5159.herokuapp.com/"
                    />
                    

					<h1 className="text-xl  lg:text-3xl pb-2 pt-10 font-bold"> User Version Control System Flow </h1>
                    <hr className="pb-6" />
                    <p className="text-sm lg:text-2xl pb-6">
                        User Version Control system flowchart. Users can edit and submit
                        merge requests on other user content. Forks of stories can 
                        also be made and versioned individually.
                    </p>
                    <img src="/version_ctrl.png" alt="site-schema" />


					<h1 className="text-xl  lg:text-3xl pb-2 pt-10 font-bold"> Database Design </h1>
                    <hr className="pb-6" />
					<p className="text-sm lg:text-2xl pb-6"> 
                        Database is implemented using SQLite. The schema consists of User credentials, 
                        Stories, their versions, and merge requests. Database enables both the version
                        control system and secure user authentication.
                   
					</p>
                
					
					<img src="/db_model.png" alt="site-schema" />
                    <a href="https://branchlibrary-8478c72f5159.herokuapp.com/"
                        className="text-2xl text-center border-3 rounded-md border-emerald-800 hover:bg-red-700 p-2 m-5"
                    > Visit the Site </a>
                
				</div>

           </ProjectModal>



         </div>
    )
}
