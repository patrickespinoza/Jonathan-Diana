import React from "react";

export default function Portada() {
  return (
    <section className="w-full bg-[#F5EFE6]">
      {/* MOBILE */}
      <div className="block md:hidden">
        <div className="relative w-full">
          <img
            src="/Portada-02.JPG"
            alt="Jonathan y Diana"
            className="
              w-full
              object-contain
            "
          />

          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        {/* TEXTO MOBILE CON FLORES */}
        <div
          className="
            relative
            overflow-hidden
            px-6
            py-16
            text-center
            bg-[#F5EFE6]
          "
        >
          {/* Flores esquina superior izquierda */}
          <img
            src="/flores-esquina.png"
            alt="Flores decorativas"
            className="
              absolute
              top-0
              left-0
              w-40
              z-0
              -translate-x-1
              -translate-y-4
              rotate-180
              pointer-events-none
            "
          />

          {/* Flores esquina inferior derecha */}
          <img
            src="/flores-esquina.png"
            alt="Flores decorativas"
            className="
              absolute
              bottom-0
              right-0
              w-40
              z-0
              translate-x-1
              translate-y-4
              pointer-events-none
            "
          />

          {/* Flores esquina superior derecha */}
          <img
            src="/flores-esquina.png"
            alt="Flores decorativas"
            className="
              absolute
              top-0
              right-0
              w-40
              z-0
              translate-x-5
              -translate-y-1
              -rotate-90
              pointer-events-none
            "
          />

          {/* Flores esquina inferior izquierda */}
          <img
            src="/flores-esquina.png"
            alt="Flores decorativas"
            className="
              absolute
              bottom-0
              left-0
              w-40
              z-0
              rotate-90
              -translate-x-4
              translate-y-1
              pointer-events-none
            "
          />

          <div className="relative z-10">
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-[#B6642E]
                text-xs
                mb-4
              "
            >
              Nuestra Boda
            </p>

            <h1
              className="
                font-cursiveDancing
                text-[#6E7140]
                text-5xl
                leading-tight
              "
            >
              JONATHAN
              <br />
              &
              <br />
              DIANA
            </h1>

            <div
              className="
                w-20
                h-[2px]
                bg-[#B6642E]
                mx-auto
                my-5
              "
            />

            <p
              className="
                text-[#5F5F5F]
                tracking-[0.25em]
                text-sm
              "
            >
              NOS CASAMOS
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="
          hidden
          md:flex
          relative
          h-screen
          items-center
          justify-center
          text-white
        "
      >
        <img
          src="/Portada-02.JPG"
          alt="Jonathan y Diana"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        <div className="absolute inset-0 bg-black/35"></div>

        <div
          className="
            relative
            z-10
            text-center
          "
        >
          <h1
            className="
              font-cursiveDancing
              text-7xl
              lg:text-8xl
            "
          >
            JONATHAN & DIANA
          </h1>

          <p
            className="
              mt-4
              tracking-[0.25em]
              text-2xl
            "
          >
            NOS CASAMOS
          </p>
        </div>
      </div>
    </section>
  );
}