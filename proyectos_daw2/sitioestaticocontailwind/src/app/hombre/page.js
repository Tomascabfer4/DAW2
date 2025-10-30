// app/hombre/page.js
import ProductCard from "../components/ProductCard";

export default function HombrePage() {
  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Producto 1 */}
        <ProductCard
          title="Polo Retro Long Size"
          price="29,99 €"
          image1="/poloRayasCalle.png"
          image2="/poloRayas.png"
          slug="polo-retro-long-size"
        />

        {/* Producto 2 */}
        <ProductCard
          title="Camisa Beige Stressen"
          price="19,99 €"
          image1="/camisaGuapaPie.png"
          image2="/camisaGuapaSentado.png"
          slug="camisa-beige-stressen"
        />

        {/* Producto 3 */}
        <ProductCard
          title="Camiseta Azul Retro"
          price="14,99 €"
          image1="/camisetaAzul.png"
          image2="/camisetaAzulDetras.png"
          slug="camiseta-azul-retro"
        />

        {/* Producto 4 */}
        <ProductCard
          title="Special Edition Rambla"
          price="59,99 €"
          image1="/camisetaRamblaNegro.png"
          image2="/camisetaRamblaBlanco.png"
          slug="special-edition-rambla"
        />
      </div>
    </div>
  );
}
