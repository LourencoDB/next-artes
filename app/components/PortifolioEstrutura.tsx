interface PortifolioTipes{
  imagePath: string;
  imageTitle: string;
  imageDescri: string;

}

export default function PortifolioEstrutura({ imagePath, imageTitle, imageDescri}:PortifolioTipes) {
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