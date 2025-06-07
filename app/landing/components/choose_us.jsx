export default function ChooseUs() {
  let topics = [
    {
      title: "Reliable Freshness, Everytime!",
      text: "At Jujora, we prioritize quality above all else. We carefully source our meats and groceries from trusted suppliers to ensure that what you receive is fresh, safe, and delicious. With us, you can count on consistently top-notch products delivered right to your door.",
      color: "#B7F2FF",
    },
    {
      title: "Convenience that fits your life.",
      text: "Busy schedule? No problem. Jujora’s easy to use online platform and fast delivery service saves you time and effort. Simply order from your phone or computer, and we’ll handle the rest, bringing fresh groceries to your doorstep when you need them",
      color: "#DAFFA7",
    },
    {
      title: "Customer-centric service.",
      text: "Your satisfaction is our mission. From prompt deliveries to responsive customer support, we go the extra mile to make your shopping experience seamless and enjoyable. At Jujora, you’re not just a customer you’re part of our community.",
      color: "pink",
    },
  ];

  return (
    <section>
      <div className=" w-screen text-center bg-[#D2D2D2] py-20">
        <div className="pb-10">
          <h1 className="text-secondary underline mx-auto text-3xl md:text-4xl font-regular ">
            Why Choose Us?
          </h1>
          <h1 className=" mx-auto text-2xl md:text-3xl font-regular">
            What makes us stand out amongst others
          </h1>
        </div>


        <div className="flex flex-col md:flex-row justify-center mt-10 items-center gap-3 md:gap-0 mx-auto w-[80%] md:w-min bg-black shadow-black shadow-2xl h-full">
          {topics.map((e, index) => (
            <div
              key={index}
              className="flex flex-col w-[100%] h-full md:w-96 p-3 md:p-6 gap-8 md:gap-10 rounded-tr-3xl rounded-bl-3xl shadow-lg"
              style={{ backgroundColor: e.color }} // Dynamically set the background color
            >
              <div className="text-2xl md:text-3xl font-montserrat text-black">
                <h1 className="text-shadow rounded-md text-start">
                  {e.title}
                </h1>
              </div>
              <div className="mb-10  text-sm text-gray-700 text-center w-full">
                <h1 className="w-full text-start">{e.text}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
