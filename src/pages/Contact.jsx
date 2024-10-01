const enquiries = [
  {
    label: "I am a registered or new client and I need Support",
    id: 1111,
  },
  {
    label: "I am a current Renewed-You therapist and I need Support",
    id: 1311,
  },

  {
    label: "I am a therapist intrested in joining Renewed-you",
    id: 211,
  },
  {
    label: "I have question about the service",
    id: 1103,
  },
  {
    label: "I have a pricing related question",
    id: 121,
  },
  {
    label: "I have a business  related question",
    id: 1321,
  },
  {
    label: "I'm interested in Renewed-You for my organization ",
    id: 3121,
  },
];

const styles = {
  inpuutexbox:
    "rounded-[5px] p-2 border border-solid border-gray-600 md:w-2/3 resize-none mb-3 outline-none placeholder-black h-14 ",
};
function Contact() {
  return (
    <section className="bg-[#fffcf6]">
      <div className="w-full py-16 pb-8">
        <div>
          <h3 className="text-4xl mb-3 lg:mb-8 text-center">Contact US</h3>
          <p className="text-center  px-4 sm:px-0 md:w-2/3 mx-auto text-[18px] leading-[1.6] mb-24 md:mb-32">
            Use this form to reach out to our Customer Success Team regarding
            any questions, concerns, or feedback. You can also view our FAQ for
            quick answers to commonly asked questions.
          </p>
          <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:px-11  ">
            <div className="col-span-2  ">
              <h3 className="mb-9 text-2xl lg:text-3xl">Type of Contact</h3>
              <div className="mb-11">
                {enquiries.map((enquiri) => (
                  <div key={enquiri.id} className="flex  gap-2 mb-4 ">
                    <input type="radio" id={enquiri.id} className=" md:w-5 " />
                    <label htmlFor={enquiri.id} className="md:text-xl ">
                      {enquiri.label}
                    </label>
                  </div>
                ))}
              </div>

              <form className="grid grid-cols-1 mb-10">
                <input
                  type="text"
                  className="rounded-[5px] h-14 p-2 border border-solid border-gray-600 md:w-2/3 placeholder-black mb-3 outline-none"
                  placeholder="Name"
                />

                <input
                  type="email"
                  className={styles.inpuutexbox}
                  placeholder="Email"
                />
                <textarea
                  className={`${styles.inpuutexbox} h-36 mb-7 `}
                  placeholder="Message"
                />
                <div className="text-center w-full">
                  <button className="rounded-[28px] text-[18px] py-2 px-4 bg-[#004F2D] text-white  w-1/2 md:w-1/5">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className=" bg-[#ecf9e9] h-fit  max-w-fit py-4 my-10 lg:ml-[72px] xl:ml-auto">
              <div className="  px-3  py-3 leading-[1.6]">
                <p>Renewed-You</p>
                <p>349 Dakar street,</p>
                <p className="mb-4">Wuse zone 6, Abuja</p>
                <p className="underline text-[#35926a]">
                  contact@renewedyou.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
