'use client'

import Modal from "./EmailModal";
import { useState } from "react";


export default function Hero() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (    
        <section className="py-20 text-center">
      
            <h1 className="text-5xl font-bold animate-dust-reveal">Hi, I'm Keegan</h1>
            
            <button 
                className="mt-6 inline-block  text-white px-6 py-3 rounded-xl border-4 border-emerald-900 hover:border-red-700"
                onClick={handleOpenModal}
            >
                Get in Touch
            </button>
    


            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h3 className="text-center text-1xl font-semibold mb-4 ">Leave a message after the beep</h3>

  
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
            </Modal>
        </section>
    )
}
