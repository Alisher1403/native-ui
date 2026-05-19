import { memo } from "react";
import { CountdownProps } from "./countdown.types";
import { useCountdown } from "./countdown.model";

function Countdown(props: CountdownProps) {
  const time = useCountdown(props);
  return <>{props.render(time)}</>;
}

export default memo(Countdown);
