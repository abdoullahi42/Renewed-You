/* eslint-disable react/no-unescaped-entities */
function PageHero() {
  return (
    <section className="grid my-4 mx-auto lg:mb-14 mt-3">
      <div className="grid grid-cols-1  gap-12 justify-items-center mb-12 px-8    min-[960px]:py-3 min-[960px]:grid-cols-2 min-[960px]:px-11 lg:mb-16 lg:px-12">
        <div className=" min-[960px]:p-1   flex-col text-center min-[960px]:text-left  ">
          <h1 className="mb-7 text-[36px] min-[895]: text-5xl  font-bold leading-tight tracking-[-1.6px]  min-[960px]:tracking-[-1.1px] xl:text-[50px]">
            Heal Relationship, Improve children and Good well being
          </h1>
          <p className="mb-7 text-lg min-[960px]:text-[18px] self-start mr-5  font-normal ">
            Whether you're a teenager facing academic pressures, a couple
            seeking to strengthen your relationship, or an individual seeking
            self-discovery and growth, we offer a personalized therapy for your
            journey to thrive
          </p>
          <button className="mb-4 bg-[#0D4A07] text-[#fff] px-8 py-3 rounded-xl self-start inline-block ">
            Get started
          </button>
        </div>
        <div className="text-center">
          <img src="src/assets/virtualtheraphy.avif" className="rounded-lg  " />
        </div>
      </div>
    </section>
  );
}

export default PageHero;
