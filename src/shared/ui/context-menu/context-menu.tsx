import React, { useCallback, useMemo, useRef } from "react";
import { Platform, View, type HostComponent, requireNativeComponent, type ViewProps } from "react-native";
import type {
  ContextMenuComponent,
  ContextMenuContentProps,
  ContextMenuGroupProps,
  ContextMenuIconProps,
  ContextMenuItemProps,
  ContextMenuLabelProps,
  ContextMenuRootProps,
  ContextMenuSubContentProps,
  ContextMenuSubProps,
  ContextMenuSubTriggerProps,
  ContextMenuTextProps,
  ContextMenuTriggerProps,
  NativeContextMenuNode,
  ParsedContextMenu,
} from "./context-menu.types";

type NativeContextMenuViewProps = ViewProps & {
  disabled?: boolean;
  menuConfig?: NativeContextMenuNode[];
  onActionPress?: (event: { nativeEvent: { actionKey: string } }) => void;
};

function Trigger(_props: ContextMenuTriggerProps) {
  return null;
}

function Content(_props: ContextMenuContentProps) {
  return null;
}

function Item(_props: ContextMenuItemProps) {
  return null;
}

function ItemTitle(_props: ContextMenuTextProps) {
  return null;
}

function ItemSubtitle(_props: ContextMenuTextProps) {
  return null;
}

function ItemIcon(_props: ContextMenuIconProps) {
  return null;
}

function Separator() {
  return null;
}

function Group(_props: ContextMenuGroupProps) {
  return null;
}

function Label(_props: ContextMenuLabelProps) {
  return null;
}

function Sub(_props: ContextMenuSubProps) {
  return null;
}

function SubTrigger(_props: ContextMenuSubTriggerProps) {
  return null;
}

function SubContent(_props: ContextMenuSubContentProps) {
  return null;
}

function isElementOfType<P>(child: React.ReactNode, component: React.ComponentType<P>): child is React.ReactElement<P> {
  return React.isValidElement(child) && child.type === component;
}

function getTextContent(children: React.ReactNode): string | undefined {
  const flattened = React.Children.toArray(children)
    .map(child => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }

      if (React.isValidElement(child)) {
        return getTextContent((child as React.ReactElement<any>).props.children);
      }

      return "";
    })
    .join("")
    .trim();

  return flattened.length > 0 ? flattened : undefined;
}

function getTriggerMetadata(children: React.ReactNode) {
  let title: string | undefined;
  let subtitle: string | undefined;
  let iconName: string | undefined;

  React.Children.toArray(children).forEach(child => {
    if (isElementOfType(child, ItemTitle)) {
      title = getTextContent(child.props.children);
    } else if (isElementOfType(child, ItemSubtitle)) {
      subtitle = getTextContent(child.props.children);
    } else if (isElementOfType(child, ItemIcon)) {
      iconName = child.props.ios?.name;
    }
  });

  return { title, subtitle, iconName };
}

function parseContentChildren(
  children: React.ReactNode,
  handlers: ParsedContextMenu["handlers"],
  path: string
): NativeContextMenuNode[] {
  const items: NativeContextMenuNode[] = [];

  React.Children.toArray(children).forEach((child, index) => {
    const currentPath = `${path}.${index}`;

    if (isElementOfType(child, Separator)) {
      items.push({ type: "separator" });
      return;
    }

    if (isElementOfType(child, Group)) {
      let title: string | undefined;
      const nestedChildren: React.ReactNode[] = [];

      React.Children.toArray(child.props.children).forEach(groupChild => {
        if (isElementOfType(groupChild, Label)) {
          title = getTextContent(groupChild.props.children);
          return;
        }

        nestedChildren.push(groupChild);
      });

      items.push({
        type: "group",
        title,
        children: parseContentChildren(nestedChildren, handlers, `${currentPath}.group`),
      });
      return;
    }

    if (isElementOfType(child, Sub)) {
      let triggerMetadata: ReturnType<typeof getTriggerMetadata> = {
        title: undefined,
        subtitle: undefined,
        iconName: undefined,
      };
      let submenuChildren: React.ReactNode = null;

      React.Children.toArray(child.props.children).forEach(subChild => {
        if (isElementOfType(subChild, SubTrigger)) {
          triggerMetadata = getTriggerMetadata(subChild.props.children);
          return;
        }

        if (isElementOfType(subChild, SubContent)) {
          submenuChildren = subChild.props.children;
        }
      });

      items.push({
        type: "submenu",
        title: triggerMetadata.title ?? "Menu",
        subtitle: triggerMetadata.subtitle,
        iconName: triggerMetadata.iconName,
        children: parseContentChildren(submenuChildren, handlers, `${currentPath}.sub`),
      });
      return;
    }

    if (isElementOfType(child, Item)) {
      const metadata = getTriggerMetadata(child.props.children);
      const actionKey = (typeof child.key === "string" ? child.key : undefined) ?? currentPath;

      if (child.props.onSelect) {
        handlers[actionKey] = child.props.onSelect;
      }

      items.push({
        type: "item",
        actionKey,
        title: metadata.title ?? "Item",
        subtitle: metadata.subtitle,
        iconName: metadata.iconName,
        disabled: child.props.disabled,
        destructive: child.props.destructive,
        hidden: child.props.hidden,
      });
    }
  });

  return items;
}

function parseRootChildren(children: React.ReactNode): ParsedContextMenu {
  let trigger: React.ReactNode = null;
  let contentChildren: React.ReactNode = null;
  const handlers: ParsedContextMenu["handlers"] = {};

  React.Children.toArray(children).forEach(child => {
    if (isElementOfType(child, Trigger)) {
      trigger = child.props.children;
      return;
    }

    if (isElementOfType(child, Content)) {
      contentChildren = child.props.children;
    }
  });

  return {
    trigger,
    menuConfig: parseContentChildren(contentChildren, handlers, "root"),
    handlers,
  };
}

let cachedNativeContextMenuView: HostComponent<NativeContextMenuViewProps> | null = null;

function getNativeContextMenuView() {
  if (cachedNativeContextMenuView) {
    return cachedNativeContextMenuView;
  }

  cachedNativeContextMenuView = requireNativeComponent<NativeContextMenuViewProps>("ContextMenuView");

  return cachedNativeContextMenuView;
}

function Root({ children, disabled, ...props }: ContextMenuRootProps) {
  const parsed = useMemo(() => parseRootChildren(children), [children]);
  const handlersRef = useRef(parsed.handlers);
  handlersRef.current = parsed.handlers;

  const handleActionPress = useCallback((event: { nativeEvent: { actionKey: string } }) => {
    const actionKey = event.nativeEvent.actionKey;
    handlersRef.current[actionKey]?.();
  }, []);

  if (!parsed.trigger) {
    return null;
  }

  if (Platform.OS !== "ios") {
    return <View {...props}>{parsed.trigger}</View>;
  }

  const NativeContextMenuView = getNativeContextMenuView();

  return (
    <NativeContextMenuView
      {...props}
      disabled={disabled}
      menuConfig={parsed.menuConfig}
      onActionPress={handleActionPress}
    >
      {parsed.trigger}
    </NativeContextMenuView>
  );
}

export const ContextMenu = Root as ContextMenuComponent;

ContextMenu.Root = Root;
ContextMenu.Trigger = Trigger;
ContextMenu.Content = Content;
ContextMenu.Item = Item;
ContextMenu.ItemTitle = ItemTitle;
ContextMenu.ItemSubtitle = ItemSubtitle;
ContextMenu.ItemIcon = ItemIcon;
ContextMenu.Separator = Separator;
ContextMenu.Group = Group;
ContextMenu.Label = Label;
ContextMenu.Sub = Sub;
ContextMenu.SubTrigger = SubTrigger;
ContextMenu.SubContent = SubContent;
