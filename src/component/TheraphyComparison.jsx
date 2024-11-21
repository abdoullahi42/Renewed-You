import { Fragment } from "react";
import { FaCheck } from "react-icons/fa6";

const TherapyComparison = () => {
  const features = [
    { name: "Convenience and Flexibility", online: true, traditional: false },
    { name: "Reduced Cost", online: true, traditional: false },
    { name: "Wider Therapist Selection", online: true, traditional: false },
    { name: "Message anytime", online: true, traditional: false },
    {
      name: "Access to therapy from anywhere",
      online: true,
      traditional: false,
    },
    { name: "Easy scheduling", online: true, traditional: false },
    { name: "In-office visit", online: false, traditional: true },
    { name: "", online: null, traditional: null }, // Last empty row
  ];

  return (
    <section className="p-4 lg:p-10 bg-[#F5F5DC]">
      <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl mb-5 text-center lg:mb-14">
        Renewed-You vs In-Office Therapy
      </h2>

      {/* Header Row */}
      <div className="grid grid-cols-3 gap-8 max-w-screen-lg mx-auto">
        <div className="lg:mr-10"></div> {/* Empty column for alignment */}
        <div className="text-center font-normal text-lg md:text-xl bg-[#B5EAD7] text-[#2D2A2A] py-2 lg:py-5 md:w-40 md:mx-auto rounded-tl-[10px] rounded-tr-[10px]">
          Renewed-You
        </div>
        <div className="font-medium text-center text-lg md:text-xl py-2 lg:py-5 xl:pr-36">
          In-office
        </div>
      </div>

      {/* Feature Rows */}
      {features.map((feature, index) => {
        const isEmptyRow =
          !feature.name &&
          feature.online === null &&
          feature.traditional === null;
        const isLastRow = index === features.length - 1;

        return (
          <div
            key={index}
            className={`grid grid-cols-3 gap-8 gap-x-11 md:gap-x-0 max-w-screen-lg mx-auto ${
              isLastRow ? "" : "border-b border-[#606060]"
            }`}
          >
            {/* Feature Name Column */}
            <div className="flex items-center justify-center md:justify-start md:px-4 lg:pl-0 text-[16px] md:text-lg font-medium lg:mr-24 lg:text-nowrap py-4">
              {feature.name}
            </div>

            {/* Renewed-You Column */}
            <div
              className={`flex items-center justify-center py-2 md:w-40 md:mx-auto bg-white ${
                isLastRow ? "rounded-bl-lg rounded-br-lg py-6 lg:py-8" : ""
              }`}
            >
              {!isEmptyRow && (
                <div className="py-[2px] px-2 bg-[#C5F0EF] rounded-sm">
                  {feature.online ? (
                    <span className="text-[#358886] text-xl">
                      <FaCheck />
                    </span>
                  ) : (
                    <span className="text-[#E42020] text-xl">&#10006;</span>
                  )}
                </div>
              )}
            </div>

            {/* In-Office Column */}
            <div className="flex items-center justify-center xl:justify-start xl:pl-24 py-4">
              {!isEmptyRow && (
                <Fragment>
                  {feature.traditional ? (
                    <span className="text-[#358886] text-xl">
                      <FaCheck />
                    </span>
                  ) : (
                    <span className="text-[#E42020] text-xl">&#10006;</span>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TherapyComparison;
