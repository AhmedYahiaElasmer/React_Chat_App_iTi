import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, login } = useLogin();

  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-lg shadow-md flex flex-col text-black gap-12 justify-center items-center py-16 px-24"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Back to your world</h2>
          <p>Choose one of the options to go</p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="example@example.com"
            className="input input-bordered w-full mb-4"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <div className="flex justify-between lg:gap-24 md:gap-5">
            <div>
              <input
                type="checkbox"
                className="checkbox mr-1 checkbox-xs"
                id="rememberme"
              />
              <label htmlFor="rememberme" className="text-zinc-600 text-sm">
                Remember Me
              </label>
            </div>
            <p className="text-zinc-600 text-sm">Forgot password?</p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          {/* Social login buttons */}
        </div>
        <div>
          <button
            className="btn btn-wide bg-black text-white btnhover"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Log in"
            )}
          </button>
          <p>
            Don’t have an account?{" "}
            <span>
              <Link className="font-grad font-medium" to={"/register"}>
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
