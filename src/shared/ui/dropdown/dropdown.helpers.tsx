import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import Option from "./components/option/option";
import Separator from "./components/separator/separator";
import type { DropdownProps, DropdownOptionsEntry, DropdownOptionsSeparator } from "./dropdown.types";
import type { DropdownOptionProps, DropdownOptionsOption } from "./components/option/option.types";

type OptionElement = ReactElement<DropdownOptionProps>;
type SeparatorElement = ReactElement;

const isOptionElement = (child: ReactNode): child is OptionElement => isValidElement(child) && child.type === Option;

const isSeparatorElement = (child: ReactNode): child is SeparatorElement =>
  isValidElement(child) && child.type === Separator;

function parseOptionElement(child: OptionElement): DropdownOptionsOption {
  const { children, ...props } = child.props;
  const nestedOptions = createDropdownEntries(children);

  return {
    ...props,
    options: nestedOptions.length ? nestedOptions : undefined,
  };
}

function parseSeparatorElement(): DropdownOptionsSeparator {
  return { separator: true };
}

export function createDropdownEntries(children: DropdownProps["children"]): DropdownOptionsEntry[] {
  return Children.toArray(children).flatMap(child => {
    const entries: DropdownOptionsEntry[] = [];

    if (isOptionElement(child)) {
      entries.push(parseOptionElement(child));
    } else if (isSeparatorElement(child)) {
      entries.push(parseSeparatorElement());
    }

    return entries;
  });
}
