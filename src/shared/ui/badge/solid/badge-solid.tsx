import React from "react";
import { Division, Icon, Typography } from "../../index";
import { BadgeSolidProps } from "./badge-solid.types";
import { styles } from "./badge-solid.style";
import { useUnistylesProps } from "../../ui.utils/unistyles";

function BadgeSolid(props: BadgeSolidProps) {
  const unistylesProps = useUnistylesProps(props);

  if (!props.children && !props.icon) return null;

  return (
    <Division {...props} style={[styles.container(unistylesProps), props.style]}>
      {props.icon ? <Icon name={props.icon} color="system/white" size={12} /> : undefined}
      <Typography name="caption2/semibold" color="system/white" numberOfLines={props.numberOfLines}>
        {props.children}
      </Typography>
    </Division>
  );
}

export default React.memo(BadgeSolid);
