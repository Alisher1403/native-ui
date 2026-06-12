import { Text, View } from "react-native";
import { BadgeCountProps } from "./badge-count.types";
import { styles } from "./badge-count.styles";
import { Division } from "../../index";

export default function BadgeCount(props: BadgeCountProps) {
  return (
    <View style={styles.badgeContainer}>
      {props.count ? (
        <Division style={styles.badge} bg="main/error" {...props}>
          {Number(props.count) > Number(props.overflowCount) ? (
            <Text style={styles.badgeText}>{props.overflowCount}</Text>
          ) : (
            <Text style={styles.badgeText}>{props.count}</Text>
          )}
        </Division>
      ) : undefined}
      {props.children}
    </View>
  );
}
