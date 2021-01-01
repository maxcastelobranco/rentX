import { useEffect, useState } from "react";

import api from "../../../../../../../services/api";
import { CarData } from "../components/Car";
import {
  DailyRateType,
  EngineTypes,
  TransmissionTypes,
} from "../../../hooks/useFilterBoilerplate";

interface UseCarDataParams {
  dailyRate: DailyRateType;
  engineType: EngineTypes;
  transmission: TransmissionTypes;
}

export const useCarData = ({}: // dailyRate,
// engineType,
// transmission,
UseCarDataParams) => {
  const [cars, setCars] = useState<CarData[]>([]);
  const [totalCars, setTotalCars] = useState(0);
  const [page, setPage] = useState(1);

  const loadCars = async (pageNumber: number) => {
    if (totalCars && pageNumber > Math.ceil(totalCars / 10)) {
      return;
    } else {
      const { data, headers } = await api.get<CarData[]>("cars", {
        params: {
          _page: pageNumber,
          available: true,
        },
      });

      setPage((prevState) => prevState + 1);
      setCars((prevState) => [...prevState, ...data]);
      setTotalCars(headers["x-total-count"]);
    }
  };

  // const reloadCars = async () => {
  //   const { data, headers } = await api.get<CarData[]>("cars", {
  //     params: {
  //       _dailyRate_gte: dailyRate.from,
  //       _dailyRate_lte: dailyRate.to,
  //       transmission: transmission,
  //       engineType: engineType,
  //       available: true,
  //     },
  //   });
  //
  //   setPage(1);
  //   setCars(data);
  //   setTotalCars(headers["x-total-count"]);
  // };

  useEffect(() => {
    api
      .get<CarData[]>("cars", {
        params: {
          _page: 1,
          available: true,
        },
      })
      .then(({ data, headers }) => {
        setPage((prevState) => prevState + 1);
        setCars(data);
        setTotalCars(headers["x-total-count"]);
      });
  }, []);

  return {
    cars,
    totalCars,
    loadCars,
    reloadCars,
    page,
  };
};
