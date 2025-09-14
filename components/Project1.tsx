'use client'
import { useState } from "react"
import Prohect1Modal from "./Project1Modal";


export default function Project1() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);

    {/* Create a Modal for this project at some point */}


    return (
        <div className="border p-6 rounded-3xl shadow">
          <h3 className="text-xl font-bold">Branch Library</h3>
            <p className="mt-3">
                Cooperative Web App for Text Editing, written in Flask. 
            </p>

            <button
                className="text-sm mt-6 border-2 border-emerald-700 rounded-xl p-2 text-md hover:border-red-800"
                onClick={handleModalIsOpen}
            > Learn More 
            </button>

            <Prohect1Modal isOpen={modalIsOpen} onClose={handleSetModalIsOpen}>
                <h3 className="text-2xl font-semibold mb-4 text-center">Branch Library</h3>
                
               
                <div className="flex flex-col justify-center items-center object-center">
                    <p className="text-xl p-3">
                        My crack at a very simple application designed to emulate the Git workflow
                        adopted to traditional<br/>authors. Users can create accounts, create content,
                        edit other User content, and browse existing<br/> libraries. Writted in Python 
                        implementing Flask for UI and back-end integrations, and SQLite for<br/> the
                        app database. Browse the embedded app below!
                    </p>

                    <a 
                        href="https://branchlibrary-8478c72f5159.herokuapp.com/"
                        className="text-xl  border-2 rounded-md border-red-800 hover:border-emerald-700   p-1 m-3"
                    > 
                        Visit the Site 
                    </a>
                    
                    {/*  Site Embed  */}
                    <iframe
                        className="iframe-style"
                        id="branch-library-embed"
                        title="Branch Library"
                        width="900"
                        height="500"
                        loading="lazy"
                        src="https://branchlibrary-8478c72f5159.herokuapp.com/"
                    />
                    
                    <p className="text-xl p-3">
                        User Version Control system flowchart. Users can edit and submit
                        merge requests on other user content.<br/> Forks of stories can 
                        also be made and versioned individually.
                    </p>


                    <img 
                        src="/version_ctrl.png"
                        alt="site-schema"
                        width={900}
                        className="m-4 align-middle"

                    />
                    
                   <p className="text-xl p-3"> 
                        Database is implemented using SQLite. The schema consists of User credentials, 
                        Stories, their<br/>versions, and merge requests. Database enables both the version
                        control system<br/> and secure user authentication.
                   </p>
                    <img 
                        src="/db_model.png"
                        alt="site-schema"
                        width={900}
                        className="m-4 align-middle"

                    />

                </div>

           </Prohect1Modal>



         </div>
    )
}
