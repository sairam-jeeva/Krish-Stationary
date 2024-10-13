import React from "react";
import schoolkit from "../../Assets/schoolkit.jpeg";

const KitCard = ({
  image,
  title,
  price,
  features,
  bgColor,
  borderColor,
  textColor,
  buttonColor,
  hoverColor,
}) => {
  return (
    <div
      className={`relative h-auto w-full max-w-[350px] ${bgColor} rounded-lg ${borderColor} border-2 mt-5`}
    >
      <button
        className={`absolute ${buttonColor} ${textColor} p-2 rounded-md font-bold text-sm md:text-base lg:text-lg xl:text-xl lg:w-[130px] xl:w-[180px] lg:h-[45px] xl:h-[50px] mt-2 ml-3`}
      >
        Just at {price}
      </button>
      <div className="p-4 flex flex-col items-center">
        <img
          src={image}
          className="mix-blend-multiply w-[55%] md:w-[50%] lg:w-[45%] xl:w-[40%] mt-2"
          alt={title}
        />
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-bold mt-3">
          {title}
        </h2>
        <ul className="mt-3 flex flex-col gap-2 text-left text-gray-700 text-base md:text-lg lg:text-xl xl:text-2xl">
          {features.map((feature, index) => (
            <li className="flex items-center gap-2" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 mt-1"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button
          className={`mt-6 hover:${hoverColor} ${buttonColor} text-white font-bold w-full h-[50px] rounded-md`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

const PremiumDis = () => {
  const kits = [
    {
      image: schoolkit,
      title: "Educational Kit",
      price: "99",
      features: ["Pencil - 4", "Eraser - 2", "Notebook - 2", "Ruler - 1"],
      bgColor: "bg-purple-100",
      borderColor: "border-purple-900",
      textColor: "text-white",
      buttonColor: "bg-purple-900",
      hoverColor: "bg-purple-600",
    },
    {
      image: schoolkit, // Replace with appropriate image
      title: "Office Kit",
      price: "99",
      features: ["Pen - 4", "Notepad - 1", "Sticky Notes", "Paper Clips"],
      bgColor: "bg-green-100",
      borderColor: "border-green-900",
      textColor: "text-white",
      buttonColor: "bg-green-900",
      hoverColor: "bg-green-600",
    },
    {
      image: schoolkit, // Replace with appropriate image
      title: "Art Kit",
      price: "99",
      features: ["Color Pencils", "Sketchpad", "Paintbrush", "Watercolors"],
      bgColor: "bg-blue-100",
      borderColor: "border-blue-900",
      textColor: "text-white",
      buttonColor: "bg-blue-900",
      hoverColor: "bg-blue-600",
    },
  ];

  return (
    <div className="p-5 md:p-[30px] xl:mt-5 font-outfit" id="premiumDis">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center w-full">
        Premium Offers
      </h1>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6 lg:mt-10 md:mt-5">
        {kits.map((kit, index) => (
          <KitCard key={index} {...kit} />
        ))}
      </div>
    </div>
  );
};

export default PremiumDis;
