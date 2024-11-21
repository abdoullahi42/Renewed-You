import { useState, useEffect } from "react";
import hijabwoman from "../assets/HijabiWoman.jpg";
import couples from "../assets/happycouples.png";
import couple from "../assets/coupless.jpg";
import man from "../assets/justin.jpg";

import { BsCircle, BsCircleFill } from "react-icons/bs";

const cardData = [
  {
    id: 1,
    image: man,
    title: "David",
    quote:
      "I was hesitant about therapy, but Renewed-You made the process approachable and supportive. My therapist listened without judgment and helped me uncover solutions I hadn't considered. I'm so glad I took the leap.",
  },
  {
    id: 2,
    image: hijabwoman,
    title: "Fatima",
    quote:
      "Struggling with burnout was taking a toll on my work and personal life. Therapy at Renewed-You helped me identify the root causes and develop strategies for better work-life balance. It helped me rediscover my inner strength and find clarity in my life.",
  },
  {
    id: 3,
    image: couples,
    title: "Emily and John",
    quote:
      "Renewed-You therapy saved our relationship. We found a renewed sense of love and understanding in our relationship. Now, we feel closer and more connected than ever.",
  },
  {
    id: 4,
    image: couple,
    title: "Sarah and Michael",
    quote:
      "Going to therapy at Renewed-You was the best decision we made. We learned how to celebrate each other's strengths and navigate disagreements constructively. It's brought a new level of intimacy to our relationship.",
  },
];

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle manual slide change
  const handleGoToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-16 pt-11 bg-[#F5F5DC]">
      <div className="md:w-10/12 mx-auto md:flex justify-center px-11">
        <div className="flex justify-center md:w-3/4 lg:w-2/3 ">
          <p className=" text-4xl lg:text-6xl text-[#4B3F72]">”</p>
          <div className="grid">
            {/* Display the current slide based on currentIndex */}
            <p className="pt-10 mb-5 lg:text-center text-[#2D2A2A]">
              {cardData[currentIndex].quote}
            </p>
            <div className="flex gap-3 justify-center">
              <img
                src={cardData[currentIndex].image}
                alt={cardData[currentIndex].title}
                className="h-32 w-32 rounded-[50%]"
              />
              <p className="mt-4 text-xl font-semibold text-center text-[#2D2A2A] text-nowrap">
                {cardData[currentIndex].title}
              </p>
            </div>
          </div>
          <p className=" text-4xl lg:text-6xl text-[#4B3F72] ">”</p>
        </div>
      </div>
      {/* Circle Indicators */}
      <div className="flex justify-center py-6 gap-3">
        {cardData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleGoToSlide(index)}
            className="cursor-pointer"
          >
            {index === currentIndex ? (
              <BsCircleFill size={16} color="#4B3F72" />
            ) : (
              <BsCircle size={16} color="#4B3F72" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
