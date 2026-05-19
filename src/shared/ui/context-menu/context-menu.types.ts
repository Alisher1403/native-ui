import React from "react";
import type { ViewProps } from "react-native";

export type ContextMenuIconProps = {
  ios?: {
    name?: string;
  };
};

export type ContextMenuRootProps = ViewProps & {
  children?: React.ReactNode;
  disabled?: boolean;
};

export type ContextMenuTriggerProps = {
  children?: React.ReactNode;
};

export type ContextMenuContentProps = {
  children?: React.ReactNode;
};

export type ContextMenuItemProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  destructive?: boolean;
  hidden?: boolean;
  onSelect?(): void;
};

export type ContextMenuSubProps = {
  children?: React.ReactNode;
};

export type ContextMenuSubTriggerProps = {
  children?: React.ReactNode;
};

export type ContextMenuSubContentProps = {
  children?: React.ReactNode;
};

export type ContextMenuGroupProps = {
  children?: React.ReactNode;
};

export type ContextMenuLabelProps = {
  children?: React.ReactNode;
};

export type ContextMenuTextProps = {
  children?: React.ReactNode;
};

export type NativeContextMenuItem =
  | {
      type: "item";
      actionKey: string;
      title: string;
      subtitle?: string;
      iconName?: string;
      disabled?: boolean;
      destructive?: boolean;
      hidden?: boolean;
    }
  | {
      type: "submenu";
      title: string;
      subtitle?: string;
      iconName?: string;
      children: NativeContextMenuNode[];
    }
  | {
      type: "group";
      title?: string;
      children: NativeContextMenuNode[];
    }
  | {
      type: "separator";
    };

export type NativeContextMenuNode = NativeContextMenuItem;

export type ParsedContextMenu = {
  trigger: React.ReactNode;
  menuConfig: NativeContextMenuNode[];
  handlers: Record<string, NonNullable<ContextMenuItemProps["onSelect"]>>;
};

export type ContextMenuComponent = React.FC<ContextMenuRootProps> & {
  Root: React.FC<ContextMenuRootProps>;
  Trigger: React.FC<ContextMenuTriggerProps>;
  Content: React.FC<ContextMenuContentProps>;
  Item: React.FC<ContextMenuItemProps>;
  ItemTitle: React.FC<ContextMenuTextProps>;
  ItemSubtitle: React.FC<ContextMenuTextProps>;
  ItemIcon: React.FC<ContextMenuIconProps>;
  Separator: React.FC;
  Group: React.FC<ContextMenuGroupProps>;
  Label: React.FC<ContextMenuLabelProps>;
  Sub: React.FC<ContextMenuSubProps>;
  SubTrigger: React.FC<ContextMenuSubTriggerProps>;
  SubContent: React.FC<ContextMenuSubContentProps>;
};
