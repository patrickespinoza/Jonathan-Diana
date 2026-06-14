import { useState } from "react";

const Regalos = () => {
  const [copiado, setCopiado] = useState(false);

  const numeroCuenta = "1234 5678 9012 3456";

  const copiarCuenta = async () => {
    await navigator.clipboard.writeText(numeroCuenta);

    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <section className="bg-[#E3DBD1] py-24 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* Encabezado */}
        <p className="uppercase tracking-[0.35em] text-[#C14E29] text-xs">
          Regalos
        </p>

        <h1 className="font-cursiveDancing text-[#7B7A42] text-5xl mt-4">
          Lluvia de Sobres
        </h1>

        <div className="w-24 h-[2px] bg-[#C14E29] mx-auto mt-6"></div>

        <img
          src="/regalo1.png"
          alt="Regalo"
          className="w-24 h-24 mx-auto mt-10"
        />

        <p
          className="
            mt-10
            text-lg
            md:text-xl
            text-[#7B7A42]
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

        {/* Tarjeta */}

        <div className="flex justify-center mt-14">

          <div
            className="
              relative
              w-full
              max-w-md
              rounded-[28px]
              overflow-hidden
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            "
            style={{
              background:
                "linear-gradient(135deg,#111111 0%,#2D2D2D 45%,#C8A76A 100%)",
            }}
          >

            <div className="p-8 text-left text-white">

              <div className="flex justify-between items-center">

                <h2 className="tracking-[0.25em] text-sm text-[#F7E7B5]">
                  SANTANDER
                </h2>

                <span className="text-[#F7E7B5]">
                  GOLD
                </span>

              </div>

              <div
                className="w-12 h-8 rounded-lg mt-8"
                style={{
                  background:
                    "linear-gradient(135deg,#F7E7B5,#C8A76A)",
                }}
              />

              <p className="mt-8 text-xl tracking-[0.2em] text-[#FFF7D6]">
                {numeroCuenta}
              </p>

              <div className="flex justify-between mt-8">

                <div>
                  <p className="text-xs text-[#F7E7B5]/70">
                    TITULAR
                  </p>

                  <p className="mt-1">
                    JUAN PEREZ
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#F7E7B5]/70">
                    CLABE
                  </p>

                  <p className="mt-1">
                    123456789012345678
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Botón copiar moderno */}

        <div className="mt-8 flex justify-center">

          <button
            onClick={copiarCuenta}
            className="
              flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-white
              border
              border-[#B8C0A0]
              shadow-md
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            <span className="text-lg">📋</span>

            <span className="text-[#7B7A42] font-medium">
              {copiado
                ? "Número copiado"
                : "Copiar número de cuenta"}
            </span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default Regalos;