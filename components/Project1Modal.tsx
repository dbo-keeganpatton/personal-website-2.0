import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Prohect1Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs  duration-200"
            onClick={onClose}
        >
            <div 
                className="bg-black/90 rounded-xl shadow-lg p-6 w-full max-w-7xl relative border-4 border-emerald-800"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className="absolute top-0 right-2 text-gray-500 hover:text-red-700 text-3xl font-bold"
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

export default Prohect1Modal;

