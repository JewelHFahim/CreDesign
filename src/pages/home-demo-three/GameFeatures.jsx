import { TbHexagon3Filled, TbHexagon9Filled } from "react-icons/tb";

const GameFeatures = () => {
  return (
    <div className="mt-[50px] flex flex-col justify-center items-center gap-y-8">
      <div className="flex justify-center items-center">
        <h1 className="text-[44px] font-medium max-w-[70%] text-center leading-[55px]">
          CloudySign’s Online Casino Games Features
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-x-6 gap-y-4">
        {Array.from({ length: 9 }).map((item, i) => (
          <div key={i} className="border flex flex-col gap-y-3 p-10">
            {i % 2 === 0 ? (
              <TbHexagon3Filled className="text-[50px] text-violet-500" />
            ) : (
              <TbHexagon9Filled className="text-[50px] text-blue-500" />
            )}

            <h3 className="text-lg font-medium">
              Large Portfolio on top performing content
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              aliquid aut minima ipsum voluptatem sit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameFeatures;
