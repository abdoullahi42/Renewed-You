const stats = [
  { id: 1, nums: "150+", descr: "sessions, chat and message" },
  { id: 2, nums: "100+", descr: "qualified therapists ready to help" },
  { id: 3, nums: "250+", descr: "people got help" },
];

/* eslint-disable react/no-unescaped-entities */
function Stats() {
  return (
    <section className=" lg:mb-14">
      <h2 className="font-semibold font-abdu text-2xl md:text-3xl lg:text-5xl mb-5 text-center lg:mb-14  ">
        High-quality care backed by evidence
      </h2>
      <div className="flex flex-col text-center mx-3 mb-8  min-[960px]:flex-row  min-[960px]:gap-16 min-[960px]:px-4 lg:mb-20">
        <div className="min-[960px]:flex-1 min-[960px]:self-center">
          <h2 className="text-3xl font-semibold mb-5 tracking-tight lg:text-5xl  lg:tracking-normal lg:font-medium lg:leading-snug">
            The world's largest therapy service.<br></br>
            <span className="text-[#3b737b]">100% online</span>.
          </h2>
        </div>

        <div className="mb-6 min-[960px]:flex-1">
          {stats.map((stat) => (
            <div key={stat.id}>
              <h3 className="text-3xl font-semibold mb-1 tracking-tight  mt-2 text-[#0D4A07] ">
                {stat.nums}
              </h3>
              <p className="text-xl mb-3 ">{stat.descr}</p>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
