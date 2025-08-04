export const HandinProject = () => {
  return (
    <div className="h-screen w-full bg-indigo-500/95 p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Handin.pro
          </h1>
          <p className="text-sm md:text-base text-indigo-100 mb-2">
            Plataforma de Enseñanza y Eventos
          </p>
          <div className="inline-block bg-indigo-600/40 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-indigo-100 text-sm">
              🎓 Sistema de Gestión
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center flex-1 min-h-0">
          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-base font-semibold text-white mb-2">
                Sobre Handin
              </h3>
              <p className="text-indigo-100 text-xs leading-relaxed">
                Plataforma completa de enseñanza online y gestión de eventos.
                Similar a Udemy, permite crear cursos y vender tickets para
                eventos presenciales y virtuales.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Funcionalidades
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">📚</span>
                  <span className="text-indigo-100 text-xs">
                    Creación de Cursos
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🎫</span>
                  <span className="text-indigo-100 text-xs">
                    Venta de Tickets
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🌐</span>
                  <span className="text-indigo-100 text-xs">
                    Eventos Virtuales
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🏢</span>
                  <span className="text-indigo-100 text-xs">
                    Eventos Presenciales
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
                    src="http://teacher.handin.pro/"
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-lg bg-white shadow-inner"
                    title="Handin.pro Teacher Panel"
                    loading="lazy"
                    scrolling="no"
                  />
                </div>

                <div className="text-center mt-2">
                  <p className="text-indigo-100 text-xs">
                    Panel de gestión para profesores
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-3">
                Acceder a la plataforma
              </h4>
              <div className="space-y-2">
                <a
                  href="http://teacher.handin.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 no-underline"
                >
                  <span>👨‍🏫</span>
                  <span>Panel Profesor</span>
                </a>
                <a
                  href="https://handin.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 no-underline"
                >
                  <span>🌐</span>
                  <span>Sitio Principal</span>
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Tipos de Contenido
              </h4>
              <div className="grid grid-cols-1 gap-1 text-xs">
                <span className="bg-indigo-600/40 text-indigo-100 px-2 py-1 rounded text-center">
                  Cursos Online
                </span>
                <span className="bg-indigo-600/40 text-indigo-100 px-2 py-1 rounded text-center">
                  Webinars
                </span>
                <span className="bg-indigo-600/40 text-indigo-100 px-2 py-1 rounded text-center">
                  Conferencias
                </span>
                <span className="bg-indigo-600/40 text-indigo-100 px-2 py-1 rounded text-center">
                  Talleres
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Características
              </h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs">💳</span>
                  <span className="text-indigo-100 text-xs">
                    Pagos integrados
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">📊</span>
                  <span className="text-indigo-100 text-xs">Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">👥</span>
                  <span className="text-indigo-100 text-xs">
                    Gestión de usuarios
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/20 inline-block">
            <p className="text-purple-100 text-xs mb-1">
              Desarrollado en equipo - Plataforma educativa y de eventos
              completa
            </p>
            <p className="text-purple-200 text-xs">© 2025 Handin.pro Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};
