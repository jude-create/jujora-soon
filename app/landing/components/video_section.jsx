import Video from "next-video";
import jujora1 from "../../../videos/jujora1.mp4";
import jujora2 from "../../../videos/jujora2.mp4";

export default function VideoSection() {
  return (
    <section className="mt-10 md:mt-0">
      <div className="my-4 mx-8 flex flex-col md:flex-row gap-6 p-6 items-center justify-center aspect-video md:aspect-[1512/790]">
        <div className=" flex justify-center items-center my-auto ">
          <Video
            src={jujora1}
            controls
            autoPlay
            loop
            muted
            className=" object-cover"
          />
        </div>
        <div className=" flex justify-center items-center my-auto">
          <Video
            src={jujora2}
            controls
            autoPlay
            loop
            muted
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
}
