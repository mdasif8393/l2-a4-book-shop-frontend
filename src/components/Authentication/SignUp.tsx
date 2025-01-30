import { useSignUpMutation } from "@/redux/features/auth/authApi";
import Button from "@/utils/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignUp = () => {
  type Inputs = {
    name: string;
    email: string;
    password: string;
    phone: string;
    role?: string;
    address: string;
  };

  const navigate = useNavigate();

  const [signUp, { data }] = useSignUpMutation();

  if (data?.success) {
    toast.success("User created successfully, Please Sign In");
    navigate("/signin");
  }

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.role = "user";
    await signUp(data).unwrap();
  };
  return (
    <div className="container">
      <div className="font-[sans-serif]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center lg:gap-10 gap-4">
          <div className="max-md:order-1 h-screen min-h-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4594/4594589.png"
              className="w-full h-full object-contain"
              alt="login-image"
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 max-w-lg w-full p-6 mx-auto"
          >
            <div className="mb-12">
              <h3 className="text-gray-800 text-4xl font-extrabold">Sign Up</h3>
              <p className="text-gray-800 text-sm mt-6">
                Already Registered?{" "}
                <Link
                  to="/signin"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div>
              <label className="text-gray-800 text-sm block mb-2">Name</label>
              <div className="relative flex items-center">
                <input
                  {...register("name")}
                  name="name"
                  type="text"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter Name"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-gray-800 text-sm block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  {...register("email")}
                  name="email"
                  type="email"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
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
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <Button type="submit" text="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
