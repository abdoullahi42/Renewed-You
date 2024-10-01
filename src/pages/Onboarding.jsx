import { useState } from "react";
import Specialization from "../component/Specialization";
import PersonalInfo from "../component/PersonalInfo";
import ProfessionalInfo from "../component/ProfessionalInfo";
import AdditionalInfo from "../component/AdditionalInfo";
import UploadDocs from "../component/UploadDocs";

function Onboarding() {
  const [step, setStep] = useState(1);

  function handleNext() {
    setStep(() => step + 1);
  }

  function handlePrevious() {
    setStep(() => step - 1);
  }

  return (
    <div className="bg-[#F5F5DC] text-[#4A4A4A] py-8">
      <h3 className="text-xl lg:text-[32px] leading-[1.5] text-center lg:w-2/3 mx-auto pt-7 font-normal mb-7">
        Join thousands of therapists who are earning more with Renewed-You!
      </h3>
      <p className="text-[18px] text-center lg:w-2/3 mx-auto mb-7">
        Select an option to get started
      </p>
      <div className="bg-white w-2/3 lg:mx-auto p-8 px-16">
        <div className="mb-5">
          {step === 1 && <Specialization />}
          {step === 2 && <PersonalInfo />}
          {step === 3 && <ProfessionalInfo />}
          {step === 4 && <AdditionalInfo />}
          {step === 5 && <UploadDocs />}
        </div>
        <div className="flex justify-end gap-11  ">
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="bg-[#F9A034] text-black py-2 px-4 rounded-[32px] text-[18px] font-normal border border-red-600 "
            >
              Previous
            </button>
          )}
          <button
            onClick={handleNext}
            className="bg-[#F9A034] text-black py-2 px-4 rounded-[32px] text-[18px] font-normal border border-red-600"
          >
            {step !== 5 ? "Next" : "Review"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
