import { useState } from "react";

export interface DailyRateType {
  from: number;
  to: number;
}
export enum EngineTypes {
  gas = "gas",
  electric = "electric",
  hybrid = "hybrid",
  all = "all",
}
export enum TransmissionTypes {
  auto = "auto",
  manual = "manual",
  all = "all",
}

export const useFilterBoilerplate = () => {
  const [dailyRate, setDailyRate] = useState<DailyRateType>({
    from: 0,
    to: 10000,
  });
  const [engineType, setEngineType] = useState<EngineTypes>(EngineTypes.all);
  const [transmission, setTransmission] = useState<TransmissionTypes>(
    TransmissionTypes.all
  );

  return {
    dailyRate,
    setDailyRate,
    engineType,
    setEngineType,
    transmission,
    setTransmission,
  };
};
