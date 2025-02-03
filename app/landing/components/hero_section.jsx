import Image from "next/image";

export default function HeroSection() {
  const items = [
    { img: "grocery_store", text: "Fully Convenient" },
    { img: "low_price", text: "Fair Prices" },
    { img: "natural_food", text: "Fresh Food" },
    { img: "in_transit", text: "Fast Delivery" },
  ];
  return (
    <div className="relative aspect-[410/337] md:aspect-[1512/995]  ">
      <Image
        className="w-full h-full object-cover"
        src="/images/landing_images/action_image.webp"
        fill
        alt=""
      />

      <div className=" lg:gap-4  absolute  left-1/2 transform -translate-x-1/2 w-[100%]   md:left-[75%] md:top-[10%] md:w-2/5 h-full ">
        <div className="flex flex-col items-center justify-around md:justify-center text-center h-full py-[5%] md:py-0 md:gap-4">
          <h1 className=" text-white text-2xl md:text-3xl lg:text-6xl text-wrap lg:mb-3 font-mountains font-extrabold">
            Connecting you to the heart of Agriculture
          </h1>

          <h1 className="text-white text-base lg:text-3xl text-center lg:my-2 ">
            Enjoy the ease of shopping directly from farmers at your convenience
            ensuring quality and authenticity everytime.
          </h1>

          <button className="bg-secondary rounded-lg py-2 px-2 lg:px-4">
            <h1 className="text-white text-sm lg:text-lg font-semibold">
              Join The Waitlist
            </h1>
          </button>
          <div className=" flex flex-wrap  items-center md:hidden mt-2 justify-center gap-3 w-full">
            {items.map((e) => (
              <div
                className="flex items-center justify-around gap-1 md:gap-3 "
                key={e.img}
              >
                <div className="flex items-center justify-center bg-secondary p-1 rounded-full h-10 w-10 ">
                    <Image
                      src={`/images/landing_images/${e.img}.webp`}
                      className="text-white"
                      alt={e.img}
                      height={50}
                      width={30}
                    />
                </div>
                <h1 className="text-white text-wrap font-medium text-xs md:text-base text-start">
                  {e.text}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full lg:w-[50%]  justify-around  ">
        {items.map((e) => (
          <div className="flex items-center gap-3" key={e.img}>
            <div className="flex justify-center items-center bg-secondary p-2 rounded-full ">
              <Image
                src={`/images/landing_images/${e.img}.webp`}
                alt={e.img}
                width={45}
                height={45}
              />
            </div>
            <h1 className="text-white font-medium">{e.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
