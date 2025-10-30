"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { useRef, useCallback } from "react";

export default function GlobalDrawer({ children }) {

  const checkboxRef = useRef(null);

  const toggleDrawer = useCallback(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  }, []);

  const closeDrawer = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false; // Forzar cierre
    }
  };

  return (
    <div className="drawer">
      <input
        id="main-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={checkboxRef}
      />

      <div className="drawer-content flex flex-col min-h-screen bg-white text-black">
        {/* Llamamos a la barra de navegación */}
        <Navbar onMenuClick={toggleDrawer} />

        {/* Contenido principal (página) */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Menu lateral */}
      <div className="drawer-side z-50 h-screen">
        <label htmlFor="main-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-90 min-h-full bg-base-200 text-xl ">
          <li>
            <Link href="/" onClick={closeDrawer}>Inicio</Link>
          </li>
          <li>
            <Link href="/hombre" onClick={closeDrawer}>Hombre</Link>
          </li>
          <li>
            <Link href="/mujer" onClick={closeDrawer}>Mujer</Link>
          </li>
          <li>
            <Link href="/perfumes" onClick={closeDrawer}>Perfumes</Link>
          </li>
          <li>
            <Link href="/novedades" onClick={closeDrawer}>Novedades</Link>
          </li>
          <li>
            <Link href="/rebajas" onClick={closeDrawer}>Rebajas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
