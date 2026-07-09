'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/send-email'
import Modal from './EmailModal'

type FormData = { email: string; subject: string; message: string }

const SECTION_NAV = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects',   label: 'Projects'   },
]

type SendStatus =
    | { state: 'idle' }
    | { state: 'sending' }
    | { state: 'sent'; message: string }
    | { state: 'error'; message: string }

export default function Sidebar() {
    const [active, setActive]       = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [status, setStatus]       = useState<SendStatus>({ state: 'idle' })
    const { register, handleSubmit, reset } = useForm<FormData>()

    async function onSubmit(data: FormData) {
        setStatus({ state: 'sending' })
        const result = await sendEmail(data)
        if (result.ok) {
            reset()
            setStatus({ state: 'sent', message: result.message })
        } else {
            setStatus({ state: 'error', message: result.message })
        }
    }

    function closeModal() {
        setModalOpen(false)
        setStatus({ state: 'idle' })
    }

    useEffect(() => {
        const targets = SECTION_NAV.map(n => document.getElementById(n.href.slice(1))).filter(Boolean) as HTMLElement[]
        const obs = new IntersectionObserver(
            entries => {
                const hit = entries.find(e => e.isIntersecting)
                if (hit) setActive(hit.target.id)
            },
            { threshold: 0.25, rootMargin: '-64px 0px -40% 0px' }
        )
        targets.forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <aside className="flex flex-col h-full px-8 py-10 lg:py-12 lg:px-10">

            {/* ── Identity ────────────────────────────────── */}
            <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-3 name-glow">
                    Keegan<br className="hidden lg:block" />{' '}
                    <span className="lg:hidden"> </span>Patton
                </h1>
                <p className="text-emerald-400 text-sm font-mono flex items-center gap-2">
                    <span aria-hidden="true">❯</span>
                    Hello There... 
                    <span
                        className="inline-block w-[9px] h-[1.1em] bg-emerald-400 cursor-blink translate-y-[1px]"
                        aria-hidden="true"
                    />
                </p>
            </div>

            {/* ── Bio ─────────────────────────────────────── */}
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                By day I build data infrastructure at Walmart. In my spare time I tinker with various
                forms of technology, skateboard with my friends, work on cars, and really anything else
                that interests me at the time. Always happy to meet and talk to new people. Reach out
                anytime.
            </p>

            {/* ── Section nav ─────────────────────────────── */}
            <nav aria-label="Page sections" className="mb-auto">
                <ul className="space-y-5">
                    {SECTION_NAV.map(({ href, label }) => {
                        const id = href.slice(1)
                        const on = active === id
                        return (
                            <li key={href}>
                                <a
                                    href={href}
                                    className={`group flex items-center gap-4 text-[11px] font-mono tracking-[0.15em] uppercase transition-colors duration-200 ${
                                        on ? 'text-white' : 'text-slate-600 hover:text-slate-300'
                                    }`}
                                >
                                    <span
                                        className={`block h-px transition-all duration-300 ${
                                            on
                                                ? 'w-10 bg-white'
                                                : 'w-5 bg-slate-700 group-hover:w-7 group-hover:bg-slate-500'
                                        }`}
                                        aria-hidden="true"
                                    />
                                    {label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* ── Socials + contact ───────────────────────── */}
            <div className="mt-10 lg:mt-0 space-y-4">
                <button
                    onClick={() => setModalOpen(true)}
                    aria-label="Open contact form"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-emerald-800 text-emerald-400 text-sm hover:bg-emerald-950 hover:border-emerald-600 transition-colors duration-200"
                >
                    <Image src="/mail-svgrepo-com.svg" alt="" width={18} height={18} unoptimized />
                    Get in touch
                </button>

                <div className="flex items-center gap-4">
                    <Link
                        href="/blog"
                        aria-label="Blog"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded border border-slate-600 text-slate-300 text-xs hover:border-slate-400 hover:text-white transition-colors duration-200"
                    >
                        Blog
                    </Link>
                    <Link
                        href="https://github.com/dbo-keeganpatton"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Keegan Patton on GitHub"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded border border-slate-600 text-slate-300 text-xs hover:border-slate-400 hover:text-white transition-colors duration-200"
                    >
                        <Image src="/github-svgrepo-com.svg" alt="" width={16} height={16} unoptimized />
                        GitHub
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/keeganpatton/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Keegan Patton on LinkedIn"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded border border-slate-600 text-slate-300 text-xs hover:border-slate-400 hover:text-white transition-colors duration-200"
                    >
                        <Image src="/linkedin-svgrepo-com.svg" alt="" width={16} height={16} unoptimized />
                        LinkedIn
                    </Link>
                </div>
            </div>

            {/* ── Email modal ─────────────────────────────── */}
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <h2 className="text-base font-semibold text-white mb-5">
                    Leave a message after the beep
                </h2>

                {status.state === 'sent' ? (
                    <div className="space-y-4">
                        <p className="text-emerald-400 text-sm" role="status">
                            {status.message}
                        </p>
                        <button
                            onClick={closeModal}
                            className="w-full bg-emerald-950 border border-emerald-800 text-emerald-400 py-2.5 rounded text-sm hover:bg-emerald-900 hover:border-emerald-700 transition-colors duration-200"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full bg-black/60 border border-white/10 text-white placeholder-slate-700 p-2.5 rounded text-sm focus:outline-none focus:border-emerald-700 transition-colors"
                        {...register('email', { required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full bg-black/60 border border-white/10 text-white placeholder-slate-700 p-2.5 rounded text-sm focus:outline-none focus:border-emerald-700 transition-colors"
                        {...register('subject', { required: true })}
                    />
                    <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full bg-black/60 border border-white/10 text-white placeholder-slate-700 p-2.5 rounded text-sm focus:outline-none focus:border-emerald-700 transition-colors resize-none"
                        {...register('message', { required: true })}
                    />
                    {status.state === 'error' && (
                        <p className="text-red-400 text-xs" role="alert">
                            {status.message}
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={status.state === 'sending'}
                        className="w-full bg-emerald-950 border border-emerald-800 text-emerald-400 py-2.5 rounded text-sm hover:bg-emerald-900 hover:border-emerald-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status.state === 'sending' ? 'Sending…' : 'Send message'}
                    </button>
                </form>
                )}
            </Modal>

        </aside>
    )
}
