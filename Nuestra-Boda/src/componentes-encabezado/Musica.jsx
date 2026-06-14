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
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icono */}
              <div className="text-6xl mb-4">
                🎵
              </div>

              {/* Título */}
              <h2 className="text-2xl sm:text-3xl font-bold font-playfair mb-4">
                Bienvenido
              </h2>

              {/* Mensaje */}
              <p className="text-gray-600 mb-6">
                Esta invitación contiene música.
                <br />
                Te recomendamos activarla para disfrutar una mejor experiencia.
              </p>

              {/* Botones */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={reproducirMusica}
                  className="bg-[#9E8E7B] hover:bg-[#8a7a69] text-white py-3 rounded-xl transition duration-300"
                >
                  🎶 Escuchar Música
                </button>

                <button
                  onClick={continuarSinMusica}
                  className="border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition duration-300"
                >
                  Continuar sin Música
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default MusicaModal;