import { AppStyleSettings } from "./themes.config";

export const DarkTheme = {
  ...AppStyleSettings,
  colors: {
    ["transparent"]: "transparent",

    "system/black": "#000000",
    "system/white": "#FFFFFF",
    "system/page": "#0B0F14",

    "main/primary": "#34D399",
    "main/secondary": "#E5E7EB",
    "main/label": "#F9FAFB",
    "main/label-secondary": "#9CA3AF",
    "main/label-neutral": "#6B7280",
    "main/error": "#FF4D7A",
    "main/success": "#34D399",
    "main/warning": "#FFB020",
    "main/info": "#4DA3FF",

    "emerald/50": "#06281D",
    "emerald/100": "#0D4733",
    "emerald/200": "#0E573B",
    "emerald/300": "#0F6D49",
    "emerald/400": "#138859",
    "emerald/500": "#20A96F",
    "emerald/600": "#43C489",
    "emerald/700": "#79DCAC",
    "emerald/800": "#AEECC9",
    "emerald/900": "#D5F6E2",
    "emerald/950": "#EEFBF4",

    "gray/50": "#030712",
    "gray/100": "#111827",
    "gray/200": "#1F2937",
    "gray/300": "#374151",
    "gray/400": "#4B5563",
    "gray/500": "#6B7280",
    "gray/600": "#9CA3AF",
    "gray/700": "#D1D5DB",
    "gray/800": "#E5E7EB",
    "gray/900": "#F3F4F6",
    "gray/950": "#F9FAFB",

    "containers/primary-c": "#34D3991A",
    "containers/secondary-c": "#E5E7EB1A",
    "containers/error-c": "#FF4D7A1A",
    "containers/success-c": "#34D3991A",
    "containers/warning-c": "#FFB0201A",
    "containers/info-c": "#4DA3FF1A",

    "main-card-shadow": "0px 3px 8px 0px #00000080",
  },
};
