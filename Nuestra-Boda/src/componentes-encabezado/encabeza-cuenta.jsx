import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTime = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
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
  }, [timeLeft]);

  return (
    <section>

      <div className="flex flex-col items-center">

        {/* Título */}
        <h2 className="font-playfair text-[#7B7A42] text-2xl md:text-3xl mb-3 tracking-wide">
          Cuenta Regresiva
        </h2>

        {/* Línea decorativa */}
        <div className="w-24 h-[2px] bg-[#C14E29] mb-10"></div>

        {/* Contador */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-8">

          {Object.keys(timeLeft).map((interval) => (
            <div
              key={interval}
              className="
                flex flex-col items-center
                bg-white/70
                backdrop-blur-sm
                rounded-3xl
                px-5
                py-5
                shadow-lg
                border border-[#B8C0A0]/40
                min-w-[95px]
              "
            >
              {/* Número */}
              <span
                className="
                  w-16 h-16
                  rounded-full
                  bg-[#C14E29]
                  text-white
                  font-bold
                  text-2xl
                  flex
                  items-center
                  justify-center
                  shadow-md
                "
              >
                {timeLeft[interval]}
              </span>

              {/* Etiqueta */}
              <span
                className="
                  mt-3
                  text-[#7B7A42]
                  uppercase
                  tracking-wider
                  text-xs
                  font-semibold
                "
              >
                {interval}
              </span>
            </div>
          ))}
        </div>

        {/* Mensaje final */}
        {Object.keys(timeLeft).length === 0 && (
          <div className="text-center">
            <p className="text-[#C14E29] text-3xl font-cursiveDancing">
              ¡Llegó el gran día!
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Countdown;