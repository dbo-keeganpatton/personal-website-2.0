'use client'
import { sendEmail } from "@/utils/send-email";
import Modal from "./EmailModal";
import { useState } from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";


export type FormData = {
    subject: string;
    email: string;
    message: string;
};


const EmailButton: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  function onSubmit(data: FormData) {
    sendEmail(data);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (    
        <section className="lg:py-0 py-20 text-center">
            <button 
                className="mt-6 inline-block  text-white px-6 rounded-xl border-2 border-emerald-700 hover:border-red-700"
                onClick={handleOpenModal}
            >
                Get in Touch
            </button>
    
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h3 className="text-center text-1xl font-semibold mb-4 ">Leave a message after the beep</h3>

  
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full border border-gray-300 p-2 rounded"
                        {...register('email', { required: true })}
                    />
                    <input 
                        type="text" 
                        placeholder="Subject" 
                        className="w-full border border-gray-300 p-2 rounded"
                        {...register('subject', { required: true })}
                    />
                    <textarea 
                        placeholder="Message" 
                        rows={4}
                        className="w-full border border-gray-300 p-2 rounded"
                        {...register('message', { required: true })}
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


export default EmailButton;
