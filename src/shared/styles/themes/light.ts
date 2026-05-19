import { AppStyleSettings } from "./themes.config";

export const LightTheme = {
  ...AppStyleSettings,
  colors: {
    ["transparent"]: "transparent",

    "system/black": "#000000",
    "system/white": "#FFFFFF",
    "system/page": "#F0F2F4",

    "main/primary": "#20A96F",
    "main/secondary": "#111827",
    "main/label": "#111827",
    "main/label-secondary": "#9CA3AF",
    "main/label-neutral": "#6B7280",
    "main/error": "#FF005E",
    "main/success": "#20A96F",
    "main/warning": "#FF9500",
    "main/info": "#007AFF",

    "emerald/50": "#EEFBF4",
    "emerald/100": "#D5F6E2",
    "emerald/200": "#AEECC9",
    "emerald/300": "#79DCAC",
    "emerald/400": "#43C489",
    "emerald/500": "#20A96F",
    "emerald/600": "#138859",
    "emerald/700": "#0F6D49",
    "emerald/800": "#0E573B",
    "emerald/900": "#0D4733",
    "emerald/950": "#06281D",

    "gray/50": "#F9FAFB",
    "gray/100": "#F3F4F6",
    "gray/200": "#E5E7EB",
    "gray/300": "#D1D5DB",
    "gray/400": "#9CA3AF",
    "gray/500": "#6B7280",
    "gray/600": "#4B5563",
    "gray/700": "#374151",
    "gray/800": "#1F2937",
    "gray/900": "#111827",
    "gray/950": "#030712",

    "containers/primary-c": "#20A96F1A",
    "containers/secondary-c": "#1118271A",
    "containers/error-c": "#FF005E1A",
    "containers/success-c": "#34C7591A",
    "containers/warning-c": "#FF95001A",
    "containers/info-c": "#007AFF1A",

    "main-card-shadow": "0px 3px 8px 0px #1118270D",
  },
};
