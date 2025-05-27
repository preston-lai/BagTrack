import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b">
      <Link href="/">
        <div className="font-bold text-xl tracking-tight">BagTrack</div>
      </Link>
      <div className="flex gap-6 text-base">
        <a href="#features" className="hover:text-primary transition">Features</a>
        <a href="#login" className="hover:text-primary transition">Login</a>
      </div>
    </nav>
  )
} 