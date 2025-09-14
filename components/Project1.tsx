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
                        User Version Control system flowchart. Users can edit and submit
                        merge requests on other user content.<br/> Forks of stories can 
                        also be made and versioned individually.
                    </p>

                    {/*  Site Embed  */}
                    <iframe
                        className="iframe-style"
                        id="branch-library-embed"
                        title="Branch Library"
                        width="1200"
                        height="500"
                        loading="lazy"
                        src="https://branchlibrary-8478c72f5159.herokuapp.com/"
                    />
                    


                    <img 
                        src="/db_model.png"
                        alt="site-schema"
                        width={800}
                        className="m-4 align-middle"

                    />
                </div>

           </Prohect1Modal>



         </div>
    )
}
