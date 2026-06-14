const Decoracion = () => {
  return (
    <section className="relative bg-[#E3DBD1] py-24 px-6 overflow-hidden">
     {/* Flores esquina superior izquierda */}
          <img
            src="/flores-esquina.png"
            alt="Flores decorativas"
            className="
              absolute
              top-0
              left-0
              w-80
              z-0
              -translate-x-3
              -translate-y-20
              rotate-180
              pointer-events-none
            "
          />
      {/* Decoraciones de fondo */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#B8C0A0]/20 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#B7410E]/15 blur-3xl"></div>

      {/* Contenido */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Línea superior */}
        <div className="w-32 h-[2px] bg-[#B7410E] mb-12"></div>

        {/* Frase */}
        <blockquote className="max-w-4xl">
          <p
            className="
              font-cursiveDancing
              text-[#636B2F]
              text-3xl
              sm:text-4xl
              md:text-5xl
              leading-relaxed
              md:leading-[1.5]
              tracking-wide
              drop-shadow-sm
            "
          >
            “Entre el sonido del río y la alegría de nuestros corazones,
            hemos decidido unir nuestras vidas. Queremos compartir este
            momento único con nuestra familia y amigos más cercanos,
            quienes han sido parte de nuestra historia de amor.”
          </p>
        </blockquote>

        {/* Separador elegante */}
        <div className="flex items-center gap-5 mt-12">
          <div className="w-20 h-[1px] bg-[#B8C0A0]"></div>

          <div className="text-[#B7410E] text-2xl">
            ❤
          </div>

          <div className="w-20 h-[1px] bg-[#B8C0A0]"></div>
        </div>

        {/* Firma */}
        <p
          className="
            mt-8
            text-[#B7410E]
            uppercase
            tracking-[0.35em]
            text-sm
            font-semibold
          "
        >
          NUESTRA HISTORIA COMIENZA
        </p>


      </div>
        {/* Flores esquina inferior derecha */}
          <img
            src="/flores-esquina.png"
            alt="Flores decorativas"
            className="
              absolute
              bottom-0
              right-0
              w-80
              z-0
              translate-x-2
              translate-y-20
              pointer-events-none
            "
          />
    </section>
  );
};

export default Decoracion;