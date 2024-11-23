import {
  FaEnvelope,
  FaFacebook,
  FaLinkedinIn,
  FaSeedling,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaHouse,
  FaPhone,
  FaCanadianMapleLeaf,
} from "react-icons/fa6";
import { TbCircleLetterC } from "react-icons/tb";

const styles = {
  headers: "text-xl md:text-2xl  mb-8 font-medium",
  links: "md:text-[18px]",
};

function Footer() {
  return (
    <footer className="bg-[#343A3A] py-12 text-white">
      <div>
        <div className=" grid grid-cols-1 gap-9 md:grid-cols-2  lg:grid-cols-4 w-11/12 mx-auto lg:gap-9 px-5 pb-9 border-b border-white">
          <div className="w-full mb-7  ">
            <h3 className=" flex items-center gap-2 text-xl md:text-2xl  mb-8 ">
              {" "}
              <span>
                <FaCanadianMapleLeaf color="#fff" size={25} />
              </span>
              <span className=" "> Renewed You</span>
            </h3>
            <p className="md:text-[16px] mb-6 pr-4">
              we are committed to create lasting memories to all peoples of
              need.
            </p>
            <div className="flex gap-4">
              <FaFacebook size={25} />
              <FaLinkedinIn size={25} />
              <FaXTwitter size={25} />
            </div>
          </div>
          <div className="lg:px-8">
            <h3 className={styles.headers}>Company</h3>
            <div className={styles.links}>
              <p className="mb-5">About us</p>
              <p className="mb-5">Contact</p>
              <p className="mb-5">For therapies</p>
            </div>
          </div>
          <div>
            <h3 className={styles.headers}>Our Services</h3>
            <div className={styles.links}>
              <p className="mb-5">Couples</p>
              <p className="mb-5">Individuals</p>
              <p className="mb-5">Teens</p>
            </div>
          </div>
          <div>
            <h3 className={styles.headers}>Find us</h3>
            <div className="lg:text-[18px]">
              <div className="flex gap-5  mb-5 ">
                <p>
                  <FaHouse size={20} />{" "}
                </p>
                <span className={styles.links}>
                  No.974, Gleam street, Wuse, Abuja
                </span>
              </div>
              <div className="flex gap-5 mb-5 ">
                <p>
                  <FaEnvelope size={20} />
                </p>
                <span className={styles.links}>Renewedyou@gmail.com</span>
              </div>
              <p className="flex gap-5 mb-5 ">
                <FaPhone size={20} />
                <span className={styles.links}>+234 10000008</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 justify-between px-5 gap-2 lg:flex  py-8 lg:gap-11 lg:justify-center lg:pt-10">
          <p className="mb-5 lg:mb-0">Terms & Conditions</p>
          <p className="mb-5 lg:mb-0">Privacy Policy</p>
          <p className="mb-5 lg:mb-0">Sharing Settings</p>
          <p className="mb-5 lg:mb-0">Web Accessibility</p>
          <p className="flex items-center gap-1 text-nowrap self-center">
            {" "}
            <TbCircleLetterC size={18} /> 2024 Renewed You
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
