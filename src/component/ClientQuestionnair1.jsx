import { Fragment, useEffect, useState } from "react";
import { FaExclamation } from "react-icons/fa";

const questions = [
  {
    quest: "What type of therapy are you looking for?",
    options: ["Marriage or couple therapy", "Teens therapy", "Psychologist"],
    isCaution: true,
    caution:
      "Let’s walk through the process of finding the best therapist for you! We’ll start off with some basic questions.",
    isInput: false,
  },
  {
    quest: "Which country are you in?",
    isCaution: false,
    isInput: true,
    IsInputType: "Api",
    inputOptions: [],
  },
  {
    quest: "What type of therapy are you looking for?",
    options: ["Man", "Woman", "prefer not to say", "other"],
    isCaution: true,
    caution:
      "Gender plays an important role in shaping personal identity and experiences. This information will help your therapist create a more personalized approach.",
    isInput: false,
  },
  {
    quest: "how old are you?",
    isCaution: true,
    caution:
      "Did you know? Almost a fifth of older adults have experienced depression.",
    isInput: true,
    IsInputType: "DropDown",
    inputOptions: Array.from({ length: 87 }, (_, i) => i + 13),
  },
  {
    quest: "How do you identify?",
    options: ["Man", "Woman", "prefer not to say", "other"],
    isCaution: true,
    caution:
      "Your answer will help us match you to a suitable therapist as well as help your therapist create a treatment plan that respects your identity and experiences.",
    isInput: false,
  },
];

function ClientQuestionnair1() {
  const [countries, setCountries] = useState([]);
  const [step, setStep] = useState(0);
  function handleClick() {
    setStep((Previous) => Previous + 1);
  }
  const [currentIndex, setcurrentIndex] = useState(0);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
        console.log(countryNames);
      } catch (error) {
        console.log("fetching countries");
      }
    };
    fetchCountries();
  }, []);

  return (
    <section className="lg:w-10/12 mx-auto my-8">
      <div
        className="h-fit py-4 w-3/5 mx-auto rounded-lg"
        style={{ boxShadow: "-2px -2px 4px 0px #00000040" }}
      >
        {questions.map((val, i) => (
          <div key={i} className=" w-11/12 mx-auto py-4">
            <h5 className="text-center text-xl mb-8">{val.quest}</h5>

            {val.options &&
              val.options.map((option, index) => (
                <div
                  key={index}
                  className="mb-4 bg-[#716599] rounded-[80px] w-10/12 mx-auto"
                >
                  <button className=" text-white py-3 px-5 " onClick="">
                    {option}
                  </button>
                </div>
              ))}
            <div className=" w-10/12 mx-auto">
              {val.isInput && val.IsInputType === "DropDown" && (
                <select className="w-11/12 mx-auto rounded-[5px] p-2 border border-[#3E3D3D]">
                  {val.inputOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {val.isInput && val.IsInputType === "Api" && (
              <Fragment>
                <div className=" w-10/12 mx-auto">
                  <select className="w-11/12 mx-auto rounded-[5px] p-2 border border-[#3E3D3D] mb-5">
                    {countries.map((country, i) => (
                      <option key={i} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex  w-10/12 mx-auto justify-between mt-5 ">
                  <button className="bg-[#4B3F72] text-white w-1/4  py-2 px-4 rounded-[80px]">
                    Previous
                  </button>
                  <button className="bg-[#4B3F72] text-white  w-1/4  py-2 px-4 rounded-[80px]">
                    Next
                  </button>
                </div>
              </Fragment>
            )}
            {val.isCaution && (
              <div className="flex items-center mt-14 gap-6 py-3 px-4 bg-[#DEDBE9] w-10/12 mx-auto">
                <div className="flex items-center border border-[#5336A7] p-1 rounded-full max-h-fit">
                  <FaExclamation size={15} color="#5336A7" />
                </div>
                <p className="text-sm">{val.caution}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientQuestionnair1;
