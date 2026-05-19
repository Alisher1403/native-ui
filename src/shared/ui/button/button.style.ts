import { StyleSheet } from "react-native-unistyles";
import { ButtonProps, ButtonSize, ButtonType } from "./button.types";

function getTypeColors(theme: any, type: ButtonType = "default", disabled?: boolean) {
  if (disabled) {
    return {
      backgroundColor: theme.colors["gray/100"],
      textColor: theme.colors["gray/300"],
      pressedBackgroundColor: theme.colors["gray/100"],
    };
  }

  switch (type) {
    case "primary":
      return {
        backgroundColor: theme.colors["main/primary"],
        textColor: theme.colors["system/white"],
        pressedBackgroundColor: theme.colors["emerald/600"],
      };
    case "danger":
      return {
        backgroundColor: theme.colors["main/error"],
        textColor: theme.colors["system/white"],
        pressedBackgroundColor: theme.colors["main/error"],
      };
    case "warning":
      return {
        backgroundColor: theme.colors["main/warning"],
        textColor: theme.colors["system/white"],
        pressedBackgroundColor: theme.colors["main/warning"],
      };
    default:
      return {
        backgroundColor: theme.colors["gray/100"],
        textColor: theme.colors["gray/700"],
        pressedBackgroundColor: theme.colors["gray/200"],
      };
  }
}

function getSizeStyles(size: ButtonSize = "medium") {
  switch (size) {
    case "small":
      return {
        minHeight: 40,
        padding: 8,
        paddingHorizontal: 10,
        gap: 2,
        fontSize: 12,
        iconSize: 20,
      };
    case "large":
      return {
        minHeight: 56,
        padding: 12,
        paddingHorizontal: 14,
        gap: 6,
        fontSize: 17,
        iconSize: 28,
      };
    default:
      return {
        minHeight: 48,
        padding: 10,
        paddingHorizontal: 12,
        gap: 4,
        fontSize: 15,
        iconSize: 24,
      };
  }
}

export const styles = StyleSheet.create(theme => ({
  container: (props: ButtonProps) => {
    const colors = getTypeColors(theme, props.type, props.disabled);
    const size = getSizeStyles(props.size);

    return {
      borderRadius: 30,
      overflow: "hidden",
      backgroundColor: colors.backgroundColor,
      minHeight: size.minHeight,
      flex: props.fullWidth ? 1 : undefined,
    };
  },
  content: (props: ButtonProps) => {
    const size = getSizeStyles(props.size);

    return {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 1,
      flexGrow: 1,
      padding: size.padding,
      paddingHorizontal: size.paddingHorizontal,
      gap: size.gap,
    };
  },
  buttonActive: (props: ButtonProps) => ({
    backgroundColor: getTypeColors(theme, props.type, props.disabled)
      .pressedBackgroundColor,
  }),
  buttonText: (props: ButtonProps) => {
    const colors = getTypeColors(theme, props.type, props.disabled);
    const size = getSizeStyles(props.size);

    return {
      fontFamily: theme.fontFamily.Inter_600,
      color: colors.textColor,
      fontSize: size.fontSize,
    };
  },
  icon: (props: ButtonProps) => {
    const colors = getTypeColors(theme, props.type, props.disabled);
    const size = getSizeStyles(props.size);

    return {
      color: colors.textColor,
      fontSize: size.iconSize,
    };
  },
}));
