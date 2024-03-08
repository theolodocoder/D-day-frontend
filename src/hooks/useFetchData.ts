import { useQuery } from "@tanstack/react-query";
import { Events } from "../utils/types";

export const useFetchData = () => {
  return useQuery<Events, Error>({
    queryKey: ["event"],
    queryFn: async () => {
      const response = await fetch("data.json");
      return await response.json();
    },
  });
};
