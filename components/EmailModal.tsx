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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
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

