import Video from "next-video";
import video1 from "../../../videos/video1.mp4.json";
import video2 from "../../../videos/video2.mp4.json";

export default function VideoSection() {
  return (
    <section>

      <div className="my-4 mx-8 flex flex-col md:flex-row gap-6 p-6 items-center justify-center aspect-video md:aspect-[1512/790]">
        <div className=" flex justify-center items-center my-auto ">
          <Video
            src={video1}
            controls
            autoPlay
            loop
            muted
            className=" object-cover"
          
          />
        </div>
        <div className=" flex justify-center items-center my-auto">
          <Video
          src={video2}
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
