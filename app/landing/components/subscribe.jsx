export default function Subscribe() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/landing_images/subscribe.webp')`,
      }}
      className="w-full bg-cover bg-center flex flex-col items-center justify-around aspect-[1512/610] px-10"
    >
      <h1 className="font-mountains text-3xl md:text-6xl underline text-secondary">
        Subscribe to our Newsletter
      </h1>
      <h1 className="text-xl md:text-3xl font-semibold my-3 md:my-0 text-center ">
        Join the JUJORA community now to get all the news and insights <span className="text-white">directly
        to your mailbox</span> 
      </h1>

      <div className="flex flex-col md:flex-row gap-4 w-full  items-center justify-around">
        <input
          type="text"
          placeholder="Enter your Full Name"
          class="w-[45%] h-[60px] border-2 border-orange-400 rounded-lg px-4 text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        />
        <input
          type="text"
          placeholder="Enter your Email Address"
          class="w-[45%] h-[60px] border-2 border-orange-400 rounded-lg px-4 text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        />
      </div>

      <button className="bg-secondary rounded-lg my-4 py-2 md:py-4 px-2 md:px-6 hover:bg-opacity-80">
        <h1 className="text-white text-sm lg:text-lg font-semibold">
          Subscribe
        </h1>
      </button>
      
    </div>
  );
}
