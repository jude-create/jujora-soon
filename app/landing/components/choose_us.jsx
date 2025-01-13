export default function ChooseUs() {
  let number = [ "#B7F2FF" , "#DAFFA7", "pink",];
  return (
    <section>
      <div className="text-center bg-[#D2D2D2] pb-4">
        <h1 className="text-secondary underline mx-auto text-3xl md:text-6xl font-mountains pt-6 my-2">
          Why Choose Us?
        </h1>
        <h1 className=" mx-auto text-2xl md:text-3xl">
          What makes us stand out amongst others
        </h1>

        <div className="  w-screen flex flex-col md:flex-row justify-around mt-10 items-center gap-8 md:gap-0 ">
          {number.map((e) => (
            <div key={e} className="relative w-96 h-auto p-6 bg-lime-200 rounded-tr-3xl rounded-bl-3xl shadow-lg"
            style={{ backgroundColor: e }} // Dynamically set the background color
            >
              <div className="absolute top-4 left-4 text-6xl font-bold text-black">
                <span className="text-shadow px-2 rounded-md"> 0{ number.indexOf(e) + 1}</span>
              </div>
              <div className="mt-16 text-sm text-gray-700">
                ef;hbnfbfeebdkdhbfvjhbvbhvcbvbkvcbvb
                kljvhdfhvnvjvdjdfhjvbvbhvnvvb;bvfbfvnvxcn bvbvcjnvbvh
                vjkfhvbjfhkfhvhkjb'v;fvjkkb
                fnvjhskdlvhb';vvbvfriroyoajbbjbvbsbbjfvjvf
                jfb;vbvljfj'svb'vbvfjvbfjbvbfbofsufrtgcbcvj bvwnhdsfbbjkBV
                VBJFJKJBb dkjbfdkjdkk vfjf fv nv vv fv flv mfv fhdfjfkbnbnb
                vfhkjfjf jfjbkf fnf fnfvkfkdfdlfbfbjkjbkjfjhfhdhfhd
                jfbfbnjbfjbfbb fbjbfbfbfhgfbkjfgjjfnbjkjfj jkfv v fnbf
                bjfnfdfndbf hb jf fkfjfhfjlbjskj ksfv
                fnkhuijfjvjfvlkjfvbjjlksfflbvfkfjbjkj
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
