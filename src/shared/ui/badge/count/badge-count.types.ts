import React from "react";
import { DivisionProps } from "../../division/division.types";

export type BadgeCountProps = DivisionProps & {
  count?: number | string;
  overflowCount?: number;
  children?: React.ReactNode;
};
