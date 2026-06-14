import Carousel from "./carrusel";

const Galeria = () => {
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
          w-32
          sm:w-48
          md:w-60
          lg:w-80
          -translate-x-1
          -translate-y-10
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
          w-32
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
          w-32
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
          w-32
          sm:w-48
          md:w-60
          lg:w-80
          translate-x-1
          translate-y-16
          pointer-events-none
          z-0
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-[#B7410E]
            text-sm
          "
        >
          Nuestra Historia
        </p>

        <h1
          className="
            font-cursiveDancing
            text-[#636B2F]
            text-5xl
            mt-4
          "
        >
          Nuestros Momentos
        </h1>

        <div
          className="
            w-24
            h-[2px]
            bg-[#B7410E]
            mx-auto
            mt-6
          "
        />

        <p
          className="
            mt-8
            text-[#636B2F]/80
            text-lg
            max-w-2xl
            mx-auto
          "
        >
          Cada fotografía guarda un recuerdo,
          una sonrisa y un instante que nos ha traído
          hasta este día tan especial.
        </p>

        <div
          className="
            mt-14
            bg-white/70
            backdrop-blur-sm
            rounded-[3rem]
            shadow-xl
            border
            border-[#B8C0A0]/30
            p-4
            md:p-8
          "
        >
          <Carousel />
        </div>

      </div>

      {/* FLORES INFERIORES CENTRO */}
      <img
        src="/flores-centro.png"
        alt=""
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[280px]
          sm:w-[400px]
          md:w-[550px]
          lg:w-[650px]
          pointer-events-none
          z-0
        "
      />

    </section>
  );
};

export default Galeria;