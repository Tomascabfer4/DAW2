// app/layout.js
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Mi App NextJS - App Router",
  description: "Ejemplo de estructura App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
