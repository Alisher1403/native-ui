import React from "react";
import { BaseInputProps } from "../input.types";

export type InputNumberProps = Omit<BaseInputProps, "value" | "onChange"> & {
  value?: string | number;
  onChange?: (value: number) => void;
  suffix?: React.ReactNode;
};
