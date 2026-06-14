import React from "react";

const Detalles = () => {
  return (
    <section className="relative bg-[#E3DBD1] py-24 px-6 overflow-hidden">


      {/* ESQUINA SUPERIOR IZQUIERDA */}
      <img
        src="/flores-esquina.png"
        alt=""
        className="
          absolute
          top-0
          left-0
          w-40
          sm:w-48
          md:w-60
          lg:w-80
          -translate-x-1
          -translate-y-14
          pointer-events-none
          z-0
          rotate-180
        "
      />

      {/* ESQUINA SUPERIOR DERECHA */}
      <img
        src="/flores-esquina.png"
        alt=""
        className="
          absolute
          top-0
          right-0
          w-40
          sm:w-48
          md:w-60
          lg:w-80
          translate-x-1
          -translate-y-14
          scale-x-[-1]
          pointer-events-none
          z-0
          rotate-180
        "
      />

      {/* ESQUINA INFERIOR IZQUIERDA */}
      <img
        src="/flores-esquina.png"
        alt=""
        className="
          absolute
          bottom-0
          left-0
          w-40
          sm:w-48
          md:w-60
          lg:w-80
          -translate-x-1
          translate-y-16
          scale-y-[-1]
          pointer-events-none
          z-0
          rotate-180
        "
      />

      {/* ESQUINA INFERIOR DERECHA */}
      <img
        src="/flores-esquina.png"
        alt=""
        className="
          absolute
          bottom-0
          right-0
          w-40
          sm:w-48
          md:w-60
          lg:w-80
          translate-x-1
          translate-y-16
          pointer-events-none
          z-0
        "
      />

      {/* CONTENEDOR PRINCIPAL */}
      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          bg-white/70
          backdrop-blur-sm
          border border-[#B8C0A0]/30
          rounded-[3rem]
          shadow-xl
          p-8 md:p-14
        "
      >
        {/* Encabezado */}
        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-[#B7410E] text-xs">
            Información Importante
          </p>

          <h1
            className="
              font-cursiveDancing
              text-[#636B2F]
              text-4xl
              sm:text-5xl
              mt-4
            "
          >
            Código de Vestimenta
          </h1>

          <div className="w-24 h-[2px] bg-[#B7410E] mx-auto mt-6"></div>

          <h2
            className="
              mt-6
              text-2xl
              md:text-3xl
              font-playfair
              text-[#636B2F]
            "
          >
            Semi Formal
          </h2>

        </div>

        {/* Contenido */}
        <div className="grid md:grid-cols-3 gap-10 items-center mt-14">

          {/* Mujer */}
          <div className="text-center">
            <img
              src="/Dresscode01.JPG"
              alt="Vestimenta Mujer"
              className="
                w-full
                max-w-xs
                mx-auto
                rounded-3xl
                shadow-lg
              "
            />
          </div>

          {/* Centro */}
          <div className="text-center">

            <p
              className="
                text-[#636B2F]
                leading-relaxed
                text-lg
              "
            >
              Queremos que todos disfruten de una celebración elegante y armoniosa.
              Te invitamos a vestir en estilo <strong>Semi Formal</strong> y,
              si lo deseas, inspirarte en la siguiente paleta de colores.
            </p>

            {/* Paleta */}
            <div className="flex justify-center flex-wrap gap-3 mt-10">

              <div className="w-10 h-10 rounded-full bg-[#636B2F]"></div>

              <div className="w-10 h-10 rounded-full bg-[#B8C0A0]"></div>

              <div className="w-10 h-10 rounded-full bg-[#E3DBD1] border"></div>

              <div className="w-10 h-10 rounded-full bg-[#B7410E]"></div>

            </div>

            {/* Brindis */}
            <div className="mt-12">

              <p className="text-4xl">
                🥂
              </p>

              <p className="mt-2 text-[#636B2F]">
                Gracias por ayudarnos a crear una velada especial.
              </p>

            </div>

          </div>

          {/* Hombre */}
          <div className="text-center">
            <img
              src="/Dresscode02.JPG"
              alt="Vestimenta Hombre"
              className="
                w-full
                max-w-xs
                mx-auto
                rounded-3xl
                shadow-lg
              "
            />
          </div>

        </div>
      </div>

      

    </section>
  );
};

export default Detalles;