"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { useRef, useCallback } from "react";

export default function GlobalDrawer({ children }) {
  //Para
  const checkboxRef = useRef(null);
  const toggleDrawer = useCallback(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  }, []);

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
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/mujer">Mujer</Link>
          </li>
          <li>
            <Link href="/hombre">Hombre</Link>
          </li>
          <li>
            <Link href="/novedades">Novedades</Link>
          </li>
          <li>
            <Link href="/rebajas">Rebajas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
