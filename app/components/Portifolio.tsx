export default function Portifolio(){
    return(
        <section className="p-8">
      {/* Nicola */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="h-[1px] w-full bg-[#CCCCCC]" />
        <h2 className="font-bold text-lg whitespace-nowrap">My Portifolio</h2>
        <div className="h-[1px] w-full bg-[#CCCCCC]" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white">
          <img className="w-full" src="assets/pic02.jpg.svg" alt="pic02" />
          <div className="p-6">
            <h2 className="font-bold mx-2 my-4">Ipsum feugiat et dolor</h2>
            <p className="text-gray-400 mx-2 my-2">
              Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
              veroeros lorem blandit adipiscing et feugiat phasellus tempus
              dolore ipsum lorem dolore.
            </p>
            <a href="#">
              <button className="w-full bg-gray-800 text-white text-sm font-bold py-2 rounded">
                Find out more
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white">
          <img className="w-full" src="assets/pic03.jpg.svg" alt="pic02" />
          <div className="p-6">
            <h2 className="font-bold mx-2 my-4">Sed etiam lorem nulla</h2>
            <p className="text-gray-400 mx-2 my-2">
              Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
              veroeros lorem blandit adipiscing et feugiat phasellus tempus
              dolore ipsum lorem dolore.
            </p>
            <a href="#">
              <button className="w-full bg-gray-800 text-white text-sm font-bold py-2 rounded">
                Find out more
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white">
          <img className="w-full" src="assets/pic04.jpg.svg" alt="pic02" />
          <div className="p-6">
            <h2 className="font-bold mx-2 my-4">Consequat et tempus</h2>
            <p className="text-gray-400 mx-2 my-2">
              Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
              veroeros lorem blandit adipiscing et feugiat phasellus tempus
              dolore ipsum lorem dolore.
            </p>
            <a href="#">
              <button className="w-full bg-gray-800 text-white text-sm font-bold py-2 rounded">
                Find out more
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white">
          <img className="w-full" src="assets/pic05.jpg.svg" alt="pic02" />
          <div className="p-6">
            <h2 className="font-bold mx-2 my-4">Blandit sed adipiscing</h2>
            <p className="text-gray-400 mx-2 my-2">
              Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
              veroeros lorem blandit adipiscing et feugiat phasellus tempus
              dolore ipsum lorem dolore.
            </p>
            <a href="#">
              <button className="w-full bg-gray-800 text-white text-sm font-bold py-2 rounded">
                Find out more
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white">
          <img className="w-full" src="assets/pic06.jpg.svg" alt="pic02" />
          <div className="p-6">
            <h2 className="font-bold mx-2 my-4">Etiam nisl consequat</h2>
            <p className="text-gray-400 mx-2 my-2">
              Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
              veroeros lorem blandit adipiscing et feugiat phasellus tempus
              dolore ipsum lorem dolore.
            </p>
            <a href="#">
              <button className="w-full bg-gray-800 text-white text-sm font-bold py-2 rounded">
                Find out more
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white">
          <img className="w-full" src="assets/pic07.jpg.svg" alt="pic02" />
          <div className="p-6">
            <h2 className="font-bold mx-2 my-4">Dolore nisl feugiat</h2>
            <p className="text-gray-400 mx-2 my-2">
              Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
              veroeros lorem blandit adipiscing et feugiat phasellus tempus
              dolore ipsum lorem dolore.
            </p>
            <a href="#">
              <button className="w-full bg-gray-800 text-white text-sm font-bold py-2 rounded">
                Find out more
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}