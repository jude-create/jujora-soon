export default function Testimonials() {
  const testimonials_color = ["pink", "#DAFFA7", "#B7F2FF"];
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-secondary underline mx-auto text-3xl md:text-6xl font-mountains my-2 mt-10">
          Testimonials
        </h1>
        <h1 className=" mx-auto text-2xl md:text-3xl">
          What our clients say about us!
        </h1>

        <div className="flex flex-col md:flex-row justify-around items-center w-full my-20 gap-20 md:gap-0">
          {testimonials_color.map((e) => (
            <div
              key={e}
              className="relative w-96 p-8 rounded-lg shadow-lg"
              style={{ backgroundColor: e }} // Dynamically set the background color
            >
              <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
                <img
                  src="images/landing_images/man.webp"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="mt-12 text-yellow-500 text-4xl">&ldquo;</div>
              <p className="mt-4 text-gray-700 text-center">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Nunc
                Vulputate Libero Et Vel Interdum, At Aliquet Odio Mattis.
              </p>
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-pink-600">
                  Chiamaka Ogunnepo
                </p>
                <p className="text-sm text-gray-500">Home-Maker/Banker</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
