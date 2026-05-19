import React from 'react';
import { View, ImageSourcePropType } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Typography } from '../../../index';
import { useTranslation } from 'react-i18next';
import { styles } from './list-empty-component.style';

const EmptyImage = require('../../../ui.assets/images/empty-box.png');

type Props = {
  image?: ImageSourcePropType;
  title?: string;
  description?: string;
};

export default function ListEmptyComponent(props: Props) {
  const { image, title, description } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <FastImage source={image || EmptyImage} style={styles.image} />
      <Typography
        name="body/semibold"
        color="main/label"
        align="center"
        mt={20}
      >
        {t(title || 'list_empty_title')}
      </Typography>
      <Typography
        name="subheadline/medium"
        color="main/label-secondary"
        mt={4}
        align="center"
      >
        {t(description || '')}
      </Typography>
    </View>
  );
}
