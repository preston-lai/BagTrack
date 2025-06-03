import Link from "next/link";

type NavbarProps = {
  showFeaturesLink?: boolean;
}

export default function Navbar({ showFeaturesLink = true }: NavbarProps) {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b">
      <Link href="/">
        <div className="font-bold text-xl tracking-tight">BagTrack</div>
      </Link>
      <div className="flex gap-6 text-base">
        {showFeaturesLink && (
          <a href="#features" className="hover:text-primary transition">Features</a>
        )}
        <Link href="/login" className="text-white font-bold hover:text-white/80 transition">
          Login
        </Link>
      </div>
    </nav>
  )
} 