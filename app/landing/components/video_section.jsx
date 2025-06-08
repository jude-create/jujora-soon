import Video from "next-video";
import video1 from "../../../videos/video1.mp4";

export default function VideoSection() {
  return (
    <section className="mt-10 md:mt-0">
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
            src={video1}
            controls
            autoPlay
            loop
            muted
            className=" object-cover"
          />
        </div>
        <div className=" flex justify-center items-center my-auto">
          {/* <MuxPlayer
            playbackId={playbackId}
            streamType="on-demand"
            controls
            autoPlay
            style={{ width: "100%", height: "auto" }}
          /> */}
        </div>
      </div>
    </section>
  );
}
