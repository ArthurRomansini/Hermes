import React, { createContext, useState } from "react";
import Schedule from "../Types/Schedule";

type Props = {
  children: React.ReactNode;
};

export const SchedulesContext = createContext(
  {} as {
    schedules: Schedule[] | undefined;
    setSchedules: React.Dispatch<React.SetStateAction<Schedule[] | undefined>>;
  }
);

const SchedulesProvider = ({ children }: Props) => {
  const [schedules, setSchedules] = useState<Schedule[]>();

  return (
    <SchedulesContext.Provider value={{ schedules, setSchedules }}>
      {children}
    </SchedulesContext.Provider>
  );
};

export default SchedulesProvider;