import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-border bg-background/80 backdrop-blur">
      <div className="font-bold text-xl tracking-tight">BagTrack</div>
      <div className="flex gap-6 text-base">
        <Link to="/" className="hover:text-primary transition">Home</Link>
        <Link to="/tracker" className="hover:text-primary transition">Tracker</Link>
        <a href="#about" className="hover:text-primary transition">About</a>
        <a href="#login" className="hover:text-primary transition">Login</a>
      </div>
    </nav>
  )
} 