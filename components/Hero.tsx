'use client'

import Modal from "./EmailModal";
import { useState } from "react";


export default function Hero() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (    
        <section className="py-20 text-center">
      
            <h1 className="text-5xl font-bold animate-dust-reveal">Hi, I'm Keegan Patton</h1>
            <p className="mt-4 text-xl">Analytics Engineer and Data Plumber</p>
            
            <button 
                className="mt-6 inline-block  text-white px-6 py-3 rounded border-4 border-emerald-900 hover:border-red-700"
                onClick={handleOpenModal}
            >
                Get in Touch
            </button>
    


            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2 className="text-2xl font-semibold mb-4 ">Send me an email</h2>

  
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
