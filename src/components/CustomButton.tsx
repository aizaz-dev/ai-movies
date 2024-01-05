import React from "react";

const CustomButton = ({ type, title }) => {
  let classes = "";
  if (type === "filledBlue") {
    classes = "bg-primary text-[#fff] [font-family:Outfit-Bold,sans-serif]";
  } else if (type === "filledWhite") {
    classes = "bg-[#fff] [font-family:Outfit-Bold,sans-serif]";
  } else if (type === "outlinedBlue") {
    classes =
      "bg-transparent border-[3px] border-white [font-family:Outfit-Regular]";
  } else if (type === "outlinedWhite") {
    classes = "bg-[#fff] border-[3px] border-primary [font-family:Outfit-Bold]";
  }

  return (
    <div
      className={`rounded-[10px] px-[24px] py-[8px] text-sm w-fit h-fit ${classes}`}
    >
      {title}
    </div>
  );
};

export default CustomButton;
