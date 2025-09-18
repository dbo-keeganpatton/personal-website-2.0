import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/30 backdrop-blur-xs  duration-200"
            onClick={onClose}
        >
            <div 
                className="bg-black/90 rounded-lg shadow-emerald-800 shadow-lg p-6 w-full max-w-md mx-4 relative"
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
        </div>
    );
};

export default Modal;

