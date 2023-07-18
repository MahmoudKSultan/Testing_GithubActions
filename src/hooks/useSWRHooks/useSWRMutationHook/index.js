import { useSWRMutation } from "../../../lib";
import { fetcher, customFetcher } from "../utils";

export const useSWRMutationHook = (
  url,
  method = "get",
  options = {},
  config = {}
) => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    [url, method, options],
    customFetcher,
    // fetcher,
    config
  );
  /**
   *  pass the data  (body) to trigger function
   * @param body
   * @returns
   */
  function customTrigger(body) {
    const data =  { data: body  }
    return trigger(data);
  }
  
  return {
    trigger,
    customTrigger,
    data,
    error,
    isMutating,
  };
};

export default useSWRMutationHook;
