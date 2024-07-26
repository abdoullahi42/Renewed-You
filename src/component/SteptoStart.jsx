import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

//this component need to be refactor

function SteptoStart() {
  return (
    <section className="mb-14 lg:mb-16 ">
      <div className=" flex flex-col ">
        <div className="mx-auto text-center mb-4 lg:mb-6">
          <h3 className="font-semibold font-abdu text-2xl md:text-3xl lg:text-5xl mb-2">
            Start Your Journey To Healing
          </h3>
          <h2 className="font-semibold font-abdu text-xl lg:mb-4">
            Quick & easy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-3">
          <div className="text-center px-8 py-3 mb-3 sm:mb-0">
            <span className="mb-3 text-4xl inline-block">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <h3 className="font-semibold font-abdu text-xl mb-3 ">
              Find Your Ideal Match
            </h3>
            <p className=" font-abdu font-normal">
              We offers a range of qualified therapists who specialize in
              various areas and use different approaches. Find a therapist who
              aligns with your needs to create a comfortable and successful
              therapeutic experience.
            </p>
          </div>

          <div className="text-center px-8 py-3 mb-3 sm:mb-0">
            <span className="mb-3 text-4xl inline-block ">
              <ion-icon name="calendar-outline"></ion-icon>
            </span>
            <h3 className="font-semibold font-abdu text-xl mb-3">
              Shedule Appointment
            </h3>
            <p className="font-normal font-abdu">
              Once you ve found the right therapist, scheduling your initial
              session is easy. Choose a convenient time slot that works for your
              busy schedule and book your appointment.
            </p>
          </div>

          <div className="text-center px-8 py-3 mb-3 sm:mb-0">
            <span className="mb-3 text-4xl inline-block">
              <FontAwesomeIcon icon={faHandshake} />
            </span>
            <h3 className="font-semibold font-abdu text-xl mb-3">
              Start healing
            </h3>
            <p className="font-normal font-abdu">
              our therapist will work collaboratively with you to understand
              your concerns and develop a personalized plan to achieve your
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SteptoStart;
