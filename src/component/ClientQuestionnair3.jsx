const questions = [
  {
    quest:
      "Are you currently experiencing overwhelming sadness, grief, or depression?",
    isOneQuesiton: true,
  },
  {
    quest: "Little interest or pleasure in doing things.",
  },
  {
    quest:
      "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual.",
  },
  {
    quest: "Feeling down, depressed or hopeless",
  },
  {
    quest: "Trouble falling asleep, staying asleep, or sleeping too much",
  },
  {
    quest: "Feeling tired or having little energy",
  },
  {
    quest:
      "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
  },
  {
    quest:
      "Thoughts that you would be better off dead or of hurting yourself in some way.",
  },
  {
    quest:
      "How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
    hasDifferentOptions: true,
  },

  {
    quest: "Are you currently employed?",
    isOneQuesiton: true,
  },
];
const optionsStyle =
  "text-white py-3 px-5 block  bg-[#716599] mb-2  rounded-[80px]  w-10/12";

function ClientQuestionnair3() {
  return (
    <section className="lg:w-10/12 mx-auto my-8">
      <div
        className="h-fit py-4 w-3/5 mx-auto rounded-lg"
        style={{ boxShadow: "-2px -2px 4px 0px #00000040" }}
      >
        {questions.map((question) => (
          <div key={question.quest} className=" w-11/12 mx-auto py-4">
            {question.isOneQuesiton ? (
              <div>
                <h5 className="text-center text-xl mb-8">{question.quest}</h5>
                <div className="mb-4 w-10/12 mx-auto">
                  <button className={optionsStyle}>Yes</button>
                  <button className={optionsStyle}>No</button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-center text-[18px] mb-12">
                  Over the past 2 weeks, how often have you been bothered by any
                  of the following problems:
                </p>
                <h5 className="text-center text-xl mb-8">{question.quest}</h5>
                {question.hasDifferentOptions ? (
                  <div className="mb-4 w-10/12 mx-auto">
                    <button className={optionsStyle}>
                      Not difficult at all
                    </button>
                    <button className={optionsStyle}>Somewhat difficult</button>
                    <button className={optionsStyle}>Very difficult</button>
                    <button className={optionsStyle}>
                      Extremely difficult
                    </button>
                  </div>
                ) : (
                  <div className="mb-4   w-10/12 mx-auto">
                    <button className={optionsStyle}>Not at all</button>
                    <button className={optionsStyle}>Several days</button>
                    <button className={optionsStyle}>
                      More than half the days
                    </button>
                    <button className={optionsStyle}>Nearly every day</button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientQuestionnair3;
