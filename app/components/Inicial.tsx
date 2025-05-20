export default function(){
    return(
        <section className="bg-white p-8">
      {/* Lourenço */}
      <div className="grid font-sans p-6 lg:grid-cols-3 gap-10">
        <div className="flex justify-center items-center flex-col gap-4">
          <img src="./assets/engrenagem.svg" alt="" />
          <p className="text-xl font-bold">Ipsum consequat</p>
          <p className="text-xs text-center font-light text-[#5D5D5D]">
            Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et
            magna tempus.
          </p>
          <div className="h-[1px] bg-gray-300 w-full m-4 lg:invisible" />
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          <img src="./assets/raio.svg" alt="" />
          <p className="text-xl font-bold">Magna etiam dolor</p>
          <p className="text-xs text-center font-light text-[#5D5D5D]">
            Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et
            magna tempus.
          </p>
          <div className="h-[1px] bg-gray-300 w-full m-4 lg:invisible" />
        </div>
        <div className="flex items-center flex-col gap-4">
          <img src="./assets/estrela.svg" alt="" />
          <p className="text-xl font-bold">Tempus adipiscing</p>
          <p className="text-xs text-center font-light text-[#5D5D5D]">
            Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et
            magna tempus.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-center">
        <button className="py-2 text-center rounded font-semibold text-white bg-[#D52349] px-5">
          Get Started
        </button>
        <button className="py-2 text-center rounded font-semibold text-white bg-black md:px-5">
          Learn More
        </button>
      </div>
    </section>
    )
}