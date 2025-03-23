import { FaExclamation } from "react-icons/fa";
import { useState } from "react";

const dataCheckBox = [
  {
    title: "I prefer a therapist with experience in...",
    caution:
      "Are there any issues you’d like to focus on? We want to match you with a therapist who suits your needs.",
    checkBoxOptions: [
      "Depression",
      "Stress and anxiety",
      "Coping with addictions",
      "LGBTQ+ related issues",
      "Relationship issues",
      "Family conflicts",
      "Trauma and abuse",
      "Coping with grief and loss",
      "Intimacy related issues",
      "Eating disorders",
      "Sleeping disorders",
      "Parenting issues",
      "Motivation, self esteem, and confidence",
      "Anger management",
      "Career difficulties",
      "Bipolar disorder",
      "Coping with life changes",
      "Executive and professional coaching",
      "Compassion fatigue",
      "Concentration, memory and focus (ADHD)",
    ],
  },
  {
    title: "Additional focus areas I prefer",
    caution:
      "Are there additional areas you are interested in? We may not be able to honor all the preferences, but we will do our best!",
    checkBoxOptions: [
      "Communication problems",
      "Life purpose",
      "Isolation/loneliness",
      "Self-love",
      "Social anxiety and phobia",
      "Guilt and shame",
      "Post-traumatic stress",
      "Panic disorder and panic attacks",
      "Control issues",
      "Forgiveness",
      "Caregiver issues and stress",
      "Pregnancy and childbirth",
      "Divorce and separation",
      "Attachment issues",
      "Abandonment",
      "Body image",
      "Mood disorders",
      "Impulsivity",
      "Workplace issues",
      "Money and financial issues",
      "Chronic pain, illness, and disability",
      "Women’s issues",
      "Men’s issues",
      "Sexuality",
      "Midlife crisis",
      "Narcissism",
    ],
  },
];

function LastQuestionnair({onNext}) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }else {
      onNext();
    }
  };

  return (
    <section className="w-[98%] lg:w-10/12 mx-auto my-8">
      <div className="h-fit py-4 w-11/12 lg:w-3/5 mx-auto rounded-lg">
        {currentStep === 0 && (
          <div className="p-8 w-[96%] lg:w-10/12 mx-auto mb-8 rounded-lg" style={{ boxShadow: "-2px -2px 4px 0px #00000040" }}>
            <h5 className="mb-10 text-2xl font-normal text-center">
              You’ve completed the <br></br>questionnaire!
            </h5>
            <div>
              <input
                type="text"
                placeholder="First name (or nickname)"
                className="border border-[#717070] rounded-md placeholder-[#787474] p-2  w-[95%] w11/12 block mb-3"
              />
              <small className="text-[#827F7F] text-sm mb-6 inline-block">
                For added privacy you can provide a nickname instead of your first name
              </small>
              <input
                type="email"
                placeholder="Email"
                className="border border-[#717070] rounded-md placeholder-[#787474] p-2  w-[95%] lg:w-11/12 block mb-5"
              />
              <input
                type="email"
                placeholder="Confirm email"
                className="border border-[#717070] rounded-md placeholder-[#787474] p-2  w-[95%] lg:w-11/12 block mb-5"
              />
              <input
                type="password"
                placeholder="Create password"
                className="border border-[#717070] rounded-md placeholder-[#787474] p-2  w-[95%] lg:w-11/12 block mb-5"
              />
            </div>
            <div className="flex gap-2 mb-8">
              <input type="checkbox" />
              <p className="text-[#7A7878]">
                I agree to the terms and conditions and privacy policy
              </p>
            </div>
            <div className=" w-10/12 lg:w-3/4 bg-[#70E1B9] text-[#222020] py-2 px-4 rounded-[50px] text-center mx-auto" onClick={handleNext}>
              <button>Continue</button>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <h5 className="text-center mb-10 text-xl">
              We just sent a verification code to <br></br>
              oluwatosinadesoro96@gmail.com
            </h5>
            <div className="w-11/12 lg:w-3/4 mx-auto p-8 mb-8 px-7 lg:px-10 rounded-lg" style={{ boxShadow: "-2px -2px 4px 0px #00000040" }}>
              <h6 className="text-xl text-[#2D2A2A] mb-8">Please enter your verification code</h6>
              <div className="text-center w-10/12 mx-auto">
                <textarea className="border border-[#4B3F72] rounded-xl resize-none outline-none w-1/3 mx-12 placeholder:text-center mb-8" />
              </div>
              <div className="bg-[#70E1B9] text-[#222020] py-2 px-4 text-center rounded-full mb-8" onClick={handleNext}>
                <button>Submit</button>
              </div>
              <div className=" w-full border border-black py-2 sm:px-4 text-center rounded-[43px] lg:rounded-full mb-8">
                <button>Resend verification code</button>
              </div>
              <div className="border border-black py-2 px-4 text-center rounded-[43px] lg:rounded-full mb-8">
                <button>Update email address</button>
              </div>
            </div>
          </div>
        )}

        {(currentStep === 2 || currentStep === 3) && (
          <div className="w-10/12 mx-auto">
            <div>
              <h5 className="text-xl lg:text-2xl text-center my-4">
                {dataCheckBox[currentStep - 2].title}
              </h5>
              
              <div className="w-full lg:w-11/12 mx-auto py-5 mb-8 rounded-lg" style={{ boxShadow: "-2px -2px 4px 0px #00000040" }}>
                {dataCheckBox[currentStep - 2].checkBoxOptions.map((option, i) => (
                  <div className="flex items-center gap-3 mb-2 px-4 w-11/12 lg:w-3/4 mx-auto" key={i}>
                    <input type="checkbox" />
                    <p className="text-base">{option}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-4 gap-6 py-3 px-4 bg-[#CFEDE2] w-10/12 mx-auto mb-12">
                <div className="flex items-center border border-[#5336A7] p-1 rounded-full max-h-fit">
                  <FaExclamation size={15} color="#5336A7" />
                </div>
                <p>{dataCheckBox[currentStep - 2].caution}</p>
              </div>
              <div className="flex text-right  justify-end">
                <button className="bg-[#4BDBA7] text-white py-2 px-4 text-right rounded-[50px]" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h5 className="text-xl lg:text-2xl text-center my-4">What brings you here?</h5>
            <div className="w-full lg:w-11/12 mx-auto py-5 mb-8 rounded-lg" style={{ boxShadow: "-2px -2px 4px 0px #00000040" }}>
              <div className=" px-3 lg:px-11 pb-11">
                <input
                  placeholder="Tell your therapist what’s on your mind."
                  className="border h-[252px] border-[#8A8888] outline-none w-full lg:w-10/12 mx-auto rounded-lg pt-0 px-4"
                />
              </div>
              <div className="flex text-right  justify-end">
                <button className="bg-[#4BDBA7] text-white py-2 px-4 text-right rounded-[50px]" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default LastQuestionnair;