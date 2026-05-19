import React from "react";

type SlotConfig = Record<string, React.ElementType>;
type SlotResult<T extends SlotConfig> = {
  [K in keyof T]: React.ReactNode | null;
} & {
  rest: React.ReactNode[];
};

export function getCompoundSlots<T extends SlotConfig>(children: React.ReactNode, slots: T): SlotResult<T> {
  const initialResult = { rest: [] as React.ReactNode[] } as SlotResult<T>;
  const mutableResult = initialResult as Record<string, React.ReactNode | null | React.ReactNode[]>;

  Object.keys(slots).forEach(key => {
    mutableResult[key] = null;
  });

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) {
      if (child !== undefined && child !== null && child !== false) {
        initialResult.rest.push(child);
      }
      return;
    }

    const slotKey = Object.keys(slots).find(key => child.type === slots[key]);
    if (slotKey) {
      mutableResult[slotKey] = child;
      return;
    }

    initialResult.rest.push(child);
  });

  return initialResult;
}
