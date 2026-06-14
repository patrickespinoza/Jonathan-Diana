import React from "react";

const CardUbicacion = ({
  titulo,
  fecha,
  hora,
  lugar,
  direccion,
  link,
  icono,
}) => {
  return (
    <div
      className="
        bg-white/80
        backdrop-blur-sm
        rounded-[2rem]
        shadow-lg
        border border-[#636B2F]/30
        max-w-md
        w-full
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="p-8">
        {/* Icono */}
        {icono && (
          <div className="text-5xl mb-4">
            {icono}
          </div>
        )}

        {/* Título */}
        <h1
          className="
            text-2xl
            sm:text-3xl
            font-bold
            font-playfair
            text-[#B7410E]
          "
        >
          {titulo}
        </h1>

        {/* Línea */}
        <div className="w-16 h-[2px] bg-[#636B2F] mx-auto my-5"></div>

        {/* Fecha y Hora */}
        <div
          className="
            text-lg
            text-[#636B2F]
            font-cursiveDancing
            space-y-1
          "
        >
          <p className="text-xl">{fecha}</p>
          <p className="text-xl">{hora}</p>
        </div>

        {/* Ubicación */}
        <div className="mt-6 pt-6 border-t border-[#636B2F]/30">
          <p
            className="
              uppercase
              tracking-[0.2em]
              text-xs
              text-[#B7410E]
              mb-3
            "
          >
            Ubicación
          </p>

          <p
            className="
              font-semibold
              text-lg
              text-[#636B2F]
            "
          >
            📍 {lugar}
          </p>

          <p
            className="
              text-sm
              text-[#636B2F]/80
              mt-2
            "
          >
            {direccion}
          </p>
        </div>

        {/* Botón */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-8
            bg-[#B7410E]
            hover:bg-[#9A3609]
            text-white
            px-8
            py-3
            rounded-full
            shadow-md
            transition-all
            duration-300
          "
        >
          Ver ubicación
        </a>
      </div>
    </div>
  );
};

const Celebracion = () => {
  return (
    <section className="relative bg-[#E3DBD1] py-20 px-6 overflow-hidden">

      {/* Flor superior izquierda */}
      <img
        src="/flores-esquina.png"
        alt=""
        className="
          absolute
          top-0
          left-0
          w-40
          sm:w-52
          md:w-64
          lg:w-80
          -translate-x-1
          sm:-translate-x-10
          -translate-y-14
          sm:-translate-y-14
          md:-translate-y-20
          rotate-180
          pointer-events-none
          z-0
        "
      />

      {/* Flor inferior derecha */}
      <img
        src="/flores-esquina.png"
        alt=""
        className="
          absolute
          bottom-0
          right-0
          w-40
          sm:w-52
          md:w-64
          lg:w-80
          translate-x-1
          sm:translate-x-10
          translate-y-16
          sm:translate-y-14
          md:translate-y-20
          pointer-events-none
          z-0
        "
      />

      {/* Título */}
      <div className="relative z-10 text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-[#B7410E] text-sm">
          Ceremonia & Recepción
        </p>

        <h2 className="font-playfair text-4xl text-[#636B2F] mt-4">
          Acompáñanos
        </h2>

        <div className="w-24 h-[2px] bg-[#B7410E] mx-auto mt-6"></div>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <CardUbicacion
          icono="⛪"
          titulo="Ceremonia Religiosa"
          fecha="25 de julio 2026"
          hora="3:00 PM"
          lugar="Santuario de la Virgen de la Candelaria"
          direccion="Centro, 95460 Tlacotalpan, Ver."
          link="https://maps.app.goo.gl/Y335e5H1AkqZtHLE7"
        />

        <CardUbicacion
          icono="🎉"
          titulo="Recepción"
          fecha="25 de julio 2026"
          hora="5:00 PM"
          lugar="Finca Holística Tlacotalpan"
          direccion="Alvarado - Cosamaloapan, 95469 Ver."
          link="https://maps.app.goo.gl/rJAKcuQq5QtjsYdr7"
        />

      </div>

    </section>
  );
};

export default Celebracion;