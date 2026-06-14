import { useState } from "react";

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);
  const [error, setError] = useState("");

  const enviarConfirmacion = async () => {
    if (!nombreInvitado || !asistencia) {
      setError("Completa tu nombre y confirma asistencia");
      return;
    }

    setError("");

    const data = {
      nombre: nombreInvitado,
      asistencia,
      invitados,
      mensaje: mensajeInvitado,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const numero = "522214105012";

      const mensaje = `✨ Confirmación de asistencia ✨

Nombre: ${nombreInvitado}
Asistencia: ${asistencia}
Invitados: ${invitados}

Mensaje:
${mensajeInvitado || "Sin mensaje"}

¡Nos vemos en la boda! 💍🎉`;

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(
        mensaje
      )}`;

      window.open(url, "_blank");

      setNombreInvitado("");
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados(1);
    } catch (error) {
      console.error("Error:", error);
      setError("Hubo un error al enviar");
    }
  };

  return (
    <>

      {/* Formulario */}
      <div className="flex flex-col items-center justify-center gap-4 h-auto py-10 bg-gray-50 rounded-2xl shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold font-playfair">
          CONFIRMAR ASISTENCIA
        </h1>

        <p>Por favor, confirma tu asistencia</p>

        <input
          type="text"
          placeholder="Nombre y apellido"
          value={nombreInvitado}
          onChange={(e) => setNombreInvitado(e.target.value)}
          className="w-80 p-3 border rounded-lg focus:ring-2 focus:ring-[#9E8E7B]"
        />

        <div className="flex gap-4">
          <button
            onClick={() => setAsistencia("Sí asistiré")}
            className={`px-4 py-2 rounded-lg border ${
              asistencia === "Sí asistiré"
                ? "bg-green-500 text-white"
                : "bg-white"
            }`}
          >
            ✅ Asistiré
          </button>

          <button
            onClick={() => setAsistencia("No podré asistir")}
            className={`px-4 py-2 rounded-lg border ${
              asistencia === "No podré asistir"
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
          >
            ❌ No asistiré
          </button>
        </div>

        <input
          type="number"
          min="1"
          value={invitados}
          onChange={(e) => setInvitados(Number(e.target.value))}
          className="w-80 p-3 border rounded-lg text-center"
        />

        <textarea
          placeholder="Mensaje para los novios (opcional)"
          value={mensajeInvitado}
          onChange={(e) => setMensajeInvitado(e.target.value)}
          className="w-80 p-3 border rounded-lg"
        />

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <button
          onClick={enviarConfirmacion}
          className="bg-[#9E8E7B] hover:bg-[#8a7a69] text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
          Enviar Confirmación
        </button>
      </div>
    </>
  );
};

export default Confirmacion;