import { Fragment } from "react";

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
  ];

  return (
    <section className="p-4">
      <h2 className="font-semibold font-abdu text-2xl md:text-3xl lg:text-5xl mb-5 text-center lg:mb-14 ">
        Renewed-You vs In-Office Therapy
      </h2>
      <div className=" px-6 grid grid-cols-3 gap-4 xl:px-20 xl:gap-1 justify-center">
        {/* Three columns */}
        <div className=" "></div> {/* Empty first column */}
        <div className="  font-bold text-center  mb-5">Renewed You</div>
        <div className="grid  font-bold text-center  mb-5">In-Office</div>
        {features.map((feature) => (
          <Fragment key={feature.name}>
            <div className="grid text-[18px] md:text-xl font-medium">
              {feature.name}
            </div>
            <div className="grid text-center">
              {/* Checkmark/Cross for Renewed You */}
              {feature.online ? (
                <span className="checkmark text-green-500 text-xl rounded-xl">
                  &#10004;
                </span>
              ) : (
                <span className="cross text-red-500 text-center ">
                  &#10006;
                </span>
              )}
            </div>
            <div className="grid-item  text-center">
              {/* Checkmark/Cross for In-Office */}
              {feature.traditional ? (
                <span className="checkmark text-green-500 text-xl">
                  &#10004;
                </span>
              ) : (
                <span className="cross text-red-500 text-xl">&#10006;</span>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default TherapyComparison;
