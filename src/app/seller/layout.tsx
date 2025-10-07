'use client'
import Link from "next/link";
import '@/app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-6 py-5">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-6">

        <aside className="w-full md:w-64 md:px-6 py-5">
          <ul className="list-none flex flex-col gap-4 font-sans text-[0.94rem] text-white/50">
            <li className="md:p-2 rounded cursor-pointer w-full text-left">
              <Link href="">My Products</Link>
            </li>
            <li className="md:p-2 rounded cursor-pointer w-full text-left">
              <Link href="add">Add New Product</Link>
            </li>
            <li className="md:p-2 rounded cursor-pointer w-full text-left">
              <Link href="signout">Sign Out</Link>
            </li>
          </ul>
        </aside>

        <main className="flex-1 py-5">
          {children}
        </main>

      </div>
    </div>
  );
}
