/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { FaWifi } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

const FaqsCard = ({ faqsList, idx }) => {
  const answerElRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-2 mt-2 overflow-hidden" key={idx}>

      <h4
        className="cursor-pointer pb-2 flex items-center justify-between text-lg text-red-600 font-medium border-b"
        onClick={handleOpenAnswer}
      >
        {faqsList.q}
        {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
      </h4>

      <div
        ref={answerElRef}
        className="transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isOpen ? `${answerElRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div ref={answerElRef} className="py-2">
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const ChannelList = () => {
  const faqsList = [
    {
      q: "How much",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "What is",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Can I get?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
  ];

  return (
    <div className="px-[120px] pb-10">
      <div className="mt-24 flex flex-col justify-center items-center">
        <h3 className="flex items-center gap-2 tracking-widest uppercase font-bold">
          <FaWifi className="text-xl text-red-600" />
          CHANNELS LIST
        </h3>
        <h1 className="mt-5 text-[30px] font-bold w-2/3 text-center">
          Discover Your Favorite Channels From Anywhere In The World With Our
          Extensive Selection.
        </h1>
      </div>

      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
