import { FaExclamation } from "react-icons/fa";
import { useState } from "react";
const questions = [
  {
    quest: "What is your relationship status?",
    option: [
      "Single",
      "In a relationship",
      "Married",
      "Divorced",
      "Widowed",
      "Other",
    ],
  },
  {
    quest: "How important is religion in your life?",
    option: [
      "Very important",
      "Important",
      "Somewhat important",
      "Not important at all",
    ],
  },
  {
    quest: "Which religion do you identify with?",
    option: [
      "Christianity",
      "Islam",
      "Judaism",
      "Hinduism",
      "Buddhism",
      "Other",
      "Prefer not to say",
    ],
  },
  {
    quest: "Do you consider yourself to be spiritual?",
    option: ["yes", "No"],
  },
  {
    quest: "Have you ever been in a therapy before?",
    option: ["yes", "No"],
  },
  {
    quest: "What led you to consider therapy today?",
    inputType: "checkbox",
    checkboxOption: [
      "I’ve been feeling depressed",
      "I feel anxious or overwhelmed",
      "My mood is interfering with my job/school performance",
      "I struggle with building or maintaining relationships",
      "I can’t find purpose and meaning in my life",
      "I am grieving",
      "I have experienced trauma",
      "I need to talk through a specific challenge",
      "I want to gain self confidence",
      "I want to improve myself but I don’t know where to start",
      "Recommended to me (friend, family, doctor)",
      "Just exploring",
      "other",
    ],
  },
  {
    quest: "What are your expectations from your therapist? A therapist who...",
    checkboxOption: [
      "Listens",
      "Explores my past",
      "Teaches me new skills",
      "Challenges my beliefs",
      "Assigns me homework",
      "Guides me to set goals",
      "Proactively checks in with me",
      "Other",
      "I don’t know",
    ],
    inputType: "box",
  },
  {
    quest: "How would you rate your current physical health?",
    option: ["Good", "Fair", "Poor"],
  },
  {
    quest: "How would you rate your current eating habits?",
    option: ["Good", "Fair", "Poor"],
  },
];

function ClientQuestionnair2({ onNext }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }else {
      onNext();
    }
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="lg:w-10/12 mx-auto my-8">
      <div
        className="h-fit py-4 w-3/5 mx-auto rounded-lg"
        style={{ boxShadow: "-2px -2px 4px 0px #00000040" }}
      >
        {questions[currentStep] && (
          <div className=" w-11/12 mx-auto py-4">
            <h5 className="text-center text-xl mb-8">{questions[currentStep].quest}</h5>

            {questions[currentStep].option &&
              questions[currentStep].option.map((option, index) => (
                <div
                  key={index}
                  className="mb-4 bg-[#70E1B9]  rounded-[80px] w-10/12 mx-auto"
                  onClick={handleNext}
                >
                  <button className="  text-[#222020] py-3 px-5 ">{option}</button>
                </div>
              ))}

            {questions[currentStep].inputType === "checkbox" && (
              <div className=" w-10/12 mx-auto">
                {questions[currentStep].checkboxOption.map((option, index) => (
                  <div key={index} className="flex gap-3 mb-1">
                    <input type="checkbox" />
                    <p>{option}</p>
                  </div>
                ))}

                <div className=" flex justify-end" onClick={handleNext}>
                  <button className="bg-[#70E1B9] text-[#222020] w-1/4  py-2 px-4 rounded-[80px] ">
                    Next
                  </button>
                </div>
                <div className="flex items-center mt-14 gap-6 py-3 px-4 bg-[#CFEDE2] w-10/12 mx-auto ">
                  <div className="flex items-center border border-[#5336A7] p-[1px] rounded-full w-7">
                    <div className="text-[#5336A7] w-12 text-center"> <FaExclamation color="#5336A7"/> </div>
                  </div>
                  <p className="text-sm">
                    This is a preliminary question to understand what you are
                    going through, you will have more opportunities to explain
                    or elaborate on your feelings and challenges later on.
                  </p>
                </div>
              </div>
            )}

            {questions[currentStep].inputType === "box" && (
              <div className=" w-10/12 mx-auto">
                {questions[currentStep].checkboxOption.map((option, index) => (
                  <div key={index} className="flex gap-3 mb-1">
                    <input type="checkbox" />
                    <p>{option}</p>
                  </div>
                ))}
                <div className=" flex justify-end" onClick={handleNext}>
                  <button className="bg-[#70E1B9] text-[#222020]  w-1/4  py-2 px-4 rounded-[80px] ">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ClientQuestionnair2;
