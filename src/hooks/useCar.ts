import useSWR from "swr";

import { fetcher } from "../services/api";
import { CarData } from "../context/reducers/carParamsReducer";

export const useCar = (id: string) => {
  const { data: car, error } = useSWR<CarData>(`cars/${id}`, fetcher);

  return {
    car,
    error,
    isLoading: !car && !error,
  };
};
