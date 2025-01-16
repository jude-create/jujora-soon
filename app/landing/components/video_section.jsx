// import video1 from '../videos/video1.mp4';

export default function VideoSection() {
  return (
    <section>
      <div className="my-[10px] mx-[30px] flex flex-col md:flex-row justify-center items-center h-[690px] gap-6">
        <div className="bg-blue-50 h-[504px] w-full items-center">
        {/* <video src={video1} controls autoPlay loop muted className="w-full h-auto" /> */}
        </div>
        <div className="bg-cyan-50 h-[504px] w-full ">video 2</div>
        <div className="bg-red-50 h-[504px] w-full"> video 3</div>
      </div>
    </section>
  );
}
