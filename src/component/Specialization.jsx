const buttons = [
  {
    buttonText: " Couples therapies",
    id: 1,
  },

  {
    buttonText: "Teens therapies",
    id: 2,
  },

  {
    buttonText: "Phsycologist",
    id: 3,
  },
];

function Specialization({handleNext}) {
  return (
    <div>
      <div className="grid grid-cols-1 " onClick={handleNext}>
        {buttons.map((btn) => (
          <button
            className="bg-[#8df382] text-black  mb-5 w-3/4 lg:w-2/4 xl:w-2/5 mx-auto p-3 rounded-[45px] hover:bg-[#0C4607] hover:text-white"
            key={btn.id}
          >
            {btn.buttonText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Specialization;
