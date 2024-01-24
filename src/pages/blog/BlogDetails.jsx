import { TbClockPin } from "react-icons/tb";

const BlogDetails = () => {
  return (
    <div className="flex justify-center items-center px-10 lg:px-[250px] py-5">
      <div>
        <img src="https://miro.medium.com/v2/resize:fit:750/1*3T7J7csXY8u36acofw5N8g.jpeg" alt="" className="w-full lg:h-[450px]"/>

        <h2 className="text-lg lg:text-[30px] font-medium mt-8 text-center">Architectural design software application for architect.</h2>

        <div className="flex justify-center items-center gap-5 text-sm text-slate-700">
            <p className="font-medium">Jhon Doe</p>
            <p>24.01.2024</p>
            <p className="flex items-center gap-1 mt-2"> <TbClockPin />2 min</p>
        </div>

        <p className="my-5 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga laborum, ullam cum ex facere natus totam accusantium ipsam blanditiis soluta. Porro delectus ducimus fugiat illum alias quo, rem ab, aliquam similique nesciunt deleniti nihil. Mollitia nesciunt soluta aliquid necessitatibus nulla sapiente minima. Natus soluta tempore, eius est nisi ex at quibusdam magnam aliquam non quidem quia ab. Vel mollitia maiores fugit fugiat, adipisci ullam alias eveniet consectetur esse atque natus enim consequuntur rerum explicabo, pariatur ad? Eaque tempora delectus numquam quibusdam enim accusamus aspernatur quaerat maiores rerum, aperiam dignissimos ea, modi unde quisquam inventore at suscipit quo praesentium ut recusandae! Qui magnam adipisci nulla obcaecati est neque amet cumque sequi facilis aspernatur vero, voluptatum enim odit eaque iure, voluptas dolorum dicta magni! Eius sed autem esse ducimus voluptate! Assumenda voluptatibus voluptatem velit error facere tempora fugit ea ipsum similique, placeat eligendi id tempore perferendis molestiae eius minima est fuga.</p>
      </div>
    </div>
  );
};

export default BlogDetails;
