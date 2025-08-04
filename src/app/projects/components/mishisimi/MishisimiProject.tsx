export const MishisimiProject = () => {
  return (
    <div className="h-screen w-full bg-amber-600/80 p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Mishisimi
          </h1>
          <p className="text-sm md:text-base text-amber-100 mb-2">
            Aprende Quechua con IA
          </p>
          <div className="inline-block bg-amber-600/40 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-amber-100 text-sm">
              🤖 Powered by Gemini AI
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start flex-1 min-h-0">
          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-base font-semibold text-white mb-2">
                Sobre Mishisimi
              </h3>
              <p className="text-amber-100 text-xs leading-relaxed">
                Aplicación móvil educativa para enseñar quechua usando
                inteligencia artificial. Experiencia interactiva con
                procesamiento de lenguaje natural y Gemini AI.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Características
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🧠</span>
                  <span className="text-amber-100 text-xs">
                    Inteligencia Artificial
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">💬</span>
                  <span className="text-amber-100 text-xs">
                    Chat Interactivo
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🎯</span>
                  <span className="text-amber-100 text-xs">
                    Aprendizaje Personalizado
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🌍</span>
                  <span className="text-amber-100 text-xs">
                    Preservación Cultural
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
                    src="http://mishisimi.eduardolucas.lat/"
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-lg bg-white shadow-inner"
                    title="Mishisimi - Aprende Quechua"
                    loading="lazy"
                    scrolling="no"
                  />
                </div>

                <div className="text-center mt-2">
                  <p className="text-amber-100 text-xs">
                    Aplicación web interactiva
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-3">
                Probar la App
              </h4>
              <div className="space-y-2">
                <a
                  href="http://mishisimi.eduardolucas.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 no-underline"
                >
                  <span>🎓</span>
                  <span>Empezar a Aprender</span>
                </a>
                <a
                  href="http://mishisimi.eduardolucas.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 no-underline"
                >
                  <span>📱</span>
                  <span>Ver Demo</span>
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Funcionalidades
              </h4>
              <div className="grid grid-cols-1 gap-1 text-xs">
                <span className="bg-amber-700/40 text-amber-100 px-2 py-1 rounded text-center">
                  Lecciones IA
                </span>
                <span className="bg-amber-700/40 text-amber-100 px-2 py-1 rounded text-center">
                  Chat Quechua
                </span>
                <span className="bg-amber-700/40 text-amber-100 px-2 py-1 rounded text-center">
                  Ejercicios
                </span>
                <span className="bg-amber-700/40 text-amber-100 px-2 py-1 rounded text-center">
                  Progreso
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h4 className="text-sm font-semibold text-white mb-2">
                Stack Tecnológico
              </h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs">📱</span>
                  <span className="text-amber-100 text-xs">Flutter Mobile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">🚀</span>
                  <span className="text-amber-100 text-xs">NestJS Backend</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">🐘</span>
                  <span className="text-amber-100 text-xs">PostgreSQL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">🤖</span>
                  <span className="text-amber-100 text-xs">Gemini AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/20 inline-block">
            <p className="text-amber-100 text-xs mb-1">
              Preservando la cultura quechua a través de la tecnología moderna
            </p>
            <p className="text-amber-200 text-xs">
              © 2025 Mishisimi - Aprendizaje Cultural con IA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
