import { star } from "../assets/icons";

const ReviewCard = ({ review }) => {
  const { imgURL, customerName, rating, feedback } = review;

  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        className="rounded-full object-cover"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center items-center gap-2 mt-3">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-slate-gray text-xl">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin font-bold text-center text-3xl">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
