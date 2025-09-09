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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs"
            onClick={onClose}
        >
            <div 
                className="bg-[#4c4f69] rounded-md shadow-lg p-6 w-full max-w-md mx-4 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className="absolute top-0 right-1 text-gray-500 hover:text-gray-800 text-3xl font-bold"
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

