import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  return (
    <div className="w-full bg-[#E3DBD1] py-20 px-6 flex items-center justify-center overflow-hidden relative">
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
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="
          max-w-4xl w-full
          bg-white/80
          backdrop-blur-sm
          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          shadow-[0_15px_50px_rgba(0,0,0,0.08)]
          px-8 py-16 sm:px-16
          text-center
          relative
          overflow-hidden
          border border-[#B8C0A0]/30
        "
      >

        {/* Glow decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B8C0A0]/20 via-transparent to-[#B7410E]/10 pointer-events-none"></div>

        {/* Encabezado */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="
            text-xl sm:text-2xl
            text-[#636B2F]/90
            font-[DancingScript]
            leading-relaxed
          "
        >
          Con la bendición de nuestros padres
        </motion.p>

        <p className="mt-3 text-[#B7410E] uppercase tracking-[0.3em] text-xs">
          Y en compañía de nuestros seres queridos
        </p>

        {/* Línea */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-[2px] bg-[#B7410E] mx-auto mt-8"
        />

        {/* Padres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">

          {/* Padres Novio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="
              bg-white/70
              backdrop-blur-sm
              rounded-3xl
              p-8
              shadow-md
              border border-[#B8C0A0]/30
            "
          >
            <h2
              className="
                text-[#B7410E]
                uppercase
                tracking-[0.2em]
                text-sm
                mb-6
              "
            >
              Padres del Novio
            </h2>

            <p
              className="
                text-2xl
                font-playfair
                text-[#636B2F]
              "
            >
              GUADALUPE MARTINEZ RAMOS
            </p>
          </motion.div>

          {/* Padres Novia */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="
              bg-white/70
              backdrop-blur-sm
              rounded-3xl
              p-8
              shadow-md
              border border-[#B8C0A0]/30
            "
          >
            <h2
              className="
                text-[#B7410E]
                uppercase
                tracking-[0.2em]
                text-sm
                mb-6
              "
            >
              Padres de la Novia
            </h2>

            <p
              className="
                text-2xl
                font-playfair
                text-[#636B2F]
              "
            >
              LUCIANO BARRAN CALIX
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="
                my-6
                text-2xl sm:text-3xl
                text-[#B7410E]
                font-[DancingScript]
              "
            >
              &
            </motion.p>

            <p
              className="
                text-2xl
                font-playfair
                text-[#636B2F]
              "
            >
              GLORIA CRISTINA LEON HERNANDEZ
            </p>
          </motion.div>
        </div>

        {/* Línea divisora */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "7rem" }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="h-[2px] bg-[#B7410E] mx-auto mt-14"
        />

        {/* Padrinos */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            mt-8
            uppercase
            text-[#B7410E]
            tracking-[0.2em]
            text-xs sm:text-sm
            font-semibold
          "
        >
          Padrinos de Velación
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-10
            text-3xl sm:text-4xl md:text-5xl
            font-playfair
            text-[#636B2F]
            leading-tight
          "
        >
          ANGEL VELAZQUEZ SALDIVAR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="
            my-6
            text-3xl sm:text-4xl
            text-[#B7410E]
            font-[DancingScript]
          "
        >
          &
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-playfair
            text-[#636B2F]
            leading-tight
          "
        >
          SILVIA BARRAN DOMINGUEZ
        </motion.h1>

      </motion.div>

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
    </div>
  );
};

export default Novios;