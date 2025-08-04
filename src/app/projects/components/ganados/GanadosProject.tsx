export const GanadosProject = () => {
  return (
    <div className="h-screen w-full bg-emerald-600/90 p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Sistema Ganados
          </h1>
          <p className="text-sm md:text-base text-emerald-100 mb-2">
            Gestión Integral de Ganado
          </p>
          <div className="inline-block bg-emerald-600/40 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-emerald-100 text-sm">
              🐄 Plataforma de Gestión
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start flex-1 min-h-0">
          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-base font-semibold text-white mb-2">
                Sobre el Sistema
              </h3>
              <p className="text-emerald-100 text-xs leading-relaxed">
                Plataforma completa para la gestión de ganado. Maneja
                proveedores, transportistas, compras, ventas, pagos y el
                historial completo del negocio ganadero.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Módulos Principales
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">👥</span>
                  <span className="text-emerald-100 text-xs">
                    Gestión Proveedores
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🚛</span>
                  <span className="text-emerald-100 text-xs">
                    Control Transportistas
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🐂</span>
                  <span className="text-emerald-100 text-xs">
                    Registro de Ganado
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">💰</span>
                  <span className="text-emerald-100 text-xs">
                    Control de Pagos
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-3xl">
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-3 border border-white/20 shadow-2xl">
                <div className="flex space-x-2 mb-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>

                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src="https://ganados.eduardolucas.lat/login.php"
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-lg bg-white shadow-inner"
                    title="Sistema de Gestión de Ganados"
                    loading="lazy"
                    scrolling="no"
                  />
                </div>

                <div className="text-center mt-2">
                  <p className="text-emerald-100 text-xs">
                    Sistema de login y gestión
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-3">
                Acceder al Sistema
              </h4>
              <div className="space-y-2">
                <a
                  href="https://ganados.eduardolucas.lat/login.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 no-underline"
                >
                  <span>🔐</span>
                  <span>Iniciar Sesión</span>
                </a>
                <a
                  href="https://ganados.eduardolucas.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 no-underline"
                >
                  <span>🌐</span>
                  <span>Ver Sistema</span>
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Operaciones
              </h4>
              <div className="grid grid-cols-1 gap-1 text-xs">
                <span className="bg-emerald-600/40 text-emerald-100 px-2 py-1 rounded text-center">
                  Compra de Ganado
                </span>
                <span className="bg-emerald-600/40 text-emerald-100 px-2 py-1 rounded text-center">
                  Venta de Ganado
                </span>
                <span className="bg-emerald-600/40 text-emerald-100 px-2 py-1 rounded text-center">
                  Registro de Pagos
                </span>
                <span className="bg-emerald-600/40 text-emerald-100 px-2 py-1 rounded text-center">
                  Control Ganancias
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Tecnologías
              </h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs">🐘</span>
                  <span className="text-emerald-100 text-xs">PHP Backend</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">🗄️</span>
                  <span className="text-emerald-100 text-xs">
                    MySQL Database
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">⚡</span>
                  <span className="text-emerald-100 text-xs">JavaScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">🎨</span>
                  <span className="text-emerald-100 text-xs">HTML & CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/20 inline-block">
            <p className="text-emerald-100 text-xs mb-1">
              Sistema completo de gestión ganadera - Control total del negocio
            </p>
            <p className="text-emerald-200 text-xs">
              © 2025 Eduardo Lucas - Sistema Ganados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
