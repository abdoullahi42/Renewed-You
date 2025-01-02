import { FaExclamationCircle } from "react-icons/fa";
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
function LastQuestionnair() {
  return (
    <section>
      <div>
        <h5>
          You’ve completed the <br></br>questionnaire!
        </h5>
        <div>
          <input type="text" placeholder="First name (or nickname)" />
          <small>
            For added privacy you can provide a nickname instead of your first
            name{" "}
          </small>
          <input type="email" placeholder="Email" />
          <input type="email" placeholder="Confirm email" />
          <input type="password" placeholder="Create password " />
        </div>
        <div>
          <input type="checkbox" />
          <p>I agree to the terms and conditions and privacy policy</p>
        </div>
        <div>
          <button>continue</button>
        </div>
      </div>
      <div>
        <h5>
          We just sent a verification code to oluwatosinadesoro96@gmail.com
        </h5>
        <div>
          <h6>Please enter your verification code</h6>
          <textarea />
          <div>
            <button>submit</button>
          </div>
          <button>Resend verification code </button>
          <button>Update email address</button>
        </div>
      </div>
      <div>
        {dataCheckBox.map((data) => (
          <div key={data.title}>
            <h5>{data.title}</h5>
            <div>
              <FaExclamationCircle />
              <p>{data.caution}</p>
            </div>
            <div>
              <input type="checkbox" />
              <p>{data.checkBoxOptions}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LastQuestionnair;
