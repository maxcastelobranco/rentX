import { useState } from "react";

export interface DailyRateType {
  from: number;
  to: number;
}
export enum EngineTypes {
  gas = "gas",
  electric = "electric",
  hybrid = "hybrid",
}
export enum TransmissionTypes {
  auto = "auto",
  manual = "manual",
}

export const useFilterBoilerplate = () => {
  const [dailyRate, setDailyRate] = useState<DailyRateType>({
    from: 0,
    to: 10000,
  });
  const [engineType, setEngineType] = useState<EngineTypes>(EngineTypes.gas);
  const [transmission, setTransmission] = useState<TransmissionTypes>(
    TransmissionTypes.auto
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
