'use client'
import { useState } from "react"
import ProjectModal from "./ProjectModal";


export default function Project1() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);

   return (
        <div>
            {/* Just throwing a space here to line up with job title cols  */}
            <h1> &nbsp;</h1>
            <div className="flex flex-col hover:border hover:border-white/5 hover:rounded-lg hover:bg-white/5 hover:text-emerald-500 lg:p-5">  
            
                <h3 className="text-md font-bold pb-3 lg:pr-5 text-emerald-500">Branch Library</h3>
                <p className="text-sm  lg:text-md text-gray-300/80">
                    Cooperative Web App for Text Editing, written in Flask. Collaborative version control system
                    for users. Rich text editing.
                </p>
                

                {/* Tech Stack items for project  */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Python           </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Flask            </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   SQL              </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   HTML/CSS         </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Data Modeling    </div>
                </div>
                {/* End Tech Stack */}


                <button
                    className="text-sm mt-6 w-25 border-2 border-emerald-700 rounded-xl p-1 text-md hover:border-red-800"
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
