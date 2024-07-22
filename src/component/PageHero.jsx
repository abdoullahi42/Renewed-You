/* eslint-disable react/no-unescaped-entities */
function PageHero() {
  return (
    <section className="grid   lg:mb-14 ">
      <div className="grid gap-12 mb-12 px-8 lg:py-3 lg:grid-cols-2  lg:mb-16 lg:px-10 2xl:px-8 2xl:gap-24 ">
        <div className=" lg:p-1  text-center lg:text-start xl:pl-4 xl:pr-6">
          <h1 className="mb-6 text-[30px] md:text-[40px] lg:text-5xl  font-bold leading-tight tracking-[-1.2px]  xl:text-[50px]  lg:leading-[1.1] ">
            Heal Relationship, Improve children and Good well being
          </h1>
          <p className="mb-7 text-[15px] lg:text-[17px]  mr-5  font-medium">
            Whether you're a teenager facing academic pressures, a couple
            seeking to strengthen your relationship, or an individual seeking
            self-discovery and growth, we offer a personalized therapy for your
            journey to thrive
          </p>
          <button className="mb-4 bg-[#0D4A07] text-[#fff] px-8 py-4 rounded-[29px]  inline-block font-semibold leading-[1.1] text-[15px] lg:text-[18px]">
            Get Started
          </button>
        </div>
        <div className="md:px-11 lg:px-0">
          <img src="src/assets/virtualtheraphy.avif" className="rounded-lg  " />
        </div>
      </div>
    </section>
  );
}

export default PageHero;
