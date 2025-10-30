// app/components/NavBar.js
"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <Link href="/">Inicio</Link>

        <Link href="/tienda">Tienda</Link>
        <Link href="/blog">Blog</Link>
      </div>

      <div className="navbar-right">
        <Link href="/acercade">Acerca de...</Link>
        <Link href="/registrarme">Registrarme</Link>
      </div>
    </nav>
  );
}
