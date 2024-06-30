const StatisticsShowcase = () => {
  const datas = [
    { title: "Member Active", quantity: "10K+" },
    { title: "Happy Clients", quantity: "8K+" },
    { title: "Professional Team", quantity: "2K+" },
    { title: "Years Experience", quantity: "3+" },
  ];

  return (
    <div className="w-full h-[170px] bg-white shadow-lg rounded-[15px] p-5 flex justify-evenly items-center">
      {datas.map((item, i) => (
        <div key={i} className="flex items-center  h-full">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[60px] font-bold text-red-600">
              {item.quantity}
            </h1>
            <p className="text-[22px] font-bold">{item.title}</p>
          </div>
          {i < 3 && (
            <div className="w-[1px] h-full bg-gray-300 ml-[70px]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatisticsShowcase;
