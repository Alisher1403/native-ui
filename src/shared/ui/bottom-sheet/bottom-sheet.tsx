import React, { memo, useRef } from "react";
import { View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BackdropComponent from "./backdrop";
import { BottomSheetProps } from "./bottom-sheet.types";
import { styles } from "./bottom-sheet.style";

export function BottomSheet(props: BottomSheetProps) {
  const refer = useRef(null);

  return (
    <BottomSheetModal
      backdropComponent={BackdropComponent}
      ref={props.ref}
      backgroundStyle={styles.background}
      handleComponent={() => (
        <View ref={refer} style={styles.header}>
          <View style={styles.handleWrapper}>
            <View style={styles.handle} />
          </View>
          <View>{props.headerComponent}</View>
        </View>
      )}
      {...props}
    >
      {props.children}
    </BottomSheetModal>
  );
}

export default memo(BottomSheet);
