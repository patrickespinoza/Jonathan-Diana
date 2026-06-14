const ImagenFinal = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-16 bg-black overflow-hidden">
      {/* Fondo con blur */}
      <img
        src="/Fotofinal.JPG"
        alt="Fondo boda"
        className="absolute w-full h-full object-cover opacity-30 blur-sm scale-110"
      />

      {/* Contenido */}
      <div className="relative flex flex-col items-center">
        <img
          src="/Fotofinal.JPG"
          alt="Boda"
          className="w-72 sm:w-96 rounded-2xl shadow-2xl border border-white/20"
        />

        <div className="w-24 h-[2px] bg-[#9E8E7B] mt-6"></div>

        <p className="text-white mt-4 text-lg font-cursiveDancing opacity-90">
          ¡Te esperamos!
        </p>
      </div>
    </div>
  );
};

export default ImagenFinal;