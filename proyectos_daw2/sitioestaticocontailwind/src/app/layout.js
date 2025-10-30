import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalDrawer from "./components/GlobalDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mi Proyecto Personal - Next.js + Tailwind + daisyUI",
  description: "Proyecto para la asignatura - ejemplo con daisyUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GlobalDrawer>
          {children}
        </GlobalDrawer>
      </body>
    </html>
  );
}