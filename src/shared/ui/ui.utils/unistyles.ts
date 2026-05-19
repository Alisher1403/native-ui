import { useMemo } from "react";

type AnyProps = Record<string, any>;

export function useUnistylesProps<T extends AnyProps>(props: T): T {
  return useMemo(() => {
    const clean: any = {};
    for (const key in props) {
      const value = props[key];
      if (isCPPSupportedValue(value)) clean[key] = value;
    }
    return clean as T;
  }, [props]);
}

export function isCPPSupportedValue(value: any): boolean {
  return value === null || ["string", "number", "boolean"].includes(typeof value);
}
