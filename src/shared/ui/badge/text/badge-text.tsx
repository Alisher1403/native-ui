import React from "react";
import { Division, Icon, Typography } from "../../index";
import { BadgeTextProps } from "./badge-text.types";
import { styles } from "./badge-text.style";

function BadgeText(props: BadgeTextProps) {
  const badgeColor = props.color || "main/info";
  styles.useVariants({
    size: props.size || "large",
  });

  if (!props.children && !props.icon) return null;

  return (
    <Division bg={badgeColor} bgAlpha={0.1} {...props} style={[styles.container, props.style]}>
      {props.icon ? <Icon name={props.icon} color={badgeColor} size={16} /> : undefined}
      <Typography name="footnote/medium" color={badgeColor} numberOfLines={props.numberOfLines}>
        {props.children}
      </Typography>
    </Division>
  );
}

export default React.memo(BadgeText);
