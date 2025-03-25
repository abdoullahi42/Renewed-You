import { Link } from "react-router-dom";
import img from "../assets/virtualtheraphy.avif";

/* eslint-disable react/no-unescaped-entities */
function PageHero() {
  return (
    <section className="grid   lg:mb-14 bg-gradient-to-r from-[#B5EAD7] to-[#F5F5DC] pt-7">
      {" "}
      <div className="grid gap-12 mb-12 px-8 lg:py-6 lg:grid-cols-2  lg:mb-16 lg:px-10  2xl:gap-20 2xl:px-10 ">
        <div className=" lg:p-1  text-center lg:text-start xl:pl-4 xl:pr-6 text-[#000] 2xl:pt-3 2xl:pr-9">
          <h1 className="mb-6 text-[30px] md:text-[40px] lg:text-5xl  font-bold leading-tight tracking-[-1.2px]  xl:text-[50px]  lg:leading-[1.1] 2xl:text-6xl ">
            Heal Relationship, Improve children and Good well being
          </h1>
          <p className="mb-7 text-[15px] lg:text-[17px]  mr-5  font-medium 2xl:text-[20px] ">
            Whether you're a teenager facing academic pressures, a couple
            seeking to strengthen your relationship, or an individual seeking
            self-discovery and growth, we offer a personalized therapy for your
            journey to thrive
          </p>
          <Link to="/onlineTheraphy">
            <button className="mb-4 bg-[#F5F5DC]   text-[#000] px-8 lg:p-4 py-4 rounded-[29px]  inline-block font-semibold leading-[1.1] lg:rounded-[24px] text-[15px] lg:text-[18px] ">
              Match with a Therapist
            </button>
          </Link>
        </div>
        <div className="md:px-11 lg:px-0 lg:mt-2">
          <img src={img} className="rounded-lg  " alt="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default PageHero;
