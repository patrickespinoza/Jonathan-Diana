import Carousel from "./carrusel";

const Galeria = () => {
  return (
    <section className="bg-[#E3DBD1] py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-[#C14E29] text-sm">
          Nuestra Historia
        </p>

        <h1 className="font-cursiveDancing text-[#7B7A42] text-5xl mt-4">
          Nuestros Momentos
        </h1>

        <div className="w-24 h-[2px] bg-[#C14E29] mx-auto mt-6"></div>

        <p className="mt-8 text-[#7B7A42]/80 text-lg max-w-2xl mx-auto">
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
            border border-[#B8C0A0]/30
            p-6 md:p-10
          "
        >
          <Carousel />
        </div>

      </div>

    </section>
  );
};

export default Galeria;