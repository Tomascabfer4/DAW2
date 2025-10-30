// components/ScrollAnimation.js
'use client'; 

import { useEffect, useRef } from 'react';

// Cantidad total de frames de tu animación
const MAX_FRAMES = 200;

export default function ScrollAnimation() {
  const imgRef = useRef(null);
  const mainRef = useRef(null);

  // Funciones de control de la animación
  const updateImage = (frame = 0) => {
    if (!imgRef.current) return;
    const id = (frame + 1).toString().padStart(4, "0");
    const src = `/FRAMESTERCERAESCENA/frame_${id}.webp`;
    imgRef.current.style.backgroundImage = `url('${src}')`;
  };

  const preloadImages = () => {
    for (let i = 0; i < MAX_FRAMES; i++) {
      const id = (i + 1).toString().padStart(4, "0");
      const src = `/FRAMESTERCERAESCENA/frame_${id}.webp`;
      const image = new Image();
      image.src = src;
    }
  };

  // 1. Efecto de inicialización y scroll
  useEffect(() => {
    preloadImages();
    updateImage(0); // Muestra el primer frame al cargar
    
    // Calcula la altura máxima de scroll (necesario para el scrub)
    let maxScroll = 0;
    const calculateMaxScroll = () => {
      // Usamos el mainRef para obtener la altura de nuestro contenedor simulado de scroll
      // Nota: current.scrollHeight puede ser 0 al inicio, pero window.innerHeight es seguro.
      // Aquí estamos forzando la altura del scroll, por eso usamos mainRef.
      if (mainRef.current) {
        maxScroll = mainRef.current.scrollHeight - window.innerHeight;
      }
    };

    calculateMaxScroll();
    window.addEventListener("resize", calculateMaxScroll);

    let currentFrame = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const scrollFraction = scrollPosition / maxScroll;
          // Limita el frame entre 0 y MAX_FRAMES - 1
          const frame = Math.floor(scrollFraction * MAX_FRAMES); 

          if (currentFrame !== frame && frame >= 0 && frame < MAX_FRAMES) {
            updateImage(frame);
            currentFrame = frame;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    // Limpieza de event listeners al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateMaxScroll);
    };
  }, []);

  // 2. Renderizado del contenido
  return (
    <>
      {/* El main con la referencia y la altura que simula el scroll (300vh) */}
      <main ref={mainRef} style={{ height: '300dvh' }}> 
        
        {/*
          *** LÍNEAS ELIMINADAS ***
          Aquí estaba la cabecera animada (<header className="animation-header">...)
          Ahora tu Navbar global (definido en GlobalDrawer) maneja el logo y el menú.
        */}
        
        {/* El div donde se cargan las imágenes (la animación) */}
        <div id="img-scroll-container" ref={imgRef}></div>
        
      </main>
    </>
  );
}