import { getCookie, axios } from "../../../lib";

export const fetcher = async ([
	url,
	method,
	options,
]) => {
	const currentUser = getCookie("currentUser");
	
	try {
		const response = await axios({
			url,
			method,
			...options,
			headers: { Authorization: `Bearer ${currentUser?.token?.access_Token || ""}` },
		});
		return response.data;
	} catch (error) {
		return error;
	}
};
/**
 *
 * @param Array [url:string, method:string,options:object]
 * @param Object {body:body}
 * @returns
 */
export const customFetcher = async (
	[url, method, options],
	{ arg }
) => {
	const currentUser = getCookie("currentUser");
	console.log(currentUser?.token?.access_Token);

	try {
		const response = await axios({
			url,
			method,
			...(arg ? arg : options),
			headers: { Authorization: `Bearer ${currentUser?.token?.access_Token || ""}` },
		});
		return response.data;
	} catch (error) {
		return error;
	}
};
