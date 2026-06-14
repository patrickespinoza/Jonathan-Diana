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

        <div
          className="
            px-6
            py-10
            text-center
            bg-[#F5EFE6]
          "
        >
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