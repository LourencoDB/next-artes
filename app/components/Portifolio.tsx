import PortifolioEstrutura from "./PortifolioEstrutura";

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
        {artes.map((arte) => (<PortifolioEstrutura key={arte.imagePath} imagePath={arte.imagePath} imageTitle={arte.imageTitle} imageDescri={arte.imageDescri}/>))}
      </div>
    </section>
  );
}
