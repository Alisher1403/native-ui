import React from "react";
import { BaseInputProps } from "../input.types";

export type InputFloatValue = string | number;

export type InputFloatProps = Omit<BaseInputProps, "value" | "onChange"> & {
  value?: InputFloatValue;
  onChange?: (value: InputFloatValue) => void;
  suffix?: React.ReactNode;
};
