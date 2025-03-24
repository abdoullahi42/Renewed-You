import { useState } from "react";
import Specialization from "../component/Specialization";
import PersonalInfo from "../component/PersonalInfo";
import ProfessionalInfo from "../component/ProfessionalInfo";
import AdditionalInfo from "../component/WorkAvailability";
import CreateAccount from "../component/CreateAccount";


function Onboarding() {
  const [step, setStep] = useState(0); // Start from 0 for array indexing

  // Array of components for each step
  const steps = [
    Specialization,
    PersonalInfo,
    ProfessionalInfo,
    AdditionalInfo,
    CreateAccount,
  ];

  const CurrentStepComponent = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="bg-[#F5F5DC] text-[#4A4A4A] py-4 lg:py-8">
      {/* Heading */}
      <h3 className="text-lg lg:text-[32px] leading-[1.5] text-center w-5/6 lg:w-2/3 mx-auto pt-4 lg:pt-7 font-normal mb-4 lg:mb-7">
        Join thousands of therapists who are earning more with Renewed-You!
      </h3>

      {/* Subheading */}
      <p className="text-base lg:text-[18px] text-center w-5/6 lg:w-2/3 mx-auto mb-4 lg:mb-7">
        Select an option to get started
      </p>

      {/* Form Container */}
      <div className="bg-white w-11/12 sm:w-5/6 lg:w-2/3 mx-auto p-4 sm:p-6 lg:p-8 lg:px-16 rounded-lg shadow-md">
        {/* Current Step Component */}
        <div className="mb-5">
          <CurrentStepComponent handleNext={handleNext}/>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 sm:gap-11 ">
          {step > 0 && (
           
             <button
             onClick={handlePrevious}
             className="bg-[#F9A034] text-black py-2 px-4 rounded-[32px] text-base lg:text-[18px] font-normal  w-full sm:w-auto"
           >
             Previous
           </button>
           
          )}
          {step > 0 && step !== steps.length - 1 && (<button  className="bg-[#F9A034] text-black py-2 px-4 rounded-[32px] text-base lg:text-[18px] font-normal  w-full sm:w-auto" onClick={handleNext}>Next</button>)}
          {step === steps.length - 1 && (
            <button
              className="bg-[#F9A034] text-black py-2 px-4 rounded-[32px] text-base lg:text-[18px] font-normal  w-full sm:w-auto"
             
            >
              Review
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Onboarding;