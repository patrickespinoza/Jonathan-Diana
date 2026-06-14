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

      {/* Imagen */}
      <div className="relative w-full max-w-2xl">

        <img
          src={images[index]}
          alt={`Imagen ${index + 1}`}
          className="
            w-full
            h-[500px]
            object-cover
            rounded-[2rem]
            shadow-lg
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
            bg-white/80
            backdrop-blur-sm
            text-[#C14E29]
            shadow-lg
            hover:scale-110
            transition
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
            bg-white/80
            backdrop-blur-sm
            text-[#C14E29]
            shadow-lg
            hover:scale-110
            transition
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
                  ? "w-8 h-3 bg-[#C14E29]"
                  : "w-3 h-3 bg-[#B8C0A0]"
              }
            `}
          />
        ))}

      </div>

      {/* Contador */}
      <p className="mt-6 text-[#7B7A42] text-sm tracking-widest uppercase">
        {index + 1} / {images.length}
      </p>

    </div>
  );
};

export default Carousel;