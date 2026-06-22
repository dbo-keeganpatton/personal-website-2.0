'use client'
import Link from 'next/link'
import Image from 'next/image'
import { sendEmail } from "@/utils/send-email";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./EmailModal";


export type FormData = {
    subject: string;
    email: string;
    message: string;
};



const Navbar: FC = () => {

    const { register, handleSubmit } = useForm<FormData>();
    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (

        <nav className="sticky top-0 z-40 py-2 flex justify-between items-center border-b border-white/10 backdrop-blur-md bg-black/40">

            <a href="#" className="pl-4 font-bold text-emerald-400 hover:text-emerald-300 transition-colors duration-200">
                Keegan Patton
            </a>

            <div className="hidden lg:flex items-center gap-8 text-sm text-gray-400">
                <a href="#experience" className="hover:text-emerald-400 transition-colors duration-200">Experience</a>
                <a href="#projects" className="hover:text-emerald-400 transition-colors duration-200">Projects</a>
            </div>

            <div className="flex items-center">

                <Link href="https://www.linkedin.com/in/keeganpatton/" className="mr-5 transition-opacity duration-200 hover:opacity-70" aria-label="Keegan Patton on LinkedIn">
                    <Image src="/linkedin-svgrepo-com.svg" alt="" width={55} height={55} unoptimized />
                </Link>
                <Link href="https://github.com/dbo-keeganpatton" className="mr-5 transition-opacity duration-200 hover:opacity-70" aria-label="Keegan Patton on GitHub">
                    <Image src="/github-svgrepo-com.svg" alt="" width={50} height={50} unoptimized />
                </Link>
                <button onClick={handleOpenModal} className="transition-opacity duration-200 hover:opacity-70" aria-label="Open contact form">
                    <Image src="/mail-svgrepo-com.svg" alt="" width={60} height={60} unoptimized />
                </button>

                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <h3 className="text-center text-1xl font-semibold mb-4">Leave a message after the beep</h3>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-emerald-800 bg-black/50 text-white placeholder-gray-500 p-2 rounded focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                            {...register('email', { required: true })}
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border border-emerald-800 bg-black/50 text-white placeholder-gray-500 p-2 rounded focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                            {...register('subject', { required: true })}
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full border border-emerald-800 bg-black/50 text-white placeholder-gray-500 p-2 rounded focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                            {...register('message', { required: true })}
                        />
                        <button
                            type="submit"
                            className="w-full bg-emerald-800/40 border border-emerald-700 text-white py-2 rounded hover:bg-red-700 hover:border-red-700 transition-colors duration-200"
                        >
                            Send
                        </button>
                    </form>
                </Modal>

            </div>

        </nav>

    )
}

export default Navbar;
