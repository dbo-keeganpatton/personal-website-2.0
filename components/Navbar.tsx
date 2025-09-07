import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-6 flex justify-between items-center border-b">
      <h1 className="text-xl font-bold">Keegan Patton</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
