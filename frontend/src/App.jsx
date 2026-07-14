import { useState } from "react";
import logo from "./assets/logo.svg";

function App() {
  // --- LÓGICA DEL COTIZADOR ---
  const [tipoEspacio, setTipoEspacio] = useState(15); // $15 Escritorio Compartido, $40 Oficina Privada
  const [dias, setDias] = useState(1);
  const [monitor, setMonitor] = useState(false);
  const [estacionamiento, setEstacionamiento] = useState(false);

  // Cálculo derivado en tiempo real
  const totalEstimado =
    tipoEspacio * dias + (monitor ? 5 * dias : 0) + (estacionamiento ? 10 : 0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-indigo-200">
      {/* 0. NAVBAR (DISTRIBUCIÓN SIMÉTRICA) */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* 1. Lado Izquierdo (Logo) - Toma un tercio del espacio */}
          <div className="flex-1 flex justify-start">
            <a href="#inicio" className="cursor-pointer">
              {/* Quitamos el span de texto porque el logo ya lo trae */}
              <img
                src={logo}
                alt="Logo Espacio Nómada"
                className="w-auto h-12 md:h-14 object-contain"
              />
            </a>
          </div>

          {/* 2. Centro (Enlaces) - Toma el tercio central y se auto-centra */}
          <div className="hidden md:flex flex-1 justify-center space-x-10 text-sm font-semibold text-gray-600">
            <a
              href="#inicio"
              className="hover:text-indigo-700 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#amenidades"
              className="hover:text-indigo-700 transition-colors"
            >
              Amenidades
            </a>
            <a
              href="#cotizador"
              className="hover:text-indigo-700 transition-colors"
            >
              Cotizador
            </a>
          </div>

          {/* 3. Lado Derecho (Botón) - Toma el último tercio y se empuja a la orilla */}
          <div className="flex-1 flex justify-end">
            <a
              href="#cotizador"
              className="bg-indigo-700 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-800 transition-colors shadow-md"
            >
              Reservar
            </a>
          </div>
        </div>
      </nav>

      {/* 1. SECCIÓN PRINCIPAL (HERO) - PANTALLA COMPLETA CON IMAGEN */}
      <header
        id="inicio"
        className="relative flex flex-col items-center justify-center pt-48 pb-40 px-6 text-center bg-cover bg-center"
        // Usamos una imagen de Unsplash de alta resolución para el fondo
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Overlay: Capa oscura para que el texto resalte (z-0) */}
        <div className="absolute inset-0 bg-indigo-900/70 z-0"></div>

        {/* Contenido principal (z-10 para que quede por encima del overlay) */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo SVG */}
          <img
            src={logo}
            alt="Logo Espacio Nómada"
            className="w-auto h-32 md:h-48 mb-8 object-contain invert brightness-0 drop-shadow-lg"
          />

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
            Espacio Nómada
          </h1>

          <p className="text-xl md:text-2xl text-indigo-50 mb-10 max-w-3xl drop-shadow-md">
            El hub de coworking definitivo para trabajadores remotos y
            freelancers. Productividad, comunidad y diseño en un solo lugar.
          </p>

          <a
            href="#cotizador"
            className="bg-white text-indigo-700 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl text-lg"
          >
            Cotizar ahora
          </a>
        </div>
      </header>

      {/* 2. SECCIÓN VISUAL (AMENIDADES) - VERSIÓN INTERACTIVA */}
      <section id="amenidades" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">
            Beneficios Premium
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Todo lo que necesitas para fluir
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Tarjeta 1: Internet */}
          <div className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-default">
            {/* Fondo decorativo que aparece en hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                🌐
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Internet Simétrico
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Velocidad garantizada de 500Mbps para videollamadas sin
                interrupciones y transferencias de archivos ultrarrápidas.
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Café */}
          <div className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                ☕
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Café Ilimitado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Barra de café de especialidad, infusiones y snacks saludables a
                tu completa disposición durante toda tu jornada.
              </p>
            </div>
          </div>

          {/* Tarjeta 3: Cabinas */}
          <div className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                🤫
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Cabinas Privadas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Espacios insonorizados diseñados acústicamente para tus
                reuniones importantes o trabajo de máxima concentración.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ZONA DEL COTIZADOR INTERACTIVO */}
      <section
        id="cotizador"
        className="bg-white py-20 px-6 border-t border-gray-200"
      >
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Calcula tu inversión
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulario de opciones */}
            <div className="space-y-6">
              {/* Paso 1: Tipo de espacio */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  1. Tipo de espacio
                </label>
                <select
                  className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={tipoEspacio}
                  onChange={(e) => setTipoEspacio(Number(e.target.value))}
                >
                  <option value={15}>
                    Escritorio Compartido ($15 USD / día)
                  </option>
                  <option value={40}>Oficina Privada ($40 USD / día)</option>
                </select>
              </div>

              {/* Paso 2: Duración */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  2. Duración (Días)
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={dias}
                  onChange={(e) => setDias(Math.max(1, Number(e.target.value)))}
                />
              </div>

              {/* Paso 3: Extras */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  3. Extras opcionales
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                      checked={monitor}
                      onChange={(e) => setMonitor(e.target.checked)}
                    />
                    <span className="text-gray-700">
                      Monitor extra (+$5 USD{" "}
                      <span className="italic">por día</span>)
                    </span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                      checked={estacionamiento}
                      onChange={(e) => setEstacionamiento(e.target.checked)}
                    />
                    <span className="text-gray-700">
                      Pase de estacionamiento (+$10 USD tarifa única)
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Tarjeta de Resultado */}
            <div className="bg-indigo-700 text-white rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg">
              <p className="text-indigo-200 font-semibold mb-2 uppercase tracking-wide">
                Total estimado
              </p>
              <p className="text-5xl font-extrabold mb-6">
                ${totalEstimado}{" "}
                <span className="text-2xl font-medium">USD</span>
              </p>

              <div className="w-full h-px bg-indigo-500 mb-6"></div>

              <ul className="text-left w-full space-y-2 text-sm text-indigo-100">
                <li>
                  •{" "}
                  {tipoEspacio === 15
                    ? "Escritorio Compartido"
                    : "Oficina Privada"}{" "}
                  x {dias} {dias === 1 ? "día" : "días"}
                </li>
                {monitor && (
                  <li>
                    • Monitor extra x {dias} {dias === 1 ? "día" : "días"}
                  </li>
                )}
                {estacionamiento && <li>• Estacionamiento (Tarifa única)</li>}
              </ul>

              <button className="mt-8 w-full bg-white text-indigo-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Reservar espacio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
