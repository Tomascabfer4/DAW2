// app/tienda/layout.js
import Link from 'next/link';
import DynamicBreadcrumb from '../components/DynamicBreadcrumb';

export const metadata = {
  title: 'Tienda - Mi App',
}

export default function TiendaLayout({ children }) {
  return (
    <section>
       <DynamicBreadcrumb />

      <div className="tienda-layout-grid">
        
        {/* Barra lateral con el menú de categorías */}
        <nav className="tienda-sidebar">
          <ul>
            <li><Link href="/tienda/electronica">Electrónica</Link></li>
            <li><Link href="/tienda/decoracion">Decoración</Link></li>
            <li><Link href="/tienda/mobiliario">Mobiliario</Link></li>
            <li><Link href="/tienda/libros">Libros</Link></li>
          </ul>
        </nav>
        
        {/* Contenido de la ruta actual (ej. /tienda/electronica) */}
        <main className="tienda-content">
          {children}
        </main>
        
      </div>
    </section>
  )
}