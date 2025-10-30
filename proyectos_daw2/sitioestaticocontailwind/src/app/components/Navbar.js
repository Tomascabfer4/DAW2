'use client'; // <-- 1. AÑADIDO: Necesario para usar hooks

import { useCart } from '../../context/CartContext'; // <-- 2. AÑADIDO: Importa el hook del carrito (ajusta la ruta si es necesario)
import Link from 'next/link'; // <-- AÑADIDO: Para hacer el logo y el carrito clicables

export default function Navbar({ onMenuClick }) {
  
  // 3. AÑADIDO: Obtiene el estado del carrito y calcula el total
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar bg-transparent text-black sticky top-0 z-20 px-6">
      <div className="navbar-start">
        <button
          onClick={onMenuClick}
          className="btn btn-ghost btn-circle 
                     hover:bg-transparent 
                     focus:bg-transparent 
                     focus:outline-none 
                     hover:border-transparent 
                     focus:ring-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      </div>

      {/* CENTRO: Logo (envuelto en Link) */}
      <div className="navbar-center">
        <Link href="/" className="font-serif text-3xl font-bold tracking-wide">
          STRESSEN
        </Link>
      </div>

      {/* DERECHA: Buscar / usuario / carrito */}
      <div className="navbar-end gap-4">
        <div className="items-center border-b pb-1 text-black text-sm">
          <input
            type="text"
            placeholder="Buscar"
            className="outline-none bg-transparent text-sm"
          />
        </div>
        
        {/* Botón de Usuario (sin cambios) */}
        <button
          className="btn btn-ghost btn-circle 
                     hover:bg-transparent 
                     focus:bg-transparent 
                     focus:outline-none 
                     hover:border-transparent 
                     focus:ring-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 7.5v.75m0 4.5v.75m-3.75-3.75h.75m4.5 0h.75M12 6.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5z"
            />
          </svg>
        </button>
        
        {/* 4. AÑADIDO: Botón de Carrito con Indicador (envuelto en Link) */}
        <Link
          href="/carrito" // <-- Enlaza a la futura página del carrito
          className="btn btn-ghost btn-circle 
                     hover:bg-transparent 
                     focus:bg-transparent 
                     focus:outline-none 
                     hover:border-transparent 
                     focus:ring-0"
        >
          <div className="indicator"> {/* Contenedor del indicador de daisyUI */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5c2.485 0 4.5 2.015 4.5 4.5v.75H7.5V9c0-2.485 2.015-4.5 4.5-4.5zM4.5 9h15v10.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V9z"
              />
            </svg>
            
            {/* Muestra la burbuja solo si hay artículos */}
            {totalItems > 0 && (
              <span className="badge badge-sm badge-primary indicator-item">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
}