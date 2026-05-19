import { TouchableHighlight } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Division, Flex, Icon, Typography } from '../../../index';
import { DivisionProps } from '../../../division/division.types';
import { IconName } from '../../../icon/icon.types';

type DefaultItemProps = DivisionProps & {
  title?: string;
  description?: string;
  icon?: IconName;
  onPress?: () => void;
};

export function DefaultItem(props: DefaultItemProps) {
  const { theme } = useUnistyles();

  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={theme.colors['gray/50']}
    >
      <Division py={8} {...props}>
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={12} flexShrink>
            {props.icon ? (
              <Division p={12} bg="gray/100" rounded={9999}>
                <Icon name={props.icon} size="xl" color="main/label" />
              </Division>
            ) : undefined}
            <Division flexShrink>
              <Typography name="subheadline/medium" color="main/label" flex>
                {props.title}
              </Typography>
              <Typography
                name="subheadline1/regular"
                color="main/label-secondary"
                flex
              >
                {props.description}
              </Typography>
            </Division>
          </Flex>
          <Icon name="right-line" size="xl" color="main/label-secondary" />
        </Flex>
      </Division>
    </TouchableHighlight>
  );
}
