const Blog = () => {
  return (
    <div className="">

      <section className="flex items-center bg-gray-100 lg:h-screen ">
        <div className="p-4 mx-auto max-w-7xl">

          <div className="mb-5 text-center">
            <span className="block text-xs font-semibold leading-4 tracking-widest text-center text-orange-500 uppercase">
              Our blog
            </span>
            <h1 className="text-3xl font-bold capitalize"> Blog List </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="mb-0 overflow-hidden text-center bg-white rounded shadow"
              href={`/blog/1`}
            >
              <div className="relative overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://i.postimg.cc/GmM9VxxJ/pexels-pavel-danilyuk-8381916.jpg"
                  alt=""
                />
              </div>
              <div className="relative z-20 p-8 -mt-16 ">
                <img
                  className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full"
                  src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                  alt=""
                />
                <span className="block mb-2 text-xs font-semibold text-orange-700 uppercase">
                  John Doe • 6th Jun, 2022
                </span>
                <h2 className="mb-3 text-2xl font-bold leading-9 text-orange-800">
                  Lorem ipsum dolor sit amet, consectetur
                </h2>
                <p className="text-base leading-7 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </a>
            <a
              className="mb-0 overflow-hidden text-center bg-white rounded shadow"
              href={`/blog/2`}
            >
              <div className="relative overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://i.postimg.cc/KYSTYzB1/pexels-pixabay-356056.jpg"
                  alt=""
                />
              </div>
              <div className="relative z-20 p-8 -mt-16 ">
                <img
                  className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full"
                  src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                  alt=""
                />
                <span className="block mb-2 text-xs font-semibold text-orange-700 uppercase">
                  John Doe • 6th Jun, 2022
                </span>
                <h2 className="mb-3 text-2xl font-bold leading-9 text-orange-800">
                  Lorem ipsum dolor sit amet, consectetur
                </h2>
                <p className="text-base leading-7 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </a>
            <a
              className="mb-0 overflow-hidden text-center bg-white rounded shadow "
              href={`/blog/3`}
            >
              <div className="relative overflow-hidden h-72">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://i.postimg.cc/J0czqNhX/pexels-pixabay-2097.jpg"
                  alt=""
                />
              </div>
              <div className="relative z-20 p-8 -mt-16 ">
                <img
                  className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full"
                  src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                  alt=""
                />
                <span className="block mb-2 text-xs font-semibold text-orange-700 uppercase">
                  John Doe • 6th Jun, 2022
                </span>
                <h2 className="mb-3 text-2xl font-bold leading-9 text-orange-800">
                  Lorem ipsum dolor sit amet, consectetur
                </h2>
                <p className="text-base leading-7 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
