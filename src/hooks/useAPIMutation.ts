import { AxiosResponse } from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { requestInstance } from "../shared/api";

type Args<Response, Error, Variables> = {
  url: string;
  method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  options?: UseMutationOptions<AxiosResponse<Response>, Error, Variables>;
};

const useAPIMutation = <Variables = any, Response = any, Error = any>({
  method = "POST",
  options = {},
  url,
}: Args<Response, Error, Variables>) =>
  useMutation((variables) => {
    const response = requestInstance({
      method: method,
      url,
      data: variables,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });
    return response;
  }, options);

export default useAPIMutation;
