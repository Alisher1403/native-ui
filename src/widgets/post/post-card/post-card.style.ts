import { ImageColors } from "@src/shared/utils";
import { StyleSheet } from "react-native-unistyles";

export type PostCardStyleProps = {
  imageColors?: ImageColors;
};

export const styles = StyleSheet.create(theme => ({
  card: (props: PostCardStyleProps) => ({
    minHeight: theme.size(300),
    padding: theme.size(7),
    borderRadius: theme.size(22),
    backgroundColor: theme.colors["gray/50"],
    borderWidth: 1,
    borderColor: props.imageColors?.dominant ? theme.alpha(props.imageColors.dominant, 0.2) : theme.colors["gray/200"],
    boxShadow: theme.colors["main-card-shadow"],
    flex: 1,
  }),
  imageContainer: (props: PostCardStyleProps) => ({
    width: "100%",
    height: theme.size(178),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    borderRadius: theme.size(17),
    backgroundColor: props.imageColors?.dominant
      ? theme.alpha(props.imageColors.dominant, 0.16)
      : theme.colors["gray/100"],
  }),
  image: {
    width: "88%",
    height: "88%",
  },
  ratingBadge: {
    position: "absolute",
    top: theme.size(9),
    right: theme.size(9),
    flexDirection: "row",
    alignItems: "center",
    gap: theme.size(4),
    paddingVertical: theme.size(5),
    paddingHorizontal: theme.size(7),
    borderRadius: theme.size(20),
    backgroundColor: theme.alpha(theme.colors["system/black"], 0.68),
  },
  details: {
    flex: 1,
    paddingTop: theme.size(10),
    paddingHorizontal: theme.size(5),
    paddingBottom: theme.size(4),
  },
  categoryBadge: {
    alignSelf: "flex-start",
    maxWidth: "100%",
    paddingVertical: theme.size(4),
    paddingHorizontal: theme.size(8),
    borderRadius: theme.size(20),
    backgroundColor: theme.colors["containers/primary-c"],
  },
  category: {
    textTransform: "capitalize",
  },
  title: {
    minHeight: theme.size(40),
    marginTop: theme.size(8),
    lineHeight: theme.size(20),
  },
  meta: {
    marginTop: "auto",
    paddingTop: theme.size(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  openButton: {
    width: theme.size(30),
    height: theme.size(30),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.size(15),
    backgroundColor: theme.colors["containers/primary-c"],
  },
}));
