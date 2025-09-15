'use client'

import Link from 'next/link'
import { useState } from "react";
import Modal from "./EmailModal";



export default function Navbar() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
   
        <nav className="py-2 flex justify-between items-center border-b">
      
            <h1 />
            <div className="flex items-center">
                
                <Link href="https://www.linkedin.com/in/keeganpatton/" className="mr-5">
                    <img src="/linkedin-svgrepo-com.svg" alt="Keegan Patton Linkedin" width={55} height={55} />
                </Link>
                <Link href="https://github.com/dbo-keeganpatton" className="mr-5">
                    <img src="/github-svgrepo-com.svg" alt="Keegan Patton Github" width={50} height={50} />
                </Link>
                <button onClick={handleOpenModal}>
                    <img src="/mail-svgrepo-com.svg" alt="Send and Email" width={60} height={60} />
                </button>



                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
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
            </Modal>


            </div>
            <h1 />
    
        </nav>
  
    )
}
