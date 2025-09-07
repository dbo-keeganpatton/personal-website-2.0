'use client'
import { useEffect, useRef } from "react"


export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null)

    
    useEffect( () => {
        const handleMouseMove = (e: MouseEvent) => {
            if (glowRef.current) {
                glowRef.current.style.left = `${e.clientX}px`
                glowRef.current.style.top = `${e.clientY}px`
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    },[])

    
    
    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed z-50 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 opacity-10 blur-3xl"
        />
    )
}
