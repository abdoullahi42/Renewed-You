import { useState } from "react";
let Links = [
  { name: "HOME", link: "/" },
  { name: "SERVICE", link: "/" },
  { name: "ABOUT", link: "/about" },
  { name: "BLOG'S", link: "/onlineTheraphy" },
  { name: "CONTACT", link: "/contact" },
];
import Button from "./Button";
function NavBar() {
  const [isopen, setIsopen] = useState(false);
  return (
    <nav className="shadow-md w-full sticky top-0 left-0 mb-10 z-10">
      <section className="md:flex items-center justify-between  bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 justify-start"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Renewed You
        </div>

        <div
          onClick={() => setIsopen(!isopen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={isopen ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isopen ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;
