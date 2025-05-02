import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];
function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          necessitatibus laboriosam dicta saepe, ex provident et similique unde
          nostrum rem.
        </p>
        <div className="mt-10">
          <Link to={"/products"} className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>

      <div className="hidden h-[26rem] lg:carousel carousel-vertical p-4 space-y-4 bg-neutral rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item h-4/5 ">
              <img
                src={image}
                className="rounded-box h-full w-[100rem] object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
