import "./OurProcess.css";

const OurProcess = () => {
  const des =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero accusamus quisquam inventore delectus molestiae commodi in, rem aliquam dignissimos, expedita sunt labore possimus, nulla laborum. Maiores ratione nesciunt temporibus voluptatum nisi, dicta facere? Aliquam accusamus iste sint? Velit sapiente illo sit, architecto qui aliquid harum tenetur quisquam saepe necessitatibus.";

  const datas = [
    {
      title: "Ideation",
      des: des,
    },
    {
      title: "Conduction Competitive Analysis",
      des: des,
    },
    {
      title: "Intuitive UI/UX Design",
      des: des,
    },
    {
      title: "Development Phase",
      des: des,
    },
  ];

  return (
    <div className="mt-[50px] flex flex-col justify-center items-center gap-y-8">
      <div className="flex flex-col justify-center items-center gap-y-4 text-center ">
        <h1 className="text-[44px] font-medium leading-[55px] w-[65%]">
          Our Proven Web App Development Process
        </h1>
        <p className="w-[65%]">
          We have meticulously crafted a strategic roadmap, guiding you through
          each step with precision, to maximize the potential of your project
          and ensure its success.
        </p>
      </div>

      <div>
        <div className="timeline-main">
          <div className="timeline-wrap">
            {datas.map((item, i) => (
              <div key={i} className="timeline-card">
                <div className="timeline-card-wrap">
                  <div className="card-head-wrap">
                    <h2 className="timeline-card-head">{item.title}</h2>
                  </div>
                  <p className="timeline-card-text">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
