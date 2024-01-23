import { BsGraphUpArrow } from "react-icons/bs";

const WebAppDevSerivices = () => {
  return (
    <div className="mt-[50px] flex flex-col justify-center items-center gap-y-4 lg:gap-y-8 w-ful">
      <div className="gap-y-4 text-center flex justify-center">
        <h1 className="text-[30px] lg:text-[44px] font-medium leading-[40px] lg:leading-[55px] lg:w-[65%]">
          CloudySign is Your One-Stop Station for Web App Development Services
        </h1>
      </div>

      <div className="border bg-white shadow-md py-5 px-4 lg:px-8">
        <div className="flex justify-center items-center text-center">
          <p className="lg:w-[80%]">
            We take a personalized approach to creating web applications that
            perfectly align with your business objectives. From concept to
            deployment, we ensure your digital solution is as unique as your
            vision.
          </p>
        </div>

        <table className="my-5 hidden lg:block">
          <tbody>
            <tr>
              <td className="border-r border-b">
                <div className="flex flex-col gap-y-2 p-[40px]">
                  <BsGraphUpArrow className="text-[30px]" />
                  <h3 className="text-[20px] font-semibold">
                    Cost-Effective Process
                  </h3>
                  <p className="w-[60%]">
                    We take a personalized approach to creating web applications
                    that perfectly align with your business objectives
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
                    We take a personalized approach to creating web applications
                    that perfectly align with your business objectives
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border-r border-b">
                <div className="flex flex-col gap-y-2 p-[40px]">
                  <BsGraphUpArrow className="text-[30px]" />
                  <h3 className="text-[20px] font-semibold">
                    Cost-Effective Process
                  </h3>
                  <p className="w-[60%]">
                    We take a personalized approach to creating web applications
                    that perfectly align with your business objectives
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
                    We take a personalized approach to creating web applications
                    that perfectly align with your business objectives
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border-r">
                <div className="flex flex-col gap-y-2 p-[40px]">
                  <BsGraphUpArrow className="text-[30px]" />
                  <h3 className="text-[20px] font-semibold">
                    Cost-Effective Process
                  </h3>
                  <p className="w-[60%]">
                    We take a personalized approach to creating web applications
                    that perfectly align with your business objectives
                  </p>
                </div>
              </td>

              <td>
                <div className="flex flex-col gap-y-2 p-[40px]">
                  <BsGraphUpArrow className="text-[30px]" />
                  <h3 className="text-[20px] font-semibold">
                    Cost-Effective Process
                  </h3>
                  <p className="w-[60%]">
                    We take a personalized approach to creating web applications
                    that perfectly align with your business objectives
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="my-5 block lg:hidden">
          <tbody>
            {Array.from({ length: 6 }).map((item, i) => (
              <tr key={i}>
                <td className="">
                  <div className="flex flex-col gap-y-2 mt-5">
                    <BsGraphUpArrow className="text-[30px]" />
                    <h3 className="font-semibold">
                      Cost-Effective Process
                    </h3>
                    <p className="">
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
