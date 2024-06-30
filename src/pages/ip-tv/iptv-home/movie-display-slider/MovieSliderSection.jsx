import MovieDisplaySlider from "./MovieDisplaySlider";
import bg from "../../../../assets/home top thumb.webp";
import img1 from "../../../../assets/m1.jpg";
import img2 from "../../../../assets/m2.jpg";
import img3 from "../../../../assets/m3.jpg";
import img4 from "../../../../assets/m4.jpg";
import img5 from "../../../../assets/m5.jpg";
import img6 from "../../../../assets/m6.jpg";
import img7 from "../../../../assets/m7.jpg";
import img8 from "../../../../assets/m8.jpg";
import img9 from "../../../../assets/m9.jpg";
import img10 from "../../../../assets/m10.jpg";
import img11 from "../../../../assets/m11.jpg";
import img12 from "../../../../assets/m11.jpg";
import StatisticsShowcase from "./StatisticsShowcase";

const MovieSliderSection = () => {
  const images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
  ];

  return (
    <div
      className="commonPadding bg-green-20 h-[600px] cover bg-center relative flex flex-col justify-start items-center mb-[100px]"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="w-full h-[360px] mt-20">
        <MovieDisplaySlider images={images} />
      </div>

      <div  className="w-full mt-[90px] z-[99]">
        <StatisticsShowcase />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 bg-opacity-[80%]"></div>
    </div>
  );
};

export default MovieSliderSection;
