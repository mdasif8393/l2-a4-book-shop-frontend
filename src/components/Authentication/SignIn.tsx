import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import Button from "@/utils/Button";
import { verifyToken } from "@/utils/verifyToken";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { data, isError }] = useLoginMutation();

  if (data?.success) {
    toast.success("User Logged in successfully");
    navigate("/");
  }

  // console.log("data =>", data);
  // console.log("error =>", isError);

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const res = await login(data).unwrap();
    const user = verifyToken(res?.data?.token);
    dispatch(setUser({ user: user, token: res?.data?.token }));
  };

  return (
    <div className="container w-[90%] mx-auto">
      <div className="font-[sans-serif]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center lg:gap-10 gap-4">
          <div className="max-md:order-1 h-screen min-h-full">
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/833/681/non_2x/3d-lock-password-free-png.png"
              className="w-full h-full object-contain"
              alt="login-image"
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 max-w-lg w-full p-6 mx-auto"
          >
            <div className="mb-12">
              <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
              <p className="text-gray-800 text-sm mt-6">
                Don't have an account{" "}
                <Link
                  to="/signUp"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>

            <div>
              <label className="text-gray-800 text-sm block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  {...register("email")}
                  name="email"
                  type="email"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            <div className="mt-8">
              <label className="text-gray-800 text-sm block mb-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("password")}
                  name="password"
                  type="password"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <Button type="submit" text="Sign In" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
