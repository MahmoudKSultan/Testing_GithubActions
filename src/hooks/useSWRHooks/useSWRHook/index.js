import useSWR from "swr";
import { fetcher } from "../utils";

export const useSWRHook = (url, options = {}, config = {}) => {
    const { data, error, isLoading, mutate } = useSWR(
        [url, "get", options],
        fetcher,
        config
    );
    return { data, error, isLoading, mutate };
};

export default useSWRHook; 
