import { useUnistyles } from 'react-native-unistyles';
import IconVariant from './components/icon-variant';
import { Icons } from './icon.config';
import { IconProps } from './icon.types';

type IconComponent = ((props: IconProps) => React.JSX.Element) & {
  Variant: typeof IconVariant;
};

const Icon = ((props: IconProps) => {
  const { name, size, color } = props;
  const { theme } = useUnistyles();
  const IconComponent = Icons[name]['default'];
  const iconSize = size || 24;
  const iconColor = theme.colors[color || 'main/label'];

  return <IconComponent height={iconSize} width={iconSize} color={iconColor} />;
}) as IconComponent;

Icon.Variant = IconVariant;

export default Icon;
