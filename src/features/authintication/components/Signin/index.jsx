import { VALIDATION_RULES } from "../../../../data/validation";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSWRMutationHook } from "../../../../hooks/useSWRHooks/useSWRMutationHook";
import { API_ENDPOINTS } from "../../../../data/constants";
import { setCookie } from "../../../../lib/js-cookie";
import { getTokenExpDate } from "../../../../utils";

export function Signin() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { customTrigger, data, error, isMutating } = useSWRMutationHook(
		API_ENDPOINTS.authintication.SIGN_IN,
		"POST"
	);
	const onSubmit = (data: any) => {
		customTrigger(data).then((res) => {
			console.log(res);
			if (res?.statusCode !== 200) return;
			res.data.token.exp = getTokenExpDate(res.data.token);
			setCookie("currentUser", res.data, {
				expires: 30,
			});
			navigate("/");
		});
	};

	return (
		<form className="pb-10" onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm mb-2" htmlFor="email">
					Email
				</label>
				<input
					className={`shadow appearance-none border ${
						errors?.email?.message ? "border-red-500" : ""
					} rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline`}
					id="email"
					type="email"
					{...register("email", VALIDATION_RULES.email)}
				/>
				{errors?.email && (
					<p className="text-red-500 text-xs italic">
						{errors?.email?.message}
					</p>
				)}
			</div>
			<div className="mb-6">
				<label className="block text-gray-700 text-sm mb-2" htmlFor="password">
					Password
				</label>
				<input
					className={`shadow appearance-none border ${
						errors?.password ? "border-red-500" : ""
					} rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline`}
					id="password"
					type="password"
					{...register("password", { required: "This field is required!" })}
				/>
				{errors?.password && (
					<p className="text-red-500 text-xs italic">
						{errors?.password?.message}
					</p>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<span className="text-sm text-red-600 text-center">
					{!isMutating &&
						data?.response?.data?.Error &&
						data?.response?.data?.Error}
				</span>
				<button
					className={`flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full duration-300 ${
						isMutating ? "opacity-50" : ""
					}`}
					type="submit"
					disabled={isMutating}
				>
					Sign In
				</button>
				<span className="text-sm">
					<span>Dont have an account?</span>
					<Link
						to="/sign-up"
						className="font-bold  text-blue-500 hover:text-blue-800 ml-2"
					>
						Sign up
					</Link>
				</span>
			</div>
		</form>
	);
}

export default Signin;
