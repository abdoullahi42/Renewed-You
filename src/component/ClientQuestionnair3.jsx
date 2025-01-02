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

function ClientQuestionnair3() {
  return (
    <section>
      <div>
        {questions.map((question) => (
          <div key={question.quest}>
            {question.isOneQuesiton ? (
              <div>
                <h5>{question.quest}</h5>
                <div>
                  <button>Yes</button>
                  <button>No</button>
                </div>
              </div>
            ) : (
              <div>
                <p>
                  Over the past 2 weeks, how often have you been bothered by any
                  of the following problems:
                </p>
                <h5>{question.quest}</h5>
                {question.hasDifferentOptions ? (
                  <div>
                    <button>Not difficult at all</button>
                    <button>Somewhat difficult</button>
                    <button>Very difficult</button>
                    <button>Extremely difficult</button>
                  </div>
                ) : (
                  <div>
                    <button>Not at all</button>
                    <button>Several days</button>
                    <button>More than half the days</button>
                    <button>Nearly every day</button>
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
