'use client'
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/30 backdrop-blur-xs duration-200"
            onClick={onClose}
        >
            <div
                className="bg-black/85 rounded-lg shadow-emerald-800 shadow-lg p-0 lg:p-6 w-full max-w-4xl mx-4 relative overflow-auto max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-0 right-2 text-emerald-500 hover:text-red-700 text-3xl font-bold"
                    onClick={onClose}
                    aria-label="Close Modal"
                >
                    &times;
                </button>

                {children}
            </div>
        </div>,
        document.body
    );
};

export default ProjectModal;
