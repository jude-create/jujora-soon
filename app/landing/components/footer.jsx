import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col bg-secondary-light px-0 md:px-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center p-4 ">
          <div className="flex flex-col">
            <div className="w-[34px] h-[23px] md:w-[69px] md:h-[48px]">
              <img src="images/landing_images/jujora_icon.webp" alt="" />
            </div>
            <h1 className="text-xl md:text-3xl mb-2">
              Bringing you the convenience you deserve.
            </h1>
          </div>

          <div className="flex justify-between md:justify-around gap-20">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl capitalize mb-1"> Support</h1>
              <h1 className="text-primary">Contact</h1>
              <h1 className="text-primary">FAQ</h1>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-4xl capitatlize mb-1"> Legal</h1>
              <h1 className="text-primary">Copyrights Information</h1>
              <h1 className="text-primary">Terms and Conditions</h1>
            </div>
          </div>
        </div>

        <div className=" h-1 w-2/3 mx-auto"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <SocialIcon
              bgColor="#000000"
              color="black"
              target="_blank"
              url="https://www.instagram.com/jujora_ng?utm_source=qr&igsh=MXV3dXByNGhoYmxhYw=="
              style={{ height: 42, width: 42 }}
            />
            <SocialIcon
              bgColor="#000000"
              target="_blank"
              url="https://x.com/jujora_ng?t=J6Jc2UzqyPMN_ozQ6I5hMA&s=09"
              style={{ height: 42, width: 42 }}
            />
            <SocialIcon
              bgColor="#000000"
              target="_blank"
              url="https://vm.tiktok.com/ZMMUu3NRD/"
              style={{ height: 42, width: 42 }}
            />
            <SocialIcon
              network="whatsapp"
              bgColor="#000000"
              target="_blank"
              url="https://wa.me/message/5MKJMKEREXD7P1"
              style={{ height: 42, width: 42 }}
            />
          </div>
        </div>
        <h1 className="text-black font-bold pr-5 mt-2">Jujora @2025</h1>
      </div>
      ={" "}
    </footer>
  );
}
