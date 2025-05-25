export default function Blog() {
  return (
    <section className="p-8">
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="h-[1px] w-full bg-[#CCCCCC]" />
        <h2 className="font-bold text-lg whitespace-nowrap">The Blog</h2>
        <div className="h-[1px] w-full bg-[#CCCCCC]" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-white">
          <img
            className="w-full h-64"
            src="assets/Bisonho.jpg"
            alt="Imagem_do_bisonho"
          />
          <div className="p-6">
            <h3 className="font-bold text-xl">O Olhar de Ta Pegah</h3>
            <p className="text-gray-300 font-light italic text-sm">
              Postado a 1 mês atras
            </p>
            <p className="text-gray-400 my-8 text-sm font-light">
              TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
              TEXT
            </p>
            <div className="flex gap-4">
              <button className="bg-[#D52349] rounded py-2 px-8 text-white font-semibold text-sm">
                Continue Lendo
              </button>
              <button className="bg-[#252122] rounded py-2 px-8 text-white font-semibold text-sm">
                20 comentarios
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <img
            className="w-full h-64"
            src="assets/Jaguara.jpg"
            alt="Imagem_do_jaguara"
          />
          <div className="p-6">
            <h3 className="font-bold text-xl">
              O Olhar do Jaguarão da craudete
            </h3>
            <p className="text-gray-300 font-light italic text-sm">
              Postado a 1 mês atras
            </p>
            <p className="text-gray-400 my-8 text-sm font-light">
              TEXT2 TEXT2 TEXT2 TEXT2 TEXT2 TEXT2 TEXT2 TEXT2 TEXT2 TEXT2 TEXT2
              TEXT2
            </p>
            <div className="flex gap-4">
              <button className="bg-[#D52349] rounded py-2 px-8 text-white font-semibold text-sm">
                Continue Lendo
              </button>
              <button className="bg-[#252122] rounded py-2 px-8 text-white font-semibold text-sm">
                20 comentarios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
