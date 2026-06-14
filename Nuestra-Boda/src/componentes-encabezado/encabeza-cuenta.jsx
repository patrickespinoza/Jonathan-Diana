import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTime = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, targetDate]);

  return (
    <section className="px-6 py-10">

      <div className="flex flex-col items-center">

        {/* Título */}
        <h2
          className="
            font-cursiveDancing
            text-[#636B2F]
            text-4xl
            md:text-5xl
            text-center
            mb-3
          "
        >
          Cuenta Regresiva
        </h2>

        {/* Línea decorativa */}
        <div className="w-24 h-[2px] bg-[#B7410E] mb-10"></div>

        {/* Contador */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            md:gap-8
            w-full
            max-w-4xl
          "
        >
          {Object.keys(timeLeft).map((interval) => (
            <div
              key={interval}
              className="
                flex
                flex-col
                items-center
                justify-center
                bg-white/80
                backdrop-blur-md
                rounded-[28px]
                py-6
                px-3
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                border
                border-[#D8D6B8]
                min-h-[150px]
              "
            >
              {/* Número */}
              <span
                className="
                  w-16
                  h-16
                  md:w-20
                  md:h-20
                  rounded-full
                  bg-[#636B2F]
                  text-white
                  font-bold
                  text-2xl
                  md:text-3xl
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                {timeLeft[interval]}
              </span>

              {/* Texto */}
              <span
                className="
                  mt-4
                  text-[#636B2F]
                  uppercase
                  tracking-[0.20em]
                  text-xs
                  md:text-sm
                  font-semibold
                  text-center
                "
              >
                {interval}
              </span>
            </div>
          ))}
        </div>

        {/* Mensaje final */}
        {Object.keys(timeLeft).length === 0 && (
          <div className="text-center mt-8">
            <p
              className="
                text-[#B7410E]
                text-4xl
                font-cursiveDancing
              "
            >
              ¡Llegó el gran día!
            </p>
          </div>
        )}

      </div>

    </section>
  );
};

export default Countdown;