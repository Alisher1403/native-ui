import React from "react";
import { Division } from "../index";
import { Insets, LayoutHeader, LayoutContent, LayoutFooter } from "./components";
import { LayoutProps } from "./layout.types";
import { styles } from "./layout.style";

export default function Layout(props: LayoutProps) {
  return <Division style={styles.container} {...props} />;
}

Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;
Layout.Insets = Insets;
