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
        p-8
        max-w-md
        w-full
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Icono */}
      <div className="text-5xl mb-4">
        {icono}
      </div>

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

      {/* Fecha y hora */}
      <div
        className="
          text-lg
          text-[#636B2F]
          font-cursiveDancing
          space-y-1
        "
      >
        <p className="text-xl">{fecha}</p>
        <p className="text-xl"> {hora}</p>
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
          hover:bg-[#B7410E]
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
  );
};

const Celebracion = () => {
  return (
    <section className="bg-[#E3DBD1] py-20 px-6">

      {/* Título */}
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-[#B7410E] text-sm">
          Ceremonia & Recepción
        </p>

        <h2 className="font-playfair text-4xl text-[#636B2F] mt-4">
          Acompáñanos
        </h2>

        <div className="w-24 h-[2px] bg-[#B7410E] mx-auto mt-6"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        <CardUbicacion
          icono="⛪"
          titulo="Ceremonia Religiosa"
          fecha="25 de julio 2026"
          hora="3:00 PM"
          lugar="Santuario de la virgen de la Candelaria"
          direccion="Centro, 95460 Tlacotalpan, Ver."
          link="https://maps.app.goo.gl/Y335e5H1AkqZtHLE7"
        />

        <CardUbicacion
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