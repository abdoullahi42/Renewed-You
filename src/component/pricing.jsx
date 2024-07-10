//eslint-disable-next-line
function Pricing() {
  return (
    <div className="bg-white dark:bg-gray-800 px-8">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-2 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-7 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight uppercase rounded-lg bg-gray-50 dark:bg-gray-700  font-abdu">
                Casual
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100  font-abdu">
                Free
              </span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                Up to 5 projects
              </li>
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                Up to 10 collaborators
              </li>
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                2Gb of storage
              </li>
            </ul>

            <button className="inline-flex items-center justify-center px-4 py-2 font-semibold  uppercase transition-colors rounded-lg  focus:outline-none  font-abdu">
              Start free
            </button>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight  uppercase rounded-lg bg-gray-50 dark:bg-gray-700  font-abdu">
                Profesional
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100  font-abdu">
                $24.90
              </span>
              <span className="text-gray-500 dark:text-gray-400  font-abdu">
                /month
              </span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                Up to 10 projects
              </li>
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                Up to 20 collaborators
              </li>
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                10Gb of storage
              </li>
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                Real-time collaborations
              </li>
            </ul>

            <button className="inline-flex items-center justify-center px-4 py-2 font-semibold  uppercase transition-colors  rounded-lg  focus:outline-none  font-abdu">
              Start free trial
            </button>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight  font-abdu uppercase rounded-lg bg-gray-50 dark:bg-gray-700  ">
                Expert
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100  font-abdu">
                $49.90
              </span>
              <span className="text-gray-500 dark:text-gray-400  font-abdu">
                /month
              </span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                Unlimited projects
              </li>
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                Unlimited collaborators
              </li>
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                Unlimited storage
              </li>
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                Real-time collaborations
              </li>
              <li className="text-gray-500 dark:text-gray-400  font-abdu">
                24x7 Support
              </li>
            </ul>

            <button className="inline-flex items-center justify-center px-4 py-2 font-semibold te uppercase transition-colors 0 rounded-lg  focus:outline-none  font-abdu">
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
