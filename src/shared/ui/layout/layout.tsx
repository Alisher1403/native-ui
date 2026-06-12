import React from "react";
import { Division } from "../index";
import { LayoutContent } from "./content/content";
import { LayoutFooter } from "./footer/footer";
import { LayoutHeader } from "./header/header";
import { Insets } from "./insets/insets";
import { LayoutProps } from "./layout.types";
import { styles } from "./layout.style";

export default function Layout(props: LayoutProps) {
  return <Division style={styles.container} {...props} />;
}

Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;
Layout.Insets = Insets;
