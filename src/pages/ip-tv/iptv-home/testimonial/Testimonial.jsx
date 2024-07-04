import { FaStar, FaWifi } from "react-icons/fa";
import img1 from "../../../../assets/testimonial-1.png";

const Testimonial = () => {
  return (
    <div className="px-10 mt-5 mb-20">
      <div className="flex flex-col justify-center items-center">
        <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
          <FaWifi className="text-xl text-red-600" />
          TESTIMONIAL
        </h3>
        <h1 className="mt-2 text-[52px] font-bold leading-tight">
          What Our Clients Say
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((item, i) => (
          <div
            key={i}
            className="border-2 border-slate-200 rounded-[15px] shadow-lg h-[350px] p-8"
          >
            <div className="flex items-center gap-3 text-xl text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="mt-8 italic leading-loose">
              I absolutely love the IPTV service that I purchased from this
              website! The picture quality is crystal clear and the channel
              selection is amazing. It&apos;s been a game changer for my TV
              watching experience.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <img src={img1} alt="" className="w-[80px]" />
              <p className="text-2xl font-semibold">Mark V</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
