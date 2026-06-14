import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/Carrusel01.JPG",
    "/Carrusel02.JPG",
    "/Carrusel03.JPG",
    "/Carrusel04.JPG",
    "/Carrusel05.JPG",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center">

      {/* Contenedor fijo */}
      <div
        className="
          relative
          w-full
          max-w-3xl
          h-[520px]
          md:h-[650px]
          rounded-[2rem]
          overflow-hidden
          bg-[#F8F5F0]
          shadow-xl
        "
      >

        <img
          src={images[index]}
          alt={`Imagen ${index + 1}`}
          className="
            w-full
            h-full
            object-contain
            transition-all
            duration-700
          "
        />

        {/* Flecha izquierda */}
        <button
          onClick={prevImage}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            w-12
            h-12
            rounded-full
            bg-white/90
            backdrop-blur-md
            text-[#B7410E]
            shadow-lg
            hover:scale-110
            transition-all
          "
        >
          ‹
        </button>

        {/* Flecha derecha */}
        <button
          onClick={nextImage}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            w-12
            h-12
            rounded-full
            bg-white/90
            backdrop-blur-md
            text-[#B7410E]
            shadow-lg
            hover:scale-110
            transition-all
          "
        >
          ›
        </button>

      </div>

      {/* Indicadores */}
      <div className="flex gap-3 mt-8">

        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              rounded-full
              transition-all
              duration-300
              ${
                index === i
                  ? "w-8 h-3 bg-[#B7410E]"
                  : "w-3 h-3 bg-[#636B2F]"
              }
            `}
          />
        ))}

      </div>

      {/* Contador */}
      <p
        className="
          mt-6
          text-[#636B2F]
          text-sm
          tracking-widest
          uppercase
        "
      >
        {index + 1} / {images.length}
      </p>

    </div>
  );
};

export default Carousel;