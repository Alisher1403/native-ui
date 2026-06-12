import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create((theme, rt) => ({
  flatList: {
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: rt.insets.bottom + 8,
  },
  searchShell: {
    marginHorizontal: 12,
    marginTop: 4,
    marginBottom: 4,
    overflow: "hidden",
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors["main/label-secondary"],
  },
  searchContainer: {
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: theme.colors["system/white"],
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchInput: {
    flex: 1,
    color: theme.colors["main/label"],
    paddingVertical: theme.size(14),
  },
  searchPlaceholder: {
    color: theme.colors["main/label-secondary"],
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  separator: {
    alignSelf: "center",
    width: "94%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors["main/label-secondary"],
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    padding: 16,
  },
  emptyImage: {
    width: theme.size(92),
    aspectRatio: 1,
  },
}));
