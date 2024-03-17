import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="p-4 bg-black bgc">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  flex flex-col text-white gap-12 justify-center items-center py-16 px-24"
      >
        <div className="flex flex-col gap-4 ">
          <h1 className="text-2xl font-extrabold">Create new account</h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex">
            <div className="flex flex-col ">
              <label htmlFor="fristName" className="w-auto">
                Frist Name
              </label>

              <input
                {...register("fristName", { required: true })}
                id="fristName"
                type="text"
                placeholder="fristName"
                className="input input-bordered  text-black w-auto "
              />
              {errors.fristName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="flex flex-col ">
              <label htmlFor="lastName" className="w-auto ">
                Last Name
              </label>
              <input
                {...register("lastName", { required: true })}
                id="lastName"
                type="text"
                placeholder="lastName"
                className="input bg-transparent input-bordered text-black  w-auto  "
              />
              {errors.lastName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          <label htmlFor="email" className="w-auto">
            E-mail
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            placeholder="example@example.com"
            className="input input-bordered text-black  w-auto "
          />
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}

          <label htmlFor="password" className="w-auto">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            placeholder="enter your password"
            className="input input-bordered text-black  w-auto "
          />
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}
          <label htmlFor="Re-password" className="w-auto">
            Re-Password
          </label>
          <input
            {...register("Repassword", { required: true })}
            id="Re-password"
            type="password"
            placeholder="enter your Re-password"
            className="input input-bordered text-black  w-auto "
          />
          {errors.Repassword && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="btn  btn-wide text-white bg-transparent border-white	 btnhover"
          >
            Sign Up
          </button>
          <p></p>
        </div>
        <div className="flex justify-between lg:gap-20 md:gap-5 ">
          <p>
            Already a member?
            <Link
              to=""
              className="link link-success link-hover  link-linkColor"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
