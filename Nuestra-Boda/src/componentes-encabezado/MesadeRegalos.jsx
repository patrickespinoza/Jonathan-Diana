import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Regalos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const copiarCuenta = () => {
    navigator.clipboard.writeText("5579 0701 5790 1458");

    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <>
      <section className="bg-[#E3DBD1] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-[#B7410E] text-xs">
            Regalos
          </p>

          <h1 className="font-cursiveDancing text-[#636B2F] text-5xl mt-4">
            Lluvia de Sobres
          </h1>
           <img className="h-auto w-40 mx-auto my-6" src="/Sobre.png" alt="sobre" />
          <div className="w-24 h-[2px] bg-[#B7410E] mx-auto mt-6"></div>


          <p
            className="
              mt-10
              text-lg
              md:text-xl
              text-[#636B2F]
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Tu presencia es nuestro mejor regalo.
            <br />
            Pero si deseas tener un detalle con nosotros,
            agradeceremos una lluvia de sobres o una contribución
            para comenzar esta nueva aventura juntos.
          </p>

          <button
            onClick={() => setMostrarModal(true)}
            className="
              mt-12
              bg-[#B7410E]
              hover:bg-[#A94422]
              text-white
              px-10
              py-4
              rounded-full
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Ver Datos Bancarios
          </button>
        </div>
      </section>

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              bg-black/60
              backdrop-blur-md
              flex
              items-center
              justify-center
              z-50
              px-4
            "
            onClick={() => setMostrarModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 60 }}
              transition={{ duration: 0.4 }}
              className="relative"

              
            >
              {/* Tarjeta Premium */}
              <div
                className="
                  relative
                  w-[380px]
                  h-[240px]
                  rounded-[28px]
                  overflow-hidden
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  p-8
                "
                style={{
                  background:
                    "linear-gradient(135deg,#111111 0%,#2D2D2D 40%,#C8A76A 100%)",
                }}
              >
                {/* brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40"></div>

                {/* Banco */}
                <div className="relative flex justify-between items-center">
                  <h2
                    className="
                      text-[#F7E7B5]
                      tracking-[0.3em]
                      text-sm
                    "
                  >
                    SANTANDER
                  </h2>

                  <span className="text-[#F7E7B5] text-sm">
                    GOLD
                  </span>
                </div>

                {/* Chip */}
                <div
                  className="
                    relative
                    w-12
                    h-9
                    rounded-lg
                    mt-8
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#F7E7B5,#C8A76A)",
                  }}
                />

                {/* Número */}
                <p
                  className="
                    relative
                    mt-8
                    text-xl
                    tracking-[0.25em]
                    text-[#FFF7D6]
                  "
                >
                  5579 0701 5790 1458
                </p>

                {/* Datos */}
                <div className="relative flex justify-between mt-2">
                  <div>
                    <p className="text-[#F7E7B5]/70 text-xs">
                      TITULAR
                    </p>

                    <p className="text-[#FFF7D6] text-sm">
                      Diana Maythe Barran Leon
                    </p>
                  </div>
                </div>
                  {/* Botón copiar integrado */}
    <button
      onClick={copiarCuenta}
      className="
        absolute
        bottom-2
        right-4
        w-12
        h-12
        rounded-full
        bg-white/15
        backdrop-blur-md
        border
        border-white/20
        flex
        items-center
        justify-center
        text-[#FFF7D6]
        hover:bg-white/25
        hover:scale-110
        transition-all
        duration-300
      "
      title="Copiar número de cuenta"
    >
      {copiado ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect
            x="9"
            y="9"
            width="11"
            height="11"
            rx="2"
          />
          <rect
            x="4"
            y="4"
            width="11"
            height="11"
            rx="2"
          />
        </svg>
      )}
    </button>
    
    {/* Tooltip */}
    {copiado && (
      <div
        className="
          absolute
          bottom-20
          right-6
          bg-black/80
          text-white
          text-xs
          px-3
          py-2
          rounded-lg
          backdrop-blur-md
        "
      >
        Cuenta copiada
      </div>
    )}
              </div>

  

              {/* Cerrar */}
              <button
                onClick={() => setMostrarModal(false)}
                className="
                  absolute
                  -top-3
                  -right-3
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  shadow-lg
                  text-black
                  hover:scale-110
                  transition
                "
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Regalos;