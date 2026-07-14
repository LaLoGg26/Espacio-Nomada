import { useState } from "react";
import logo from "./assets/logo.svg";

function App() {
  // --- ESTADOS DEL COTIZADOR ---
  const [tipoEspacio, setTipoEspacio] = useState(15);
  const [dias, setDias] = useState(1);
  const [monitor, setMonitor] = useState(false);
  const [estacionamiento, setEstacionamiento] = useState(false);

  // ESTADO PARA LA VENTANA MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Tratamiento del valor de días
  const diasCalculo = Number(dias) > 0 ? Number(dias) : 0;

  // Cálculo derivado en tiempo real
  const totalEstimado =
    tipoEspacio * diasCalculo +
    (monitor ? 5 * diasCalculo : 0) +
    (estacionamiento ? 10 : 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* 0. NAVBAR (Limpio y luminoso) */}
      <nav className="fixed inset-x-0 top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex-1 flex justify-start">
            <a
              href="#inicio"
              className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-lg"
            >
              <img
                src={logo}
                alt="Logo Espacio Nómada"
                className="w-auto h-12 md:h-14 object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex flex-1 justify-center space-x-10 text-sm font-semibold text-slate-600">
            <a
              href="#inicio"
              className="hover:text-indigo-600 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#amenidades"
              className="hover:text-indigo-600 transition-colors"
            >
              Amenidades
            </a>
            <a
              href="#cotizador"
              className="hover:text-indigo-600 transition-colors"
            >
              Cotizador
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <a
              href="#cotizador"
              className="bg-indigo-600 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
            >
              Reservar
            </a>
          </div>
        </div>
      </nav>

      {/* 1. SECCIÓN PRINCIPAL (HERO) - Respetando tu estilo original */}
      <header
        id="inicio"
        className="relative flex flex-col items-center justify-center pt-48 pb-40 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-indigo-950/75 z-0"></div>

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <img
            src={logo}
            alt="Logo Espacio Nómada"
            className="w-auto h-32 md:h-40 mb-8 object-contain invert brightness-0 drop-shadow-md"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-sm text-balance">
            Espacio Nómada
          </h1>
          <p className="text-xl md:text-2xl text-indigo-50 mb-10 max-w-2xl drop-shadow-sm text-balance font-light leading-relaxed">
            El hub de coworking definitivo para trabajadores remotos y
            freelancers. Productividad, comunidad y diseño en un solo lugar.
          </p>
          <a
            href="#cotizador"
            className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-full hover:bg-slate-50 transition-colors shadow-xl text-lg active:scale-95"
          >
            Cotizar ahora
          </a>
        </div>
      </header>

      {/* 2. SECCIÓN VISUAL (AMENIDADES) - Tarjetas limpias y consistentes */}
      <section id="amenidades" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">
            Beneficios Premium
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Todo lo que necesitas para fluir
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              icon: "🌐",
              title: "Internet Simétrico",
              desc: "Velocidad garantizada de 500Mbps para videollamadas sin interrupciones y transferencias ultrarrápidas.",
            },
            {
              icon: "☕",
              title: "Café Ilimitado",
              desc: "Barra de café de especialidad, infusiones y snacks saludables a tu completa disposición.",
            },
            {
              icon: "🤫",
              title: "Cabinas Privadas",
              desc: "Espacios insonorizados diseñados acústicamente para tus reuniones o máxima concentración.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              <div className="size-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ZONA DEL COTIZADOR INTERACTIVO (El diseño que te gustó) */}
      <section
        id="cotizador"
        className="py-24 px-6 bg-white border-t border-slate-100"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 tracking-tight text-center lg:text-left">
              Calcula tu inversión
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Formulario de opciones */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    1. Tipo de espacio
                  </label>
                  <div className="relative">
                    <select
                      className="block w-full appearance-none rounded-xl border-0 bg-white py-3.5 pl-4 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm transition-all cursor-pointer shadow-sm"
                      value={tipoEspacio}
                      onChange={(e) => setTipoEspacio(Number(e.target.value))}
                    >
                      <option value={15}>
                        Escritorio Compartido ($15 USD / día)
                      </option>
                      <option value={40}>
                        Oficina Privada ($40 USD / día)
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg
                        className="size-4 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    2. Duración (Días)
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Ej. 3"
                    className="block w-full rounded-xl border-0 bg-white py-3.5 px-4 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm transition-all shadow-sm"
                    value={dias}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDias(val === "" ? "" : Math.max(0, Number(val)));
                    }}
                    onBlur={() => {
                      if (diasCalculo === 0) setDias(1);
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-4">
                    3. Extras opcionales
                  </label>
                  <div className="space-y-3">
                    <label className="group flex items-center space-x-4 cursor-pointer p-4 rounded-xl ring-1 ring-slate-300 bg-white hover:bg-slate-100 transition-colors shadow-sm">
                      <input
                        type="checkbox"
                        className="size-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-0 bg-white"
                        checked={monitor}
                        onChange={(e) => setMonitor(e.target.checked)}
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-900">
                          Monitor extra{" "}
                          <span className="text-slate-500 font-normal">
                            (+$5 USD por día)
                          </span>
                        </span>
                      </div>
                    </label>

                    <label className="group flex items-center space-x-4 cursor-pointer p-4 rounded-xl ring-1 ring-slate-300 bg-white hover:bg-slate-100 transition-colors shadow-sm">
                      <input
                        type="checkbox"
                        className="size-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-0 bg-white"
                        checked={estacionamiento}
                        onChange={(e) => setEstacionamiento(e.target.checked)}
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-900">
                          Pase de estacionamiento{" "}
                          <span className="text-slate-500 font-normal">
                            (+$10 USD tarifa única)
                          </span>
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Tarjeta de Resultado Oscura */}
              <div className="lg:col-span-5">
                <div className="h-full bg-slate-900 text-white rounded-3xl p-8 lg:p-10 flex flex-col relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 flex-1 flex flex-col">
                    <p className="text-indigo-300 font-medium text-sm mb-4 tracking-wide uppercase">
                      Total estimado
                    </p>

                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-5xl lg:text-6xl font-extrabold tracking-tight">
                        ${totalEstimado}
                      </span>
                      <span className="text-xl font-medium text-slate-400">
                        USD
                      </span>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-8"></div>

                    <ul className="space-y-4 text-sm text-slate-300 flex-1">
                      <li className="flex items-start gap-3">
                        <svg
                          className="size-5 text-indigo-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span>
                          <span className="font-medium text-white">
                            {tipoEspacio === 15
                              ? "Escritorio Compartido"
                              : "Oficina Privada"}
                          </span>{" "}
                          x {diasCalculo} {diasCalculo === 1 ? "día" : "días"}
                        </span>
                      </li>

                      {monitor && (
                        <li className="flex items-start gap-3">
                          <svg
                            className="size-5 text-indigo-400 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          <span>
                            Monitor extra x {diasCalculo}{" "}
                            {diasCalculo === 1 ? "día" : "días"}
                          </span>
                        </li>
                      )}

                      {estacionamiento && (
                        <li className="flex items-start gap-3">
                          <svg
                            className="size-5 text-indigo-400 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          <span>Estacionamiento (Tarifa única)</span>
                        </li>
                      )}
                    </ul>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      disabled={diasCalculo === 0}
                      className="mt-10 w-full bg-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:bg-indigo-500 transition-all duration-300 active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
                    >
                      Reservar espacio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VENTANA MODAL DE CONFIRMACIÓN (SaaS Estándar) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl ring-1 ring-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="size-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-5 font-bold ring-8 ring-emerald-50/50">
              <svg
                className="size-8"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
              ¡Reserva Exitosa!
            </h3>
            <p className="text-slate-500 mb-6 text-sm">
              Tu solicitud para{" "}
              <span className="font-semibold text-indigo-600">
                Espacio Nómada
              </span>{" "}
              ha sido procesada correctamente.
            </p>

            {/* Resumen del ticket estilo recibo */}
            <div className="bg-slate-50 rounded-2xl p-6 text-left text-sm space-y-3 text-slate-600 mb-8 border border-slate-200">
              <div className="flex justify-between items-start">
                <span className="font-medium text-slate-900">Espacio</span>
                <span className="text-right">
                  {tipoEspacio === 15
                    ? "Escritorio Compartido"
                    : "Oficina Privada"}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="font-medium text-slate-900">Duración</span>
                <span className="text-right">
                  {diasCalculo} {diasCalculo === 1 ? "día" : "días"}
                </span>
              </div>

              {(monitor || estacionamiento) && (
                <div className="flex justify-between items-start">
                  <span className="font-medium text-slate-900">Extras</span>
                  <span className="text-right">
                    {[monitor && "Monitor", estacionamiento && "Parking"]
                      .filter(Boolean)
                      .join(", ")}
                  </span>
                </div>
              )}

              <div className="border-t border-slate-200/80 mt-4 pt-4 flex justify-between items-center font-bold text-base text-slate-900">
                <span>Total Confirmado</span>
                <span className="text-indigo-600 text-lg">
                  ${totalEstimado} USD
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-slate-900 text-white font-semibold py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-md active:scale-95"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
