const Button = ({ label, iconURL, alt, style }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full bg-coral-red  text-white border border-coral-red ${style}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt={alt} className="w-5 h-5 ml-2 rounded-full" />
      )}
    </button>
  );
};

export default Button;
