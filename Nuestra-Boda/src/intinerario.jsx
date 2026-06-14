import React from "react";
import Countdown from "./componentes-encabezado/encabeza-cuenta";
import Decoracion from "./componentes-encabezado/FotoFrase";
import Celebracion from "./componentes-encabezado/Celebracion";
import Detalles from "./componentes-encabezado/Dresscode";
import Galeria from "./componentes-encabezado/Galeria";
import Regalos from "./componentes-encabezado/MesadeRegalos";
import Confirmacion from "./componentes-encabezado/Asistencia";
import ImagenFinal from "./componentes-encabezado/Imagenfinal";
import MusicaModal from "./componentes-encabezado/Musica";
import Novios from "./componentes-encabezado/Novios";

export default function Intinerario() {

  return (
    <div >
    <MusicaModal/>

<section className="relative bg-[#E3DBD1] overflow-hidden">

  {/* Decoraciones de fondo */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-[#B8C0A0]/20 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B7410E]/15 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">

    {/* Flores superiores */}
    <img
      src="/flores-centro.png"
      alt="Flores"
      className="
        mx-auto
        w-full
        max-w-3xl
        mb-10
        rotate-180
      "
    />

    {/* Texto pequeño */}
    <p className="uppercase tracking-[0.4em] text-[#B7410E] text-sm font-semibold mb-6">
      INVITACIÓN DE BODA
    </p>

    {/* Nombres */}
    <h1 className="font-cursiveDancing text-[#636B2F] text-5xl sm:text-6xl md:text-7xl leading-tight">
      ¡Estás Invitado!
    </h1>

    {/* Mensaje */}
    <p className="mt-10 text-[#636B2F] text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
      Nos encantaría que formaras parte de este momento tan especial
      y compartieras con nosotros el inicio de esta nueva aventura.
    </p>

  </div>
</section>

{/* Cuenta regresiva */}
<div className="relative bg-[#E3DBD1] pb-24">

  {/* Flores laterales */}
  <img
    src="/flores-esquina.png"
    alt="Flores"
    className="
      absolute
      right-0
      top-1/2
      -translate-y-28
      w-60
      md:w-80
      hidden md:block
    "
  />

  <img
    src="/flores-esquina.png"
    alt="Flores"
    className="
      absolute
      left-0
      top-1/2
      -translate-y-28
      w-60
      md:w-80
      scale-x-[-1]
      hidden md:block
    "
  />

  <Countdown targetDate="2026-07-25T00:00:00" />

  {/* Flores inferiores */}
  <div className="flex justify-center mt-12">
    <img
      src="/flores-centro.png"
      alt="Flores"
      className="
        w-full
        max-w-3xl
      "
    />
  </div>

</div>
        
<Novios />

<Decoracion />

<Celebracion />

<Detalles />

<Galeria />
        
<Regalos />

<ImagenFinal />

<Confirmacion />
      </div> 
  );
}
