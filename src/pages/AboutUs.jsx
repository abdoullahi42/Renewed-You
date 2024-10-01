/* eslint-disable react/no-unescaped-entities */
import img from "../assets/image1.jpg";
import img1 from "../assets/image2.jpg";
import img2 from "../assets/image3.jpg";
import img3 from "../assets/image4.jpg";
import img4 from "../assets/image5.jpg";
import img5 from "../assets/image6.jpg";
import img6 from "../assets/image7.jpg";
import img7 from "../assets/image8.jpg";
import img8 from "../assets/image9.jpg";
import img9 from "../assets/image10.jpg";
import img10 from "../assets/image11.jpg";
import img11 from "../assets/image12.jpg";
import img12 from "../assets/image13.jpg";
import img13 from "../assets/image14.jpg";
import img14 from "../assets/image15.jpg";
const imagesData = [
  { id: 1, url: img, alt: "theraphist" },
  { id: 2, url: img1, alt: "theraphist" },
  { id: 3, url: img2, alt: "theraphist" },
  { id: 4, url: img3, alt: "theraphist" },
  { id: 5, url: img4, alt: "theraphist" },
  { id: 6, url: img5, alt: "theraphist" },
  { id: 7, url: img6, alt: "theraphist" },
  { id: 8, url: img7, alt: "theraphist" },
  { id: 9, url: img8, alt: "theraphist" },
  { id: 10, url: img9, alt: "theraphist" },
  { id: 11, url: img10, alt: "theraphist" },
  { id: 12, url: img11, alt: "theraphist" },
  { id: 13, url: img12, alt: "theraphist" },
  { id: 14, url: img13, alt: "theraphist" },
  { id: 15, url: img14, alt: "theraphist" },
];

function AboutUs() {
  return (
    <>
      <section className="my-14">
        <div className="text-center mb-5 lg:mb-7">
          <h2 className="text-4xl  mb-3  lg:mb-12 ">About us</h2>
          <div className=" mb-9  flex flex-col p-5 lg:items-center md:mb-12 ">
            <h3 className="text-2xl font-semibold mb-5 md:mb-8 px-2 lg:text-4xl">
              {/*/ Guiding Teens, Couples, and Individuals on Their Path to Well-being/*/}
              Wellbeing for Teens, Couples & Individuals
            </h3>
            <p className=" text-center  lg:mx-auto lg:w-[77%] lg:text-[18px] lg:px-5">
              Renewed You breaks down barriers to therapy, making mental health
              care accessible and affordable for everyone in a convenient online
              format. Our passionate therapists empower individuals, couples,
              and teens to overcome challenges and achieve their goals through
              personalized therapy plans.
            </p>
          </div>

          <div className="text-center mx-auto flex flex-col items-center justify-center mb-11 md:mb-16 lg:mb-20">
            <div className="mx-5">
              <h3 className="text-2xl md:text-3xl mb-12 md:mb-16 lg:mb-[60px] font-medium">
                Our therapists
              </h3>
            </div>
            <div className="text-center px-9 mx-7 grid grid-cols-4  gap-6 min-[929px]:grid-cols-5 min-[929px]:gap-8">
              {imagesData.map((image) => (
                // Wrap each image in its own div
                <div key={image.id} className="mb-3">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="rounded-[55%] w-[150px]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-11  lg:mb-12  px-4 md:px-2 lg:text-4xl lg:leading-snug text-center md:w-[80%] mx-auto ">
              Ready to take the first step towards a happier and healthier you?
            </h2>
            <button className="text-xl  lg:text-2xl py-3 px-6 bg-[#0D4A07] text-[#fff] rounded-[30px]">
              Get started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
