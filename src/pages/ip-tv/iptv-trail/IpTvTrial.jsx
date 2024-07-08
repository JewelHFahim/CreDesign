import { FaWifi } from "react-icons/fa";

const IpTvTrial = () => {
  return (
    <div className=" px-[20px] lg:px-[120px] pt-[60px] lg:mt-[100px] mb-10">
      <div className="">
        <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
          <FaWifi className="text-xl text-red-600" />
          REQUEST AN IPTV TRIAL
        </h3>
        <h1 className="mt-2 text-[29px] lg:text-[52px] font-bold leading-tight">
          Evaluating An IPTV Service Before Paying For It Is Any Client&apos;s
          Right.
        </h1>
        <p className="mt-8 w-[90%] leading-loose">
          Here with us, you have the chance to use our IPTV Free Trial for 24
          hours.
        </p>
      </div>

      <form className="mt-10 border rounded-[18px] shadow-xl px-5 py-10 flex flex-col gap-8">
        {/* ==========================>> Name and Email <<============================ */}
        <div className="flex flex-col lg:flex-row  w-full gap-5">
          <div className="flex flex-col w-full">
            <label className="text-lg font-medium">Name</label>
            <input
              type="text"
              placeholder="Any Name"
              className="mt-1 border w-full py-2 px-4 focus:outline-blue-500"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-lg font-medium">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Please enter a Valid Email Address"
              className="mt-1 border w-full py-2 px-4 focus:outline-blue-500"
            />
          </div>
        </div>

        {/* ==========================>> Country Select <<============================ */}
        <div className="flex gap-5">
          <div className="flex flex-col w-full">
            <label className="text-lg font-medium">Country</label>
            <select className="border w-full py-2 px-4 overflow-hidden focus:outline-blue-500">
              <option hidden> Country </option>
              <option>BD</option>
              <option>UK</option>
              <option>USA</option>
            </select>
          </div>

          <div className="w-full hidden lg:block"></div>
        </div>

        {/* ==================>> Device and Application Select <<===================== */}
        <div className="flex flex-col lg:flex-row  w-full gap-5">
          <div className="flex flex-col w-full">
            <label className="text-lg font-medium">Country</label>
            <select className="border w-full py-2 px-4 focus:outline-blue-500">
              <option>Android Box</option>
              <option>Apple Tv</option>
              <option>Smart Tv</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-lg font-medium">IpTv Application</label>
            <select className="border w-full py-2 px-4 focus:outline-blue-500 overflow-hidden">
              <option>Android Box</option>
              <option>Apple Tv</option>
              <option>Smart Tv</option>
            </select>
          </div>
        </div>

        {/* ===========================>> Channels <<================================== */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Channels</label>
          <div className="flex items-center gap-2">
            <input type="radio" />
            <p>All Playlist</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" />
            <p>Specific Channels</p>
          </div>
        </div>

        {/* ======================>> Adult Channel Select <<=========================== */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Adult Channels</label>
          <div className="flex items-center gap-2">
            <input type="radio" />
            <p>Yes</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" />
            <p>No</p>
          </div>
        </div>

        {/* ============================>> Note  <<===================================== */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Note!</label>
          <textarea
            rows={4}
            type="text"
            placeholder="Any suggesstion or question?"
            className="border p-5 focus:outline-blue-600"
          />
        </div>

        {/* ===============================>> Single Line<<============================= */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Single Line Text</label>
          <input
            type="text"
            className="lg:w-1/2 py-2 px-5 border focus:outline-blue-500"
          />
        </div>

        <div>
          <button className="bg-blue-700 text-white uppercase px-8 py-2.5 hover:bg-blue-800">
            Submit
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-gray-500">
        Please check your email inbox (important, spam, etc.). if you have not
        received your response within the given time, please contact us via
        Support Email, Whatsapp .
      </p>

      <div className="mt-14">
        <div>
          <h3 className="text-gray-600 font-semibold lg:text-lg">
            Discover a new realm of entertainment with our exclusive 24-hour
            <span className="text-red-600"> IPTV </span> free trial. Experience
            the future of television on your terms. Start your trial today!
          </h3>

          <p className="text-gray-500 mt-5">
            Experience the most reliable and stable
            <span className="text-red-600"> IPTV </span> service, offering over
            28,000 live and popular channels. Enjoy a VOD library with more than
            100,000 movies. Access a 7-day EPG in Gild or Classic format.
          </p>

          <div className="mt-4 text-gray-500 flex flex-col gap-1.5">
            <li>Stable and reliable IPTV service</li>
            <li>28,000+ popular and live channels</li>
            <li>Watch the latest movies on VOD</li>
            <li>7-day EPG available in Gild and Classic formats</li>
            <li>Try IPTV instantly with no credit card required.</li>
          </div>
        </div>

        <p className="mt-6 text-lg uppercase font-semibold text-gray-500">
          HOW DO I USE IPTV FREE TRIAL?
        </p>

        <div className="my-7">
          <h1 className="my-5 text-3xl lg:text-4xl font-[700]">
            Step 1: Download The IPTV App
          </h1>
          <p className="text-gray-400 mt-5">
            Begin by downloading the IPTV app on your preferred device. For a
            seamless experience, we recommend using apps like Tivimate or IPTV
            Smarters Pro.
          </p>
        </div>

        <div className="my-7">
          <h1 className="my-5 text-3xl lg:text-4xl font-[700]">
            Step 2: Obtain A
            <span className="text-red-600 pl-2">Free IPTV Trial Code</span>
          </h1>
          <p className="text-gray-400 mt-5">
            Request a free IPTV trial code from us to explore our service. This
            trial code allows you to experience our features and channels before
            committing.
          </p>
        </div>

        <div className="my-7">
          <h1 className="my-5 text-3xl lg:text-4xl font-[700]">
            Step 3: Activate Your IPTV Trial Code
          </h1>
          <p className="text-gray-400 mt-5">
            Activate your IPTV trial code by following the provided
            instructions. Typically, this involves entering the code in the
            app’s settings or activation section.
          </p>
        </div>

        <div className="my-7">
          <h1 className="my-5 text-3xl lg:text-4xl font-[700]">
            Step 4: Select
            <span className="text-red-600 pl-2">A Paid IPTV Plan</span>
          </h1>
          <p className="text-gray-400 mt-5">
            After enjoying the trial, choose a paid IPTV plan that suits your
            preferences. Explore our range of plans for access to a wide variety
            of channels and features.
          </p>

          <p className="text-gray-400 mt-5">
            By following these steps, you’ll seamlessly transition from
            exploring the free trial to enjoying the benefits of a paid IPTV
            plan. If you have any questions or need assistance, feel free to
            reach out to our support team.
          </p>
        </div>

        <div className="mt-8">
          <h1 className="text-5xl font-semibold">Key Features</h1>

          <div className="text-gray-400 mt-5 flex flex-col gap-2">
            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Work Anywhere:
              </span>
              The internet allows you to work from anywhere in the world.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Reliability:
              </span>
              Our IPTV service is up 99.99% of the time.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Seamless Streaming:
              </span>
              Enjoy solid IPTV service without buffering and freezing.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                24/7 Customer Support:
              </span>
              We’re always here to help.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Free Trial:
              </span>
              Easy to test with a 24-hour free trial.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Instant Code Delivery:
              </span>
              Receive your order code instantly after purchase.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Extensive Content:
              </span>
              Access 16,000+ live TV channels and 40,000+ VOD movies.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                EPG Options:
              </span>
              Choose from Grid, Classic, or Traditional EPG menus.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Device Compatibility:
              </span>
              Compatible with Android TV Boxes, Android Phones, Android Tablets,
              Amazon Fire Sticks, Nvidia Shields, etc.
            </li>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-4xl lg:text-5xl font-semibold text-red-600">
            Subscription Plans
          </h1>

          <div className="text-gray-400 mt-5 flex flex-col gap-2">
            <li>
              <span className="text-gray-500 font-semibold pr-1">
                One Month:
              </span>
              Monthly IPTV subscription.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Three Month:
              </span>
              Quarterly IPTV subscription.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Six Month:
              </span>
              Semi-annual IPTV subscription.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Twelve Month:
              </span>
              We’re always here to help.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Twenty-Four Months Subscription:
              </span>
              Enjoy IPTV for two full years
            </li>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Frequently Asked Questions About Our IPTV Free Trial
          </h1>

          <div className="mt-8">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              What is the difference between an unpaid subscription code and a
              paid subscription code?
            </h2>

            <li className="mt-5">
              <span className="text-gray-500 font-semibold pr-1">
                Trial Code:
              </span>
              Valid for 24 hours.
            </li>

            <li className="mt-2">
              <span className="font-semibold pr-1 text-red-600">
                Paid Subscription Code:
              </span>
              Valid for 31/93/186/372 days.
            </li>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Why might the subscription code not work?
          </h1>

          <div className="text-gray-400 mt-5 flex flex-col gap-2">
            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Work Anywhere:
              </span>
              The internet allows you to work from anywhere in the world.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Reliability:
              </span>
              Our IPTV service is up 99.99% of the time.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Seamless Streaming:
              </span>
              Enjoy solid IPTV service without buffering and freezing.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                24/7 Customer Support:
              </span>
              We’re always here to help.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Free Trial:
              </span>
              Easy to test with a 24-hour free trial.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Instant Code Delivery:
              </span>
              Receive your order code instantly after purchase.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Extensive Content:
              </span>
              Access 16,000+ live TV channels and 40,000+ VOD movies.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                EPG Options:
              </span>
              Choose from Grid, Classic, or Traditional EPG menus.
            </li>

            <li>
              <span className="text-gray-500 font-semibold pr-1">
                Device Compatibility:
              </span>
              Compatible with Android TV Boxes, Android Phones, Android Tablets,
              Amazon Fire Sticks, Nvidia Shields, etc.
            </li>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            What is your IPTV code?
          </h1>

          <div className="text-gray-400 mt-5 flex flex-col gap-2">
            <li>What is your IPTV code?</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpTvTrial;
