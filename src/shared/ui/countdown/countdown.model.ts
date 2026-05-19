import { useState, useEffect, useRef, useCallback } from "react";
import { intervalToDuration, isBefore, parseISO } from "date-fns";
import { CountdownTime, CountdownProps } from "./countdown.types";

const ZERO_TIME: CountdownTime = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
  months: 0,
  years: 0,
  date: new Date(),
};

function calcTimeLeft(targetDate: Date): CountdownTime {
  const now = new Date();
  if (isBefore(targetDate, now)) return { ...ZERO_TIME, date: now };

  const duration = intervalToDuration({ start: now, end: targetDate });

  return {
    seconds: duration.seconds ?? 0,
    minutes: duration.minutes ?? 0,
    hours: duration.hours ?? 0,
    days: duration.days ?? 0,
    months: duration.months ?? 0,
    years: duration.years ?? 0,
    date: now,
  };
}

function isExpired(time: CountdownTime): boolean {
  return (
    time.seconds === 0 &&
    time.minutes === 0 &&
    time.hours === 0 &&
    time.days === 0 &&
    time.months === 0 &&
    time.years === 0
  );
}

export function useCountdown({ value, intervalMs = 1000, onChange, onExpire }: CountdownProps) {
  const targetDate = useRef(parseISO(value));
  const hasExpired = useRef(false);
  const [time, setTime] = useState<CountdownTime>(() => calcTimeLeft(targetDate.current));

  const tick = useCallback(() => {
    const next = calcTimeLeft(targetDate.current);
    setTime(next);
    onChange?.(next);

    if (!hasExpired.current && isExpired(next)) {
      hasExpired.current = true;
      onExpire?.();
    }
  }, [onChange, onExpire]);

  useEffect(() => {
    targetDate.current = parseISO(value);
    hasExpired.current = false;
    tick();
  }, [value]);

  useEffect(() => {
    if (hasExpired.current) return;
    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [tick, intervalMs]);

  return time;
}
