import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { useState } from "react";

import { useAppContext } from "../../../../../../context";

export const useCalendarBoilerplate = (
  initialStartDate?: Date,
  initialEndDate?: Date
) => {
  const {
    state: { timeInterval },
  } = useAppContext();
  const startDatePickerOpen = useSharedValue(false);
  const endDatePickerOpen = useSharedValue(false);
  const anyPickerOpen = useDerivedValue(
    () => startDatePickerOpen.value || endDatePickerOpen.value
  );

  const [startDate, setStartDate] = useState(
    initialStartDate ? initialStartDate : timeInterval.startDate
  );
  const [endDate, setEndDate] = useState(
    initialEndDate ? initialEndDate : timeInterval.endDate
  );

  return {
    startDatePickerOpen,
    endDatePickerOpen,
    anyPickerOpen,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };
};
