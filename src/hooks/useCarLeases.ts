import useSWR from "swr";

import { fetcher } from "../services/api";

export interface CarLease {
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
}

export const useCarLeases = (userId: string) => {
  const { data: carLeases, error, mutate } = useSWR<CarLease[]>(
    `carLeases?userId=${userId}&_sort=startDate&_order=desc`,
    fetcher
  );

  return {
    carLeases,
    error,
    isLoading: !carLeases && !error,
    mutate,
  };
};
