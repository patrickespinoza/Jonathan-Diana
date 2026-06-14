import { useState } from "react";

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");

  const enviarConfirmacion = async (tipoInvitado) => {
  if (!nombreInvitado || !asistencia) {
    setError("Completa tu nombre y confirma asistencia");
    return;
  }

  setError("");

  const numero =
    tipoInvitado === "novio"
      ? "522949458172"
      : "522881333860";

  const data = {
    nombre: nombreInvitado,
    asistencia,
    invitados,
    mensaje: mensajeInvitado,
    lado: tipoInvitado === "novio" ? "Novio" : "Novia",
  };

  try {
    await fetch(
  "https://script.google.com/macros/s/AKfycbwQsf6eKWgz6Rxiu0KM4g5aSGZTrywd6lCVMWASopk_ad71x_ydQypHNcmYWz6RxLrHXA/exec",
  {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
  }
);

    console.log("Enviado");

    const mensaje = `✨ Confirmación de asistencia ✨

Nombre: ${nombreInvitado}
Asistencia: ${asistencia}
Invitados: ${invitados}

Mensaje:
${mensajeInvitado || "Sin mensaje"}

Invitado de: ${
      tipoInvitado === "novio"
        ? "Jonathan"
        : "Diana"
    }

¡Nos vemos en la boda! 💍`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");

    setNombreInvitado("");
    setMensajeInvitado("");
    setAsistencia("");
    setInvitados("");

  } catch (error) {
    console.error(error);
    setError("Hubo un error al enviar");
  }
};

  return (
    <section
      className="
        py-24
        px-6
        bg-[#F5EFE6]
      "
    >
      <div
        className="
          max-w-xl
          mx-auto
          bg-white
          rounded-[32px]
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          p-8
          md:p-12
        "
      >
        <p
          className="
            text-center
            uppercase
            tracking-[0.35em]
            text-[#B7410E]
            text-xs
          "
        >
          RSVP
        </p>

        <h1
          className="
            text-center
            text-4xl
            md:text-5xl
            font-cursiveDancing
            text-[#636B2F]
            mt-4
          "
        >
          Confirmar Asistencia
        </h1>

        <div
          className="
            w-20
            h-[2px]
            bg-[#B7410E]
            mx-auto
            mt-5
            mb-8
          "
        />

        <p
          className="
            text-center
            text-[#5A5A5A]
            mb-8
          "
        >
          Nos encantará compartir este día contigo.
        </p>

        <input
          type="text"
          placeholder="Nombre y apellido"
          value={nombreInvitado}
          onChange={(e) =>
            setNombreInvitado(e.target.value)
          }
          className="
            w-full
            p-4
            rounded-xl
            border
            border-[#D9D0C5]
            focus:outline-none
            focus:ring-2
            focus:ring-[#B2B28D]
            mb-4
          "
        />

        <div className="flex gap-4 mb-4">
          <button
            onClick={() =>
              setAsistencia("Sí asistiré")
            }
            className={`
              flex-1
              py-3
              rounded-xl
              border
              transition-all
              ${
                asistencia === "Sí asistiré"
                  ? "bg-[#636B2F] text-white border-[#636B2F]"
                  : "bg-white border-[#D9D0C5]"
              }
            `}
          >
            ✓ Asistiré
          </button>

          <button
            onClick={() =>
              setAsistencia("No podré asistir")
            }
            className={`
              flex-1
              py-3
              rounded-xl
              border
              transition-all
              ${
                asistencia === "No podré asistir"
                  ? "bg-[#B7410E] text-white border-[#B7410E]"
                  : "bg-white border-[#D9D0C5]"
              }
            `}
          >
            ✕ No asistiré
          </button>
        </div>

        <input
          type="number"
          min=""
          value={invitados}
          onChange={(e) =>
            setInvitados(Number(e.target.value))
          }
          className="
            w-full
            p-4
            rounded-xl
            border
            border-[#D9D0C5]
            text-center
            mb-4
          "
        />

        <textarea
          placeholder="Mensaje para los novios (opcional)"
          value={mensajeInvitado}
          onChange={(e) =>
            setMensajeInvitado(e.target.value)
          }
          rows={4}
          className="
            w-full
            p-4
            rounded-xl
            border
            border-[#D9D0C5]
            resize-none
            mb-4
          "
        />

        {error && (
          <p
            className="
              text-red-500
              text-sm
              text-center
              mb-4
            "
          >
            {error}
          </p>
        )}

        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-4
            mt-4
          "
        >
          <button
            onClick={() =>
              enviarConfirmacion("novio")
            }
            className="
              flex-1
              bg-[#636B2F]
              hover:bg-[#5A5D33]
              text-white
              py-4
              rounded-full
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Confirmar con el Novio
          </button>

          <button
            onClick={() =>
              enviarConfirmacion("novia")
            }
            className="
              flex-1
              bg-[#B7410E]
              hover:bg-[#9E5324]
              text-white
              py-4
              rounded-full
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Confirmar con la Novia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Confirmacion;