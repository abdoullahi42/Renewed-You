import { FaExclamation } from "react-icons/fa";
import { useState } from "react";
const questions = [
  {
    quest: "Do you have any problems or worries about intimacy?",
    options: ["yes", "No"],
  },
  {
    quest: "When was the last time you thought about suicide?",
    options: [
      "Never",
      "over a year ago",
      "Over 3 months ago",
      "Over a months ago",
      "Over 2 weeks ago",
      "in the last 2 weeks",
    ],
  },
  {
    quest:
      "Are you currently experiencing anxiety, panic attacks or have any phobias?",
    options: ["yes", "No"],
    isCaution: true,
    caution:
      "Some symptoms of panic attacks including a racing heart, dizziness, or chest pains.",
  },
  {
    quest: "Are you currently taking any medication?",
    options: ["yes", "No"],
  },
  {
    quest: "Are you currently experiencing any chronic pain?",
    options: ["yes", "No"],
  },
  {
    quest: "How would you rate your current financial status?",
    options: ["Good", "Fair", "poor"],
  },

  {
    quest: "How would you rate your current sleeping habits?",
    options: ["Good", "Fair", "poor"],
  },
  {
    quest: "Which of the following resources would be useful for you?",
    checkboxOption: [
      "Support groups",
      "Therapy journal",
      "Worksheets",
      "Goal/habit tracking",
      "Educational webinars",
      "Other",
      "I don't know",
    ],
  },

  {
    quest:
      "If you identify as a Christian, which denomination best describe you?",
    options: [
      "Protestant",
      "Catholic",
      "Orthodox",
      "Anglican",
      "Presbyterian",
      "Baptist",
      "Lutheran",
      "Methodist",
      "Other",
      "Non-denominational",
      "Not sure",
      "Not a christian",
    ],
  },
  {
    quest:
      "In order to give your therapist the right expectations, please answer a few questions about your spiritual background. How long has your faith been important to you?",
    options: [
      "Less than a year",
      "1-3 years",
      "More than 3 years",
      "My whole life",
    ],
  },
  {
    quest: "Which best describes your prayer life?",
    options: [
      "I never pray",
      "I occasionally pray",
      "I pray daily",
      "I pray throughout my day",
    ],
  },
  {
    quest: "Which best describes the nature of the therapy you are seeking?",
    options: [
      "Mental health therapy from a Christian perspective",
      "Spiritual therapy on primarily faith-based matters",
      "Holistic therapy addressing both psychological and spiritual components",
      "Other",
    ],
  },
  {
    quest:
      "What are your preferences around the spiritual component of your therapy (check all that apply):",
    checkboxOption: [
      " I would prefer to keep our session strictly clinical",
      "I would welcome any biblical wisdom",
      "I would be open to my therapist recommending spiritual disciplines",
      "I would be interested in my therapist incorporating prayer into our sessions",
    ],
  },
  {
    quest: "How do you prefer to communicate with your therapist?",
    options: [
      "Mostly via messaging",
      "Mostly via phone or video sessions",
      "Not sure yet (decide later)",
    ],
  },
  {
    quest: "Are there any specific preference for your therapist?",
    options: [
      "Male therapist",
      "female therapist",
      "Christian-based therapist",
      "Older therapist (45+)",
      "Non-religious therapist",
    ],
  },
  {
    quest: "Please mark all that apply",
    checkboxOption: [
      "I’m a student",
      "I’m a veteran",
      "I’m disabled",
      "I’m unemployed",
      "I’m employed but my income is low",
    ],
  },
];

function ClientQuestionnair4() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
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

            {questions[currentStep].options && (
              <div>
                {questions[currentStep].options.map((option, index) => (
                  <div
                    key={index}
                    className="mb-4 bg-[#716599] rounded-[80px] w-10/12 mx-auto"
                    onClick={handleNext}
                  >
                    <button className=" text-white py-3 px-5 ">{option}</button>
                  </div>
                ))}

                {questions[currentStep].isCaution && (
                  <div className="flex items-center mt-14 gap-6 py-3 px-4 bg-[#DEDBE9] w-10/12 mx-auto">
                    <div className="flex items-center border border-[#5336A7] p-1 rounded-full max-h-fit">
                      <FaExclamation size={15} color="#5336A7" />
                    </div>
                    <p className="text-sm">
                      Some symptoms of panic attacks including a racing heart,
                      dizziness, or chest pains.
                    </p>
                  </div>
                )}
              </div>
            )}

            {questions[currentStep].checkboxOption && (
              <div className=" w-11/12 mx-auto">
                {questions[currentStep].checkboxOption.map((option, index) => (
                  <div key={index} className=" w-10/12 mx-auto">
                    <div className="flex gap-3 mb-1">
                      <input type="checkbox" />
                      <p>{option}</p>
                    </div>
                  </div>
                ))}
                <div className=" flex justify-end" onClick={handleNext}>
                  <button className="bg-[#4B3F72] text-white w-1/4  py-2 px-4 rounded-[80px] ">
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

export default ClientQuestionnair4;
