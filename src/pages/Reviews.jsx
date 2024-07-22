/* eslint-disable react/no-unescaped-entities */
import hijabwoman from "../assets/hijabiWoman.jpg";
import couples from "../assets/happycouples.png";
import couple from "../assets/coupless.jpg";
import man from "../assets/justin.jpg";
import boy from "../assets/amad.jpg";
import womans from "../assets/ally.jpg";
const cardData = [
  {
    id: 1,
    image: man,
    title: "David",
    quote: `"I was hesitant about therapy, but Renewed-You made the process approachable and supportive. My therapist listened without judgment and helped me uncover solutions I hadn't considered. I'm so glad I took the leap"`,
  },
  {
    id: 2,
    image: womans,
    title: "sofia",
    quote: `"Therapy at Renewed-You wasn't just helpful, it was transformative. My therapist provided a safe space to explore my anxieties and develop coping mechanisms. I feel empowered and ready to tackle life's challenges."`,
  },
  {
    id: 3,
    image: couples,
    title: "Emily and John",
    quote:
      '"Renewed-You therapy saved our relationship. We found a renewed sense of love and understanding in our relationship. Now, we feel closer and more connected than ever"',
  },
  {
    id: 4,
    image: hijabwoman,
    title: "Fatima",
    quote:
      '"Struggling with burnout was taking a toll on my work and personal life. Therapy at Renewed-You helped me identify the root causes and develop strategies for better work-life balance. it helped me rediscover my inner strength and find clarity in my life."',
  },
  {
    id: 5,
    image: boy,
    title: "lamine",
    quote: `"Talking to a therapist at Renewed-You was a game-changer. Renewed-You gave me the tools to handle school stress and friendships without judgment. I feel confident now to communicate my needs openly."`,
  },
  {
    id: 6,
    image: couple,
    title: "Sarah and Michael",
    quote: `"Going to therapy at Renewed-You was the best decision we made. We learned how to celebrate each other's strengths and navigate disagreements constructively. It's brought a new level of intimacy to our relationship"`,
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
            className="bg-[#e8f8e8] flex-shrink-0 w-80 justify-center items-center  mx-5 "
            key={card.id}
          >
            <img src={card.image} alt={card.title} />
            <p className="px-10 pt-10 ">{card.quote}</p>
            <p className="mt-4 text-xl font-semibold text-center">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
