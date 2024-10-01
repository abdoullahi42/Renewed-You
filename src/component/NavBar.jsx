import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSeedling } from "react-icons/fa";
import { Link } from "react-router-dom";

let Links = [
  { name: "About", link: "/about" },
  { name: "Therapist", link: "/onlineTheraphy" },
  { name: "FAQ", link: "/" },
  { name: "Contact", link: "/contact" },
];

function NavBar() {
  const [isopen, setIsopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get current scroll position
    setIsScrolled(scrollY > 100); // Set sticky state based on scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  return (
    <nav
      className={`bg-[#F5F5DC] ${
        isScrolled ? "bg-white sticky top-0 z-50 " : ""
      }`}
    >
      <div
        className={`flex justify-between  lg:gap-0 lg:justify-start  px-4 lg:pl-4 lg:pr-24  py-10 lg:pb-0 lg:pt-5 items-center ${
          isScrolled ? "lg:pt-0" : ""
        }`}
      >
        <div className="  pl-2  lg:w-1/2 ">
          <Link to="/">
            <div className="flex gap-1 lg:gap-2 item-center justify-center lg:justify-start">
              <span>
                <FaSeedling color="#0C4607" size={25} />
              </span>
              <span className="lg:text-[18px] font-semibold ">
                {" "}
                Renewed You
              </span>
            </div>
          </Link>
        </div>
        <div
          className={`${
            isopen
              ? "fixed inset-0 bg-white h-[100vh] flex flex-col w-[90vw]  py-24 pt-5"
              : "hidden"
          }  lg:flex  gap-8 lg:gap-20 lg:py-2     `}
          onClick={() => setIsopen(false)}
        >
          <ul className="flex flex-col mt-11 lg:flex-row lg:m-0 mx-auto gap-6 text-[18px] font-medium  lg:gap-8 xl:gap-10  items-center">
            {Links.map((link) => (
              <Link to={link.link} key={link.name}>
                <li className="">
                  <a href={link.link}>{link.name}</a>
                </li>
              </Link>
            ))}
          </ul>
          <div className=" flex flex-col  lg:flex-row mx-auto lg:mx-0 gap-8  w-fit lg:w-full py-1 flex-shrink-0 pr-1 ">
            <button className="border border-[#0C4607] rounded-[28px] p-[10px] py-[5px] ">
              Login
            </button>
            <Link to="/onboarding-theraphy">
              <button className="bg-[#0C4607] text-white rounded-lg px-2 py-1">
                Become a Therapy
              </button>
            </Link>
          </div>
        </div>
        <div onClick={() => setIsopen(!isopen)} className="">
          {isopen ? (
            <FaTimes
              size={32}
              color=""
              className="lg:hidden absolute top-0 right-[8%]"
            />
          ) : (
            <FaBars size={30} className="lg:hidden" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
