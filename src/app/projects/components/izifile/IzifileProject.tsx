export const IzifileProject = () => {
  return (
    <div className="h-screen w-full bg-blue-500/80 p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            IziFile
          </h1>
          <p className="text-sm md:text-base text-blue-100 mb-2">
            Transferencia Segura de Archivos
          </p>
          <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-blue-100 text-sm">🚀 Versión Demo</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center flex-1 min-h-0">
          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-base font-semibold text-white mb-2">
                Sobre IziFile
              </h3>
              <p className="text-blue-100 text-xs leading-relaxed">
                Solución completa para transferencia de archivos segura mediante
                protocolos SFTP y SSH. Integra NodeJS, Dart, MongoDB y Flutter.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Características
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🔒</span>
                  <span className="text-blue-100 text-xs">
                    Seguridad SFTP/SSH
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">⚡</span>
                  <span className="text-blue-100 text-xs">Backend NodeJS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">📱</span>
                  <span className="text-blue-100 text-xs">App Flutter</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20 shadow-2xl">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src="https://izifile.eduardolucas.lat/"
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-xl bg-white shadow-inner"
                    title="IziFile Demo"
                    loading="lazy"
                    scrolling="no"
                  />
                </div>

                <div className="text-center mt-4">
                  <p className="text-blue-100 text-sm">
                    Vista previa en tiempo real
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-3">
                Ir a la página web
              </h4>
              <div className="space-y-2">
                <a
                  href="https://izifile.eduardolucas.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 no-underline"
                >
                  <span>🌐</span>
                  <span>Visitar IziFile</span>
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Tecnologías
              </h4>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <span className="bg-blue-500/30 text-blue-100 px-2 py-1 rounded text-center">
                  NodeJS
                </span>
                <span className="bg-blue-500/30 text-blue-100 px-2 py-1 rounded text-center">
                  Dart
                </span>
                <span className="bg-blue-500/30 text-blue-100 px-2 py-1 rounded text-center">
                  MongoDB
                </span>
                <span className="bg-blue-500/30 text-blue-100 px-2 py-1 rounded text-center">
                  Flutter
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 inline-block">
            <p className="text-blue-100 text-sm mb-2">
              Facilita tu conexión a servidores con máxima seguridad y
              simplicidad
            </p>
            <p className="text-blue-200 text-xs">
              © 2025 Eduardo Lucas - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
