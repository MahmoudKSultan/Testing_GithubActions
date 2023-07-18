
import { VALIDATION_RULES } from '../../../../data/validation';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import { useSWRMutationHook } from "../../../../hooks/useSWRHooks/useSWRMutationHook";
import { API_ENDPOINTS } from "../../../../data/constants";
import {useNavigate} from "react-router-dom"
export function Signup() {

  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { customTrigger, data, error, isMutating } = useSWRMutationHook(
		API_ENDPOINTS.authintication.SIGN_up,
		"POST"
	);
  const onSubmit = (data) => {
    customTrigger(data).then((res) => {
      console.log(res);
      if (res?.statusCode !== 200) return;
      navigate("/sign-in")
		});
  }
  return (
    <form className="pb-10" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
        Email
      </label>
      <input 
      className={`shadow appearance-none border ${errors?.email?.message ? "border-red-500" : ""} rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline`}
      id="email"
      type="email"
      {...register("email", VALIDATION_RULES.email)}  />
     {errors?.email && <p className="text-red-500 text-xs italic">{errors?.email?.message}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
        Password
      </label>
      <input className={`shadow appearance-none border ${errors?.password ? "border-red-500" : ""} rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password" {...register("password", VALIDATION_RULES.password)}  />
     {errors?.password && <p className="text-red-500 text-xs italic">{errors?.password?.message}</p>}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input className={`shadow appearance-none border ${errors?.confirmPassword ? "border-red-500" : ""} rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password" {...register("confirmPassword", {...VALIDATION_RULES.password, validate: (val: string) => {
    if (watch('password') != val) {
      return "Your passwords do no match";
    }
  }, })}  />
     {errors?.confirmPassword && <p className="text-red-500 text-xs italic">{errors?.confirmPassword?.message}</p>}
    </div>
    <div className="flex flex-col items-end justify-between gap-1">
      <button className={`flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full duration-300 ${isMutating ? "opacity-50" : ""}`} type="submit" disabled = {isMutating}>
        Sign Up
      </button>
      <span className="text-sm" >
        Already have an account? <Link to = "/sign-in" className="font-bold  text-blue-500 hover:text-blue-800">Sign in</Link>
      </span>
    </div>
  </form>
  )
}

export default Signup