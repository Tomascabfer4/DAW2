'use client'; 

import { usePathname } from 'next/navigation';

export default function DynamicBreadcrumb() {
  // Obtiene la ruta actual (ej., '/tienda', '/tienda/libros')
  const pathname = usePathname();
  
  // Divide la ruta en segmentos y filtra los vacíos
  const segments = pathname.split('/').filter(segment => segment);
  
  const baseTitle = 'Tienda'; 
  let dynamicTitle = baseTitle;

  // Si hay más de un segmento (estamos en una subcategoría)
  if (segments.length > 1) {
    const subCategory = segments[1];
    
    // Capitaliza la subcategoría
    const formattedSubCategory = subCategory.charAt(0).toUpperCase() + subCategory.slice(1);

    // Genera el breadcrumb completo: "Tienda / Libros"
    dynamicTitle = `${baseTitle} / ${formattedSubCategory}`;
  } 

  // Devuelve SOLO el encabezado final.
  return (
    <h1>{dynamicTitle}</h1>
  );
}
