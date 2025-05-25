interface PortifolioTipes{
  imagePath: string;
  imageTitle: string;
  imageDescri: string;

}

function PortifolioEstrutura({ imagePath, imageTitle, imageDescri}:PortifolioTipes) {
  return (
  <div>
        <div className="bg-white">
          <img className="w-full" src={imagePath} alt="pic02" />
          <div className="p-6">
            <h2 className="font-bold mx-2 my-4">{imageTitle}</h2>
            <p className="text-gray-400 mx-2 my-2">{imageDescri}</p>
            <a href="#">
              <button className="w-full bg-gray-800 text-white text-sm font-bold py-2 rounded">
                Find out more
              </button>
            </a>
          </div>
        </div>
  </div>
  );
}

export default function Portifolio() {
  const artes = [
    { imagePath: '/assets/pic02.jpg.svg', imageTitle: 'Ipsum feugiat et dolor', imageDescri: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',},
    { imagePath: '/assets/pic03.jpg.svg', imageTitle: 'Sed etiam lorem nulla', imageDescri: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',},
    { imagePath: '/assets/pic04.jpg.svg', imageTitle: 'Consequat et tempus', imageDescri: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',},
    { imagePath: '/assets/pic05.jpg.svg', imageTitle: 'Blandit sed adipiscing', imageDescri: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',},
    { imagePath: '/assets/pic06.jpg.svg', imageTitle: 'Etiam nisl consequat', imageDescri: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',},
    { imagePath: '/assets/pic07.jpg.svg', imageTitle: 'Dolore nisl feugiat', imageDescri: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',},
  
  ];

  return (
    <section className="p-8">
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="h-[1px] w-full bg-[#CCCCCC]" />
        <h2 className="font-bold text-lg whitespace-nowrap">My Portifolio</h2>
        <div className="h-[1px] w-full bg-[#CCCCCC]" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {artes.map((arte) => (<PortifolioEstrutura imagePath={arte.imagePath} imageTitle={arte.imageTitle} imageDescri={arte.imageDescri}/>))}
      </div>
    </section>
  );
}
