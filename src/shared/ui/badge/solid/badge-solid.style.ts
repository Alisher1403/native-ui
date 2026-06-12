import { StyleSheet } from "react-native-unistyles";
import { BadgeSolidProps } from "./badge-solid.types";

export const styles = StyleSheet.create(theme => ({
  container: (props: BadgeSolidProps) => ({
    padding: 3,
    paddingHorizontal: 6,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    alignSelf: props.alignSelf || "flex-start",
    minWidth: theme.size(20),
    backgroundColor: theme.colors[props.color || "main/info"],
  }),
}));
