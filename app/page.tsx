import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicial from "./components/Inicial";
import Portifolio from "./components/Portifolio";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div>
      <Header/>
      <Inicial/>
      <Portifolio/>
      <Blog/>
      <Footer/>
    </div>
  );
}
