import useSWR from "swr";

import { fetcher } from "../services/api";
import { CarData, CarParamsState } from "../context/reducers/carParamsReducer";

export const useCars = ({
  dailyRate,
  engineType,
  transmission,
}: CarParamsState) => {
  let queryString = `cars?dailyRate_gte=${dailyRate.from}&dailyRate_lte=${dailyRate.to}`;

  if (engineType !== "") {
    queryString += `&engineType=${engineType}`;
  }
  if (transmission !== "") {
    queryString += `&transmission=${transmission}`;
  }

  const { error, data: cars } = useSWR<CarData[]>(queryString, fetcher);

  return {
    error,
    cars,
    isLoading: !cars && !error,
  };
};
