import { Flex, FlexProps } from "../../../index";

type LayoutHeaderRightProps = FlexProps;

export function LayoutHeaderRight(props: LayoutHeaderRightProps) {
  return <Flex justify="flex-end" align="center" {...props} style={[{ marginLeft: "auto" }, props.style]} />;
}
