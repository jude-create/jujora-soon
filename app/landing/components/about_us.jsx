export default function AboutUs(){
    return  <section>
    <div className="flex flex-col bg-primary items-center pt-4">
      <h1 className="text-secondary underline mx-auto text-3xl md:text-6xl font-mountains mt-6 my-2">About Jujora</h1>
      <h1 className="text-secondary mx-auto text-2xl md:text-3xl">Get to know more about us</h1>
      <div className=" flex flex-col md:flex-row items-center md:gap-4 w-full">
        <div className=" md:mx-6 w-[30%] md:h-[450px] clip-pentagon bg-blue-500 flex items-center justify-center">
          <img
            src="images/landing_images/about_us.webp"
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4 w-[60%]">
          <div className="">
            <h1>
              cus, ut interdum tellus elit sed risus. Maecenas eget
              condimentum velit, sit amet feugiat lectus. Class aptent
              taciti sociosqu ad litoMorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam eu turpis molestie, dictum est a,
              mattis tellus. Sed dignissim, metus nec fringilla accumsan,
              risus sem sollicitudin lacus, ut interdum tellus elit sed
              risus. Maecenas eget condimentum velit, sit amet feugiat
              lectus. Class aptent taciti sociosqu ad litoMorem ipsum dolor
              sit amet, consectetur adipiscing elit. Etiam eu turpis
              molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut
              interdum tellus elit sed risus. Maecenas eget condimentum
              velit, sit amet feugiat lectus. Class aptent taciti sociosqu
              ad litoMorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
              Sed dignissim, metus nec fringilla
            </h1>
          </div>
          <button className="bg-secondary rounded-lg py-2 px-2 lg:px-4">
            <h1 className="text-white text-sm lg:text-lg font-semibold">
              Read More...
            </h1>
          </button>
        </div>
      </div>
    </div>
  </section>
}