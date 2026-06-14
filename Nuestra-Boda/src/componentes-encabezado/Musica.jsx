import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MusicaModal = () => {
  const [mostrarModal, setMostrarModal] = useState(true);
  const audioRef = useRef(null);

  const reproducirMusica = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    setMostrarModal(false);
  };

  const continuarSinMusica = () => {
    setMostrarModal(false);
  };

  return (
    <>
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              bg-black/70
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                bg-[#F5EFE6]
                rounded-[32px]
                shadow-2xl
                p-8
                max-w-md
                w-full
                text-center
                border
                border-[#E3D7C8]
              "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Icono */}
              <div className="text-6xl mb-4">
                🎵
              </div>


              {/* Título */}
              <h2
                className="
                  text-3xl
                  font-playfair
                  text-[#636B2F]
                  mb-4
                "
              >
                Bienvenido
              </h2>

              {/* Separador */}
              <div
                className="
                  w-16
                  h-[2px]
                  bg-[#B7410E]
                  mx-auto
                  mb-6
                "
              />

              {/* Mensaje */}
              <p
                className="
                  text-[#5F5F5F]
                  leading-relaxed
                  mb-8
                "
              >
                Esta invitación contiene música.
                <br />
                Te recomendamos activarla para disfrutar
                una experiencia más especial.
              </p>

              {/* Botones */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={reproducirMusica}
                  className="
                    bg-[#636B2F]
                    hover:bg-[#515826]
                    text-white
                    py-4
                    rounded-xl
                    transition-all
                    duration-300
                    shadow-lg
                    hover:scale-[1.02]
                  "
                >
                  🎶 Escuchar Música
                </button>

                <button
                  onClick={continuarSinMusica}
                  className="
                    border-2
                    border-[#B7410E]
                    text-[#B7410E]
                    py-4
                    rounded-xl
                    transition-all
                    duration-300
                    hover:bg-[#B7410E]
                    hover:text-white
                  "
                >
                  Continuar sin Música
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <audio ref={audioRef} loop>
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default MusicaModal;