import hijabwoman from "../assets/hijabiWoman.jpg";
import couples from "../assets/happycouples.png";
import teenager from "../assets/teenageThera.jpg";

const cardData = [
  {
    id: 1,
    image: hijabwoman,
    title: "Card 1",
    quote:
      "This is a quote for card 1.This is a quote for card 1.This is a quote for card 1.This is a quote for card 1.This is a quote for card 1.This is a quote for card 1.This is a quote for card 1.",
  },
  {
    id: 2,
    image: couples,
    title: "Card 2",
    quote:
      "This is a quote for card 2.This is a quote for card 2This is a quote for card 2This is a quote for card 2 This is a quote for card 2",
  },
  {
    id: 3,
    image: teenager,
    title: "Card 3",
    quote:
      "This is a quote for card 3. This is a quote for card 3.This is a quote for card 3.This is a quote for card 3.This is a quote for card 3.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Card 4",
    quote:
      "This is a quote for card 4.This is a quote for card 4This is a quote for card 4This is a quote for card 4This is a quote for card 4This is a quote for card 4",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Card 5",
    quote:
      "This is a quote for card 5.This is a quote for cardThis is a quote for cardThis is a quote for cardThis is a quote for cardThis is a quote for card",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    title: "Card 6",
    quote:
      "This is a quote for card 6.This is a quote for card 6.This is a quote for card 6.This is a quote for card 6.This is a quote for card 6.",
  },
];

function Reviews() {
  return (
    <section className="my-14">
      <div
        className="flex overflow-x-scroll py-8 lg:ml-7"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cardData.map((card) => (
          <div
            className="bg-[#E9FAE9]  p-4 flex-shrink-0 w-64 mx-2  lg:w-[312px] lg:h-[435px] "
            key={card.id}
          >
            <img src={card.image} alt={card.title} className="w-full h-40  " />
            <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
            <p className="mt-2">{card.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
