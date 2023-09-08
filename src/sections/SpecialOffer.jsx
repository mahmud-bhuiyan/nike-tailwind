import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      {/* image */}
      <div className="flex-1">
        <img
          src={offer}
          alt="offer image"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>

      {/* lg right side text */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Discover incredible discounts on Nike products, from top-notch
          sportswear to iconic sneakers. Elevate your style and performance with
          our limited-time offer. Shop now!
        </p>

        <p className="mt-4 lg:max-w-lg info-text">
          Nike means innovation, quality, and style. Our offer lets you
          experience the best. Don&lsquo;t miss out—grab your Nike favorites
          now!
        </p>

        <div className="mt-11 flex flex-wrap gap-8">
          <Button
            label={"Shop Now"}
            iconURL={arrowRight}
            alt={"arrowRight icon"}
          />
          <Button
            label={"Learn More"}
            style={"!bg-white !text-black/75 !border-slate-gray"}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
