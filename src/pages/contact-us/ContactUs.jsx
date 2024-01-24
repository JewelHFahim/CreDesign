import { BiSolidPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";


const ContactUs = () => {
  return (
    <div id="contact-us" className="px-10 lg:px-[120px] py-6 lg:py-10">
      <div className="flex flex-col lg:flex-row items-center">
        
        <div>
          <div>
            <h2 className="text-[30px] lg:text-[44px] text-black font-semibold lg:w-[70%] leading-[30px] lg:leading-[50px]">
              Need help? Get in touch now!
            </h2>
          </div>

          <div className="mt-6 lg:mt-12">
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-md bg-orange-100 flex justify-center items-center text-orange-500">
                <BiSolidPhoneCall className="text-[18px] lg:text-[25px]" />
              </div>
              <div>
                <p>Phone</p>
                <p className="lg:text-[22px] text-black font-medium hover:text-orange-500 lg:leading-[25px]">
                  +123 456 7890
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 lg:mt-8">
              <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-md bg-orange-100 flex justify-center items-center text-orange-500">
                <FiMail className="text-[18px] lg:text-[25px]" />

              </div>
              <div>
                <p>Email</p>
                <p className="lg:text-[22px] text-black font-medium hover:text-orange-500 lg:leading-[25px]">
                  example@email.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-12 max-w-lg mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3 lg:space-y-5">
            <div className="flex flex-col items-center gap-y-2 lg:gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="lg:font-medium"> First name </label>
                <input
                  type="text"
                  required
                  placeholder="first name"
                  className="w-full lg:mt-2 px-3 py-1 lg:py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="lg:font-medium"> Last name </label>
                <input
                  type="text"
                  required
                  placeholder="last name"
                  className="w-full lg:mt-2 px-3 py-1 lg:py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="lg:font-medium"> Email </label>
              <input
                type="email"
                required
                placeholder="email"
                className="w-full lg:mt-2 px-3 py-1 lg:py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="lg:font-medium"> Phone number </label>
              <div className="relative lg:mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                    <option>US</option>
                    <option>ES</option>
                    <option>MR</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="+1 (555) 000-000"
                  required
                  className="w-full pl-[4.5rem] pr-3 py-1 lg:py-2 appearance-none bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="lg:font-medium">Message</label>
              <textarea
                required
                placeholder="message"
                className="w-full lg:mt-2 h-24 lg:h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
              ></textarea>
            </div>

            <button className="w-full px-4 py-2 text-white font-medium bg-orange-600 hover:bg-orange-500 active:bg-orange-600 rounded-lg duration-150">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
