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
                
                <iframe
                    className="iframe-style"
                    id="branch-library-embed"
                    title="Branch Library"
                    width="1225"
                    height="600"
                    loading="lazy"
                    src="https://branchlibrary-8478c72f5159.herokuapp.com/"
                />
           </Prohect1Modal>



         </div>
    )
}
