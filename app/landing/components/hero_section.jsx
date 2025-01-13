export default function HeroSection() {
  const items = [
    { img: "grocery_store", text: "Fully Convenient" },
    { img: "low_price", text: "Fair Prices" },
    { img: "natural_food", text: "Fresh Food" },
    { img: "in_transit", text: "Fast Delivery" },
  ];
  return (
    <div className="relative aspect-[1512/995]  ">
      <img
        className="w-full h-full object-cover"
        src="images/landing_images/action_image.webp"
      />

      {/* <div className=" flex flex-col gap-4 items-center absolute top-2 left-1/2 transform -translate-x-1/2 w-[100%] md:w-[60%] lg:right-[15%] lg:top-[30%] lg:w-2/5 text-center "> */}
      <div className=" lg:gap-4  absolute top-2 left-1/2 transform -translate-x-1/2 w-[100%]   md:left-[75%] md:top-[10%] md:w-2/5 h-full ">
      <div className="flex flex-col items-center justify-around md:justify-center text-center h-full py-[5%] md:py-0 md:gap-4">
      <h1 className=" text-white text-3xl lg:text-6xl text-wrap lg:mb-3 font-mountains font-extrabold">
          Connecting you to the heart of Agriculture
        </h1>

        <h1 className="text-white lg:text-3xl text-center lg:my-2 ">
          Enjoy the ease of shopping directly from farmers at your convenience
          ensuring quality and authenticity everytime.
        </h1>

        <button className="bg-secondary rounded-lg py-2 px-2 lg:px-4">
          <h1 className="text-white text-sm lg:text-lg font-semibold">
            Join The Waitlist
          </h1>
        </button>
        <div className=" flex md:hidden gap-2 justify-around ">
        {items.map((e) => (
          <div className="flex items-center gap-3" key={e.img}>
            <div className="flex justify-center items-center bg-secondary p-2 rounded-full ">
              <img src={`images/landing_images/${e.img}.webp`} className="h-10 w-10" alt="" />
            </div>
            <h1 className="text-white text-wrap font-medium text-sm md:text-base text-start">{e.text}</h1>
          </div>
        ))}
      </div>
      </div>
       
      </div>

      <div className=" hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full lg:w-[50%]  justify-around  ">
        {items.map((e) => (
          <div className="flex items-center gap-3" key={e.img}>
            <div className="flex justify-center items-center bg-secondary p-2 rounded-full w-20 h-20 ">
              <img src={`images/landing_images/${e.img}.webp`} alt="" />
            </div>
            <h1 className="text-white font-medium">{e.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
