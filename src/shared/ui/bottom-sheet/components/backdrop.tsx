import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

export default function BackdropComponent(props: any) {
  return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />;
}
