import useSWR from "swr";

import { fetcher } from "../services/api";
import { CarData } from "../context/reducers/carParamsReducer";

export const useListingPageCars = (q: string) => {
  const { error, data: cars } = useSWR<CarData[]>(`cars?q=${q}`, fetcher);

  return {
    error,
    cars,
    isLoading: !cars && !error,
  };
};
