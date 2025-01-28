import React from "react";
import Icon from "../svg/Icon";
import Icons from "../svg/Icons";
import Iconss from "../svg/Iconss";

const steps = [
  {
    icon: <Icon />,
    text: "Download the app"
  },
  {
    icon: <Icons />,
    text: "Select your groceries"
  },
  {
    icon: <Iconss />,
    text: "Get ready to open the door"
  }
];

const AppInstructions = () => {
  return (
    <div className="bg-green-900 text-white py-4 px-2 md:py-10 md:px-4 flex flex-row flex-wrap justify-center items-center gap-1 md:gap-32 lg:gap-64">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center md:w-auto">
          <div className="md:p-4 rounded-lg">
            {step.icon}
          </div>
          <p className="mt-1 md:mt-2 font-semibold text-xs md:text-base">
            {step.text.split(' ').map((word, index) => (
              <React.Fragment key={index}>
                {word}{index === step.text.split(' ').length - 2 ? <br /> : ' '}
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AppInstructions;
