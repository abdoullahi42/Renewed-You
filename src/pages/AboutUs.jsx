/* eslint-disable react/no-unescaped-entities */
import { FaChevronRight, FaLinkedinIn } from "react-icons/fa6";
import CEO from "../assets/CEO.png";
import Manager from "../assets/Manager.png";
import img from "../assets/img.png";
import img1 from "../assets/img2.png";
import Client from "../component/ClientQuestionnair1";
import { GiBullseye } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";
import { FaHandHoldingDroplet } from "react-icons/fa6";

const Data = [
  {
    id: 1,
    tittle: "Our Mission",
    description:
      "We make quality mental health care an integral part of people’s lives. We believe it has to be easily accessible and cost-efficient.",
    icon: <GiBullseye color="#543CA3" />,
  },
  {
    id: 2,
    tittle: "Our Vision",
    description:
      "We dream of a world where everyone, everywhere, can tailor support to their unique journey toward wellness.",
    icon: <AiOutlineEye color="#543CA3" />,
  },
  {
    id: 3,
    tittle: "Our Values",
    description:
      "Empathy. Quality without compromise. Personalization and individual approach. Inclusivity and diversity. Innovation that enriches therapy experience.",
    icon: <FaHandHoldingDroplet color="#543CA3" />,
  },
];

function AboutUs() {
  return (
    <section className="my-14">
      <div className="text-center mb-5 lg:mb-7">
        <h2 className="text-4xl  mb-3  lg:mb-12 ">About us</h2>
        <div className=" mb-9  flex flex-col p-5 lg:items-center md:mb-12 ">
          <h3 className="text-2xl font-semibold mb-5 md:mb-8 px-2  md:text-3xl lg:text-4xl">
            {/*/ Guiding Teens, Couples, and Individuals on Their Path to Well-being/*/}
            Wellbeing for Teens, Couples & Individuals
          </h3>
          <p className=" text-center  lg:mx-auto lg:w-[77%] md:text-[18px] lg:px-5">
            Renewed You breaks down barriers to therapy, making mental health
            care accessible and affordable for everyone in a convenient online
            format. Our passionate therapists empower individuals, couples, and
            teens to overcome challenges and achieve their goals through
            personalized therapy plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4 lg:w-10/12 lg:mx-auto mb-12 ">
          {Data.map((values) => (
            <div
              key={values.id}
              className="text-center px-4 py-4 mb-3 sm:mb-0  rounded-md"
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            >
              <span className="mb-4 text-4xl inline-block">{values.icon}</span>
              <h3 className="font-semibold font-abdu text-xl mb-5 ">
                {values.tittle}
              </h3>
              <p className="md:text-[18px]">{values.description}</p>
            </div>
          ))}
        </div>
        <div className="mb-10">
          <button className="rounded-[60px]  py-3 px-6 mb-8 text-2xl bg-[#4B3F72] text-white">
            Start theraphy now
          </button>
        </div>
        <div className="font-albert">
          <h4 className="text-[#2D2A2A]  text-3xl md:text-4xl  lg:text-[40px] font-medium text-center mb-5 ">
            Our service
          </h4>
          <p className="text-center font-normal  text-2xl   md:text-3xl mb-16 xl:text-2xl">
            Online therapy, counseling, and coaching for everyone - regardless
            of background or identity.
          </p>
          <div className=" lg:flex gap-6 w-11/12 mx-auto text-white mb-20 py-6">
            <div
              className="bg-cover bg-center w-full  rounded-[20px] py-10 px-4 text-start bg-blend-multiply mb-8"
              style={{
                backgroundImage: `url(${img})`,
                backgroundColor: "#3C3A3A66",
              }}
            >
              <h3 className="text-2xl md:text-[32px] font-medium mb-24">
                For individuals
              </h3>
              <p className=" md:text-[22px] mb-12">
                Flexible and accessible mental health care options. One-hour
                matching. Secure therapy space. Self-help toolbox for
                comprehensive support.
              </p>
              <h6 className="md:text-[25px] font-medium mb-3 ">Text Therapy</h6>
              <p className="md:text-[22px] font-medium mb-4">
                Unlimited text messaging on your phone or laptop. It’s perfect
                for expressing those hard-to-say things at your pace.
              </p>
              <div className="flex items-center gap-2 mb-10 ">
                <span className="md:text-[18px] ">learn more</span>
                <FaChevronRight size={12} />
              </div>
              <h6 className="md:text-[25px] font-medium mb-3 ">
                Video Therapy
              </h6>
              <p className="md:text-[22px] font-medium mb-6">
                Face-to-face, from your space. Live video therapy sessions feel
                more personal than text-based online therapy. Multiple studies
                found they have the same effect as in-person sessions.
              </p>
              <div className="flex items-center gap-2">
                <span className="md:text-[18px] ">learn more</span>
                <FaChevronRight size={12} />
              </div>
            </div>

            <div
              className="bg-cover bg-center rounded-[20px] text-start py-10 px-4 bg-blend-multiply mb-8"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundColor: "#3C3A3A66",
              }}
            >
              <h3 className="text-2xl md:text-[32px] font-medium mb-24">
                For businesses
              </h3>
              <p className="md:text-[22px] font-medium mb-10">
                We empower teams with mental health support for a healthier,
                more productive work environment
              </p>
              <div className="flex items-center gap-2">
                <span className="md:text-[18px] self-center ">learn more</span>
                <FaChevronRight size={12} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className=" text-3xl lg:text-[40px] font-medium mb-5">
            Our leadership team
          </h3>
          <div className="md:flex lg:w-3/4 mx-auto gap-10 py-6 font-albert px-6">
            <div className="mb-8">
              <img src={CEO} alt="CEO" className="rounded-[20px] mb-4" />
              <p className=" text-2xl md:text-3xl font-medium mb-1 md:mb-3 flex justify-between ">
                Leslie Alexander{" "}
                <span>
                  <FaLinkedinIn />
                </span>
              </p>
              <p className=" text-[22px] md:text-2xl font-normal lg:text-nowrap flex">
                Founder and CEO at Renewed-You
              </p>
            </div>

            <div>
              <img
                src={Manager}
                alt="Manager"
                className="rounded-[20px] mb-4"
              />
              <p className=" text-2xl md:text-3xl font-medium mb-1 md:mb-3 flex justify-between ">
                Dianne Russell
                <span>
                  <FaLinkedinIn />
                </span>
              </p>
              <p className=" text-[22px] md:text-2xl font-normal lg:text-nowrap flex">
                Partnerships Manager at Renewed-You
              </p>
            </div>
          </div>
        </div>
      </div>
      <Client />
    </section>
  );
}

export default AboutUs;
