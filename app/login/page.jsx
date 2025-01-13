import InputField from "../components/jujora_textfield";
import { SocialIcon } from "react-social-icons";

export default function Login() {
  return (
    <main className="flex items-center justify-center h-screen ">
      <div className="flex justify-center items-center w-1/2 bg-white p-8 shadow-lg rounded-lg">
        <div className="bg-primary flex-1 hidden lg:block">
          <img
            src="/images/login_image.png"
            alt=""
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center flex-1 gap-4">
          <h1 className="text-primary text-xl font-bold mb-2">Welcome back</h1>
          <h1 className="text-primary text-4xl font-bold mb-4">Login</h1>
          <InputField
            type="text"
            placeholder="Enter your email"
            error={false}
            className="custom-class mb-4"
            label="email"
          />
          <InputField
            type="password"
            placeholder="Password"
            className="mb-6"
            label="password"
          />
          <div className=" w-[80%] mb-6">
            <h1 className="text-red-500"> forgot password?</h1>
          </div>
          <div className="bg-secondary rounded-lg  w-1/2 py-5 ">
            <button className="w-full">
              <h1 className="text-white font-semibold">Login</h1>
            </button>
          </div>

          <div className="flex w-full px-10 items-center">
            <div className="w-1/2 h-[1px] bg-secondary"></div>
            <h1 className="text-primary font-bold">OR</h1>
            <div className="w-1/2 h-[1px] bg-secondary"></div>
          </div>

          <div className="border border-secondary px-6 py-3">
            <div className="flex gap-2">
              <SocialIcon
                bgColor="red"
                target="_blank"
                url="https://www.google"
                style={{ height: 42, width: 42 }}
              />
              <SocialIcon
                bgColor="blue"
                target="_blank"
                url="https://www.facebook"
                style={{ height: 42, width: 42 }}
              />
            </div>
          </div>

          <div>
            <h1
              className="text-primary"
            //   onClick={() => console.log("sign up clicked")}
            >
              Don't have an account? Sign up
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
