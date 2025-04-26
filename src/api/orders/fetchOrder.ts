import { useQuery } from "@tanstack/react-query";
import axiosClient from "../axiosClient";

export const useFetchOrderTable = (url: string) => {
  return useQuery({
    queryKey: ["orderTable", url],
    queryFn: async () => {
      const order = await axiosClient.get(url);
      return order.data;
    },
  });
};
