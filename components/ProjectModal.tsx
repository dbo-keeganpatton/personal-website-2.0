'use client'
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [mounted, setMounted] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        previousFocusRef.current = document.activeElement as HTMLElement;
        document.body.style.overflow = 'hidden';

        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
        focusable?.[0]?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { onClose(); return; }
            if (e.key !== 'Tab') return;

            const els = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);
            if (els.length === 0) return;
            const first = els[0];
            const last = els[els.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            previousFocusRef.current?.focus();
        };
    }, [isOpen, onClose]);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/30 backdrop-blur-xs duration-200"
            onClick={onClose}
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Project details"
                tabIndex={-1}
                className="bg-black/85 rounded-lg shadow-emerald-800 shadow-lg p-0 lg:p-6 w-full max-w-4xl mx-4 relative overflow-auto max-h-[85vh] focus:outline-none"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-0 right-2 text-emerald-500 hover:text-red-700 text-3xl font-bold"
                    onClick={onClose}
                    aria-label="Close project details"
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
