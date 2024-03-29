import Image from "next/image";
import ComingSoon from "./ComingSoon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#F7FFEC] ">
      <ComingSoon />
    </main>
  );
}
