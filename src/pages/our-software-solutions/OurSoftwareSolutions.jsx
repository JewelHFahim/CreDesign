import { BsGlobe2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { TbChartDonut3 } from "react-icons/tb";
import { LiaHandshake } from "react-icons/lia";
import { BsPostcard } from "react-icons/bs";

const OurSoftwareSolutions = () => {

  const datas = [
    {
      title: "CUSTOMIZABLE SITE DESIGNS",
      description:
        "Select from our carefully curated portfolio of beautifully crafted web designs, and customize it to perfectly align with your brand.",
      icon: <BsGlobe2 />,
    },

    {
      title: "INTELLIGENT REPORTS",
      description:
        "Effortlessly track and analyze player activity using our intelligent CRM. Unlock valuable insights and in-depth analytics to gain a comprehensive understanding of your business performance.",
      icon: <IoSettingsOutline />,
    },

    {
      title: "GAMIFICATION",
      description:
        "Delight your players with a flexible tournament system, exciting minigames, and engaging daily missions that will keep them coming back for more!",
      icon: <FaUsers />,
    },

    {
      title: "HYBRID AFFILIATE SYSTEM",
      description:
        "Offer comprehensive management of affiliate programs in both cash and credit markets. Our robust affiliate management system allows you to effortlessly recruit and track affiliates, ensuring seamless operations.",
      icon: <TbChartDonut3 />,
    },

    {
      title: "SUPER-FAST LAUNCH",
      description:
        "Our ready-made solution ensures that your online casino business is ready for launch in the shortest time possible.",
      icon: <LiaHandshake />,
    },

    {
      title: "ROBUST MARKETING TOOLKIT",
      description:
        "Easily and effectively acquire, convert, and retain players for your online casino business by leveraging a range of powerful marketing strategies, including SEO, email newsletters, SMS marketing, loyalty programs and more!",
      icon: <BsPostcard />,
    },
  ];

  return (
    <div className="bg-gray-50 px-[80px] py-[100px] flex justify-center items-center">
      <div>
        <div className="text-black text-center w-[85%] mx-auto">
          <h1 className="text-[40px] font-semibold leading-[50px]">
            HOW WILL YOU BENEFIT FROM USING GSGLOBAL WHITE LABEL SOLUTION
          </h1>
          <p className="text-lg">
            Our white label software system offers an efficient and
            all-inclusive solution for launching your own online gaming site
            quickly. With our extensive industry expertise and market experience
            embedded within our white label online casino solution, you position
            yourself for success in the highly competitive online gambling
            industry!
          </p>
        </div>

        <div className="mt-12 w-full flex justify-center items-center">
          <div className="grid grid-cols-3 gap-5">
            {datas.map((item, i) => (
              <div
                key={i}
                className=" p-10 flex flex-col items-center justify-center gap-y-5 text-center"
              >
                <div className="text-[60px] text-orange-600 ">{item.icon}</div>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-lg leading-[25px] text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSoftwareSolutions;
