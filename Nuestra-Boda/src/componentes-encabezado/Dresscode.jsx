const Detalles = () => {
  return (
    <section className="bg-[#E3DBD1] py-24 px-6">

      <div
        className="
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

          <p className="uppercase tracking-[0.35em] text-[#C14E29] text-xs">
            Información Importante
          </p>

          <h1
            className="
              font-cursiveDancing
              text-[#7B7A42]
              text-4xl
              sm:text-5xl
              mt-4
            "
          >
            Código de Vestimenta
          </h1>

          <div className="w-24 h-[2px] bg-[#C14E29] mx-auto mt-6"></div>

          <h2
            className="
              mt-6
              text-2xl
              md:text-3xl
              font-playfair
              text-[#7B7A42]
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
              className="w-full max-w-xs mx-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Centro */}
          <div className="text-center">

            <p
              className="
                text-[#7B7A42]
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

              <div className="w-10 h-10 rounded-full bg-[#7B7A42]"></div>

              <div className="w-10 h-10 rounded-full bg-[#B8C0A0]"></div>

              <div className="w-10 h-10 rounded-full bg-[#E3DBD1] border"></div>

              <div className="w-10 h-10 rounded-full bg-[#C14E29]"></div>

            </div>

            {/* Solo adultos */}
            <div className="mt-12">

              <p className="text-4xl">
                🥂
              </p>

              <p className="mt-2 text-[#7B7A42]">
                Gracias por ayudarnos a crear una velada especial.
              </p>

            </div>

          </div>

          {/* Hombre */}
          <div className="text-center">
            <img
              src="/Dresscode02.JPG"
              alt="Vestimenta Hombre"
              className="w-full max-w-xs mx-auto rounded-3xl shadow-lg"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Detalles;