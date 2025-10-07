'use client'

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const handleLogout = async () => {
  //   try {
  //     await fetch("/api/auth/logout", { method: "POST" });
  //     window.location.href = "/";
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // }

  return (
    <>
      <header className="w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-base font-sans ">
          <Link
            href="/"
            className="bg-clip-text text-base font-bold animate-gradient-x text-white"
          >
            Hancrafted Haven
          </Link>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex gap-10 font-sans text-[0.94rem] text-white/50">
            <li><Link href="/marketplace">Marketplace</Link></li>
            <li><Link href="/seller">Seller</Link></li>
          </ul>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </header>

      <div className={`lg:hidden w-full overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <nav className="shadow-md border-t border-gray-300 bg-black/90">
          <ul className="flex flex-col items-start gap-4 text-white/50 pl-6 py-4 font-sans text-[0.94rem]">
            <li><Link href="/marketplace" onClick={() => setIsOpen(false)}>Marketplace</Link></li>
            <li><Link href="/seller" onClick={() => setIsOpen(false)}>Seller</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}
