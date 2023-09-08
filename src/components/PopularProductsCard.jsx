import { star } from "../assets/icons";

const PopularProductsCard = ({ product }) => {
  const { name, imgURL, price } = product;
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl text-slate-gray font-montserrat leading-normal">
          4.5
        </p>
      </div>
      <h3 className="text-2xl font-semibold font-palanquin leading-normal mt-2">
        {name}
      </h3>
      <p className="text-lg font-semibold font-montserrat text-coral-red leading-normal mt-2">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
