import "./ServicesWeOffer.css";

const ServiceWeOffer = ({title}) => {
  return (
    <div className="mt-[50px] flex flex-col justify-center items-center gap-y-8">
      
      <div className="flex flex-col justify-center items-center gap-y-4 text-center ">
        <h1 className="text-[44px] font-medium leading-[55px] w-[65%]">
         {title}
        </h1>
        <p className="w-[65%]">
          We take a personalized approach to creating web applications that
          perfectly align with your business objectives. From concept to
          deployment, we ensure your digital solution is as unique as your
          vision.
        </p>
      </div>

      <div className="w-full">
        <div className="grid-wrapper">

          <div className="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"  alt=""/>

            <div className="bg-black bg-opacity-[40%] w-full h-full absolute top-0 left-0">
              <div className="w-full h-full relative border">
                <div className=" absolute bottom-5 left-5">
				<img src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt=""  className="w-[50px] h-[50px] rounded-full border-2 border-white"/>
                <p className="mt-2 text-white leading-[20px]"> Custom Web application Development </p>
				</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80"
              alt=""
            />

			<div className="bg-black bg-opacity-[40%] w-full h-full absolute top-0 left-0">
              <div className="w-full h-full relative border">
                <div className=" absolute bottom-5 left-5">
				<img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt=""  className="w-[50px] h-[50px] rounded-full border-2 border-white"/>
                <p className="mt-2 text-white  leading-[20px]"> E-Commerce Development </p>
				</div>
              </div>
            </div>
          </div>

          <div className="tall relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              alt=""
            />

			<div className="bg-black bg-opacity-[40%] w-full h-full absolute top-0 left-0">
              <div className="w-full h-full relative border">
                <div className=" absolute bottom-5 left-5">
				<img src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""  className="w-[50px] h-[50px] rounded-full border-2 border-white"/>
                <p className="mt-2 text-white  leading-[20px]"> Enterprise web Development </p>
				</div>
              </div>
            </div>
          </div>

          <div className="wide relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />

			<div className="bg-black bg-opacity-[40%] w-full h-full absolute top-0 left-0">
              <div className="w-full h-full relative border">
                <div className=" absolute bottom-5 left-5">
				<img src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt=""  className="w-[50px] h-[50px] rounded-full border-2 border-white"/>
                <p className="mt-2 text-white  leading-[20px]"> Portfolio Web Design & Development </p>
				</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceWeOffer;
