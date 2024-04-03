const Banner = () => {
  return (
    <div className="h-[60vh]">
      <div className="text-center pt-12">
        <div className="py-8">
          <h2 className="text-4xl font-bold">
            I Grow By Helping People In Need
          </h2>
        </div>
        <div className="flex justify-center items-center ">
          <div className="">
            <input
              className="w-96 py-3 px-3"
              type="text"
              placeholder="Search here..."
            />
          </div>
          <div className=" absolute ml-80 mr-5">
            <button className=" py-3 px-5 rounded-r-md bg-rose-500 text-white font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
