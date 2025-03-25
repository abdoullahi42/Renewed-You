import { Link } from "react-router-dom";
const stats = [
  { id: 1, nums: "150+", descr: "Sessions, chat and message" },
  { id: 2, nums: "100+", descr: "Qualified therapists ready to help" },
  { id: 3, nums: "250+", descr: "People got help" },
];

// #8330c2;

/* eslint-disable react/no-unescaped-entities */
function Stats() {
  return (
    <section className=" lg:mb-14 bg-white  pt-8 md:pt-14">
      <Link to="/land">
        <h2 className="font-semibold font-abdu text-4xl leading-[1.4]  lg:text-5xl mb-10 text-center  md:mb-0  px-1">
          High-quality care backed by evidence
        </h2>
      </Link>
      <div className="flex gap-5 flex-col-reverse text-center mx-3 mb-8  md:flex-row  md:gap-16 min-[960px]:px-4 lg:mb-20 md:pt-8 lg:pt-0">
        <div className="md:flex-1 lg:self-center md:pt-8 lg:pt-0 ">
          <p className="text-3xl leading-[1.6] font-medium mb-11  md:mb-6 md:text-4xl md:leading-[1.7] lg:text-5xl lg:leading-[1.5] 2xl:mb-9  ">
            The world's largest therapy service<br></br>
            <span className="text-[#3b737b] block pt-1 md:pt-0">
              100% online
            </span>
          </p>
        </div>

        <div className="mb-7 md:flex-1 md:mb-16  lg:pt-24">
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
