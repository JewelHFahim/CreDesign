import img1 from "../../assets/blogSeven.png";
import { TbClockPin } from "react-icons/tb";

const Blog = () => {


  return (
    <div className="mt-[60px]">

      <div>
        
          <div className="flex justify-center items-center">
          <h2 className="text-[44px] font-medium uppercase"> OUR RECENT BLOG </h2>
          </div>
     

        <div className="mt-8 grid grid-cols-3 gap-x-5">
          {[1, 2, 3].map((item, i) => (
            <div key={i} className="border rounded-lg flex flex-col justify-center gap-y-3 w-full p-4">
              <img src={img1} alt="" className="w-full h-full" />
              <p className="flex items-center justify-between">
                <span className="uppercase text-orange-500 font-medium">
                  Fashion
                </span>
                <span className="flex items-center gap-1">
                  <TbClockPin />1 Min read
                </span>
              </p>
              
              <h3 className="text-[25px] leading-[30px] font-medium hover:text-orange-500">
                Architectural design software application for architect.
              </h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Blog;
