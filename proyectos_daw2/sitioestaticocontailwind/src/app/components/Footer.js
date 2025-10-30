export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-12">
      <div>
        <p>© {new Date().getFullYear()} Tomás — Sitio estático con NextJS y Tailwind</p>
      </div>
    </footer>
  );
}
