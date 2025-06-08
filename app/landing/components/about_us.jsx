export default function AboutUs() {
  return (
    <section>
      <div className="flex flex-col bg-secondary-light items-center pt-4">
        <div className=" flex flex-col md:flex-row-reverse items-center md:gap-4 w-full">
          <div className=" hidden md:flex  md:mx-6 w-[200px] md:w-[30%] h-[200px] md:h-[450px] clip-pentagon bg-blue-500  items-center justify-center">
            <img
              src="images/landing_images/about_us.webp"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-4 w-[90%] md:w-[60%]">
            <div className="">
              <h1 className="text-primary underline mx-auto text-xl md:text-4xl font-mooli mt-6 my-2 text-center md:text-start">
                About Jujora
              </h1>
              <h1 className="text-black opacity-100 mx-auto text-xs md:text-2xl mb-5 text-center md:text-start capitalize">
                Get to know more about us
              </h1>
              <div className="flex md:hidden w-full  md:mx-6  md:w-[30%] h-[200px] md:h-[450px] clip-pentagon items-center justify-center">
                <img
                  src="images/landing_images/about_us.webp"
                  alt="Image"
                  className="w-[200px] h-full object-cover"
                />
              </div>
              <h1 className="text-black opacity-100 text-sm md:text-xl mb-5 text-center md:text-start">
                At Jujora, we’re passionate about making fresh, quality
                groceries effortlessly accessible to you. Founded in 2024, we
                combine the convenience of online shopping with fast, reliable
                delivery right to your doorstep. Whether you’re a busy
                professional, a homemaker, or anyone who values fresh produce,
                Jujora is here to simplify your grocery experience.
              </h1>
              <h1 className="text-black text-sm md:text-xl text-center md:text-start">
                We partner directly with trusted suppliers to ensure top-quality
                products at great prices. Our mission is to bring freshness,
                convenience, and happiness to every home.
              </h1>
            </div>
            <button className="bg-secondary rounded-lg py-2 px-2 lg:px-8 mb-5 md:mb-0">
              <h1 className="text-white text-sm lg:text-lg font-semibold">
                Read More...
              </h1>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
