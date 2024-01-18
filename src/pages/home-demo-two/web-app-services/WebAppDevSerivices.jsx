import { BsGraphUpArrow } from "react-icons/bs";

const WebAppDevSerivices = () => {
  const datas = [
    {
      title: "Cost-Effective Process",
      des: "We take a personalized approach to creating web applications that perfectly align with your business objectives",
      icon: <BsGraphUpArrow />,
    },
    {
      title: "All under One Roof",
      des: "We take a personalized approach to creating web applications that perfectly align with your business objectives",
      icon: <BsGraphUpArrow />,
    },
    {
      title: "Creative Team",
      des: "We take a personalized approach to creating web applications that perfectly align with your business objectives",
      icon: <BsGraphUpArrow />,
    },
    {
      title: "24/7 Help Desk",
      des: "We take a personalized approach to creating web applications that perfectly align with your business objectives",
      icon: <BsGraphUpArrow />,
    },
    {
      title: "New Technology Integration",
      des: "We take a personalized approach to creating web applications that perfectly align with your business objectives",
      icon: <BsGraphUpArrow />,
    },
    {
      title: "Post-Development Services",
      des: "We take a personalized approach to creating web applications that perfectly align with your business objectives",
      icon: <BsGraphUpArrow />,
    },
  ];

  return (
    <div className="mt-[50px] flex flex-col justify-center items-center gap-y-8 w-full">
      <div className="gap-y-4 text-center flex justify-center">
        <h1 className="text-[44px] font-medium leading-[55px] w-[65%]">
          CloudySign is Your One-Stop Station for Web App Development Services
        </h1>
      </div>

      <div className="border bg-white shadow-md py-4 px-8">
        <div className="flex justify-center items-center text-center">
          <p className="w-[80%]">
            We take a personalized approach to creating web applications that
            perfectly align with your business objectives. From concept to
            deployment, we ensure your digital solution is as unique as your
            vision.
          </p>
        </div>

        <table className="mt-5">
          <tbody>
            {[1, 2, 3].map((item, i) => (
              <tr key={i}>

                <td className="border-r border-b">
                  <div className="flex flex-col gap-y-2 p-[40px]">
                    <BsGraphUpArrow className="text-[30px]" />
                    <h3 className="text-[20px] font-semibold">
                      Cost-Effective Process
                    </h3>
                    <p className="w-[60%]">
                      We take a personalized approach to creating web
                      applications that perfectly align with your business
                      objectives
                    </p>
                  </div>
                </td>

                <td className="border-b">
                  <div className="flex flex-col gap-y-2 p-[40px]">
                    <BsGraphUpArrow className="text-[30px]" />
                    <h3 className="text-[20px] font-semibold">
                      Cost-Effective Process
                    </h3>
                    <p className="w-[60%]">
                      We take a personalized approach to creating web
                      applications that perfectly align with your business
                      objectives
                    </p>
                  </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebAppDevSerivices;
