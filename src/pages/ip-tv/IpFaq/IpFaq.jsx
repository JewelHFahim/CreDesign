/* eslint-disable react/prop-types */
import { FaWifi } from "react-icons/fa";
import { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden "
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium border-b border-red-600">
        <span className={`${state ? "text-red-600" : ""}`}>{faqsList.q}</span>
        {state ? (
          <IoIosArrowRoundUp className="text-red-600 text-2xl" />
        ) : (
          <IoIosArrowDown />
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const IpFaq = () => {
  const faqsList = [
    {
      q: "How much time do you need for casino software?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "What is cost of a online spinner wheel game?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I get only API integration service?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can you make a custom app?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
  ];

  return (
    <div className="commonPadding mb-16">
      <div>
        <div className="mt-24 flex flex-col justify-center items-center">
          <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
            <FaWifi className="text-xl text-red-600" />
            FAQ
          </h3>
          <h1 className="mt-2 text-[52px] font-bold leading-tight">
            What Can We Help You?
          </h1>
        </div>

        <div className="mt-14 lg:mx-20">
          {faqsList.map((item, idx) => (
            <FaqsCard key={idx} idx={idx} faqsList={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IpFaq;
