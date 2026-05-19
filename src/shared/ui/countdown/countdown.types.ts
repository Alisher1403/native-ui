import { ReactNode } from "react";

export type CountdownTime = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
  date: Date;
};

export type CountdownProps = {
  value: string;
  render: (time: CountdownTime) => ReactNode;
  onChange?: (time: CountdownTime) => void;
  onExpire?: () => void;
  intervalMs?: number;
};
