import Link from "next/link"


function TiendaLayout({ children }) {
    return (
        <div className="flex min-h-[500px]">
            <nav className="text-xl bg-green-800 text-white p-4 flex gap-16 flex-col">
                <Link href="/tienda/electronica">ELECTRÓNICA</Link>
                <Link href="/tienda/mobiliario">MOBILIARIO</Link>
                <Link href="/tienda/decoracion">DECORACIÓN</Link>
                <Link href="/tienda/libros">LIBROS</Link>
            </nav>
            <div className="grow">
                {children}
            </div>
        </div>
    )
}

export default TiendaLayout