import hijabwoman from "../assets/HijabiWoman-removebg-preview.png";

const Testimonials = [
  {
    name: "sam",
    image: hijabwoman,
    quote: "it was a pleasent experience with Renewed You",
  },
  {
    name: "",
    image: "",
    quote: "it was a pleasent experience with Renewed You",
  },
  {
    name: "sam",
    image: "",
    quote: "it was a pleasent experience with Renewed You",
  },
  {
    name: "sam",
    image: "",
    quote: "it was a pleasent experience with Renewed You",
  },
  {
    name: "sam",
    image: "",
    quote: "it was a pleasent experience with Renewed You",
  },
];
function Reviews() {
  return (
    <section>
      <div>
        <div>
          <h3>more than 200+ 5 star Reviews</h3>
          <p>see why people love using Renewed You</p>
        </div>
        <div
          className="flex gap-4  overflow-x-auto mb-5 "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {Testimonials.map((Testimonies) => (
            <div
              key={Testimonies.name}
              className="flex  flex-col flex-shrink-0  bg-green-200 w-[300px] sm:w-[300px]"
            >
              <div className="w-full">
                <img src={Testimonies.image} className="w-full rounded-[50%]" />
              </div>
              <p className="text-center">{Testimonies.quote}</p>
              <p>{Testimonies.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
