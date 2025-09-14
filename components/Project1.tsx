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
                <h3 className="text-2xl font-semibold mb-4 ">Leave a message after the beep</h3>

  
                <form className="space-y-4">
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Subject" 
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                    <textarea 
                        placeholder="Message" 
                        rows={4}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                    <button 
                        type="submit"
                        className="w-full text-white py-2 rounded hover:bg-red-700"
                    >
                        Send
                    </button>
                </form>
            </Prohect1Modal>



         </div>
    )
}
