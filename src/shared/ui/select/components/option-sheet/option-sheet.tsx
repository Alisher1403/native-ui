import { useMemo, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheet, Division, Flex, Icon, Typography } from '../../../index';
import { OptionSheetProps } from './option-sheet.types';
import BottomSheetHeader from '@src/shared/ui/bottom-sheet/components/header';
import { BottomSheetFlashList, TouchableOpacity } from '@gorhom/bottom-sheet';
import { styles } from './option-sheet.styles';
import { ActivityIndicator, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import OptionSheetSearch from './option-sheet-search';

function LoadingComponent() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#20A96F" />
    </View>
  );
}

function EmptyComponent({ title }: { title?: string }) {
  return (
    <View style={styles.emptyContainer}>
      <FastImage
        source={require('../../../ui.assets/images/empty-box.png')}
        style={styles.emptyImage}
        resizeMode="contain"
      />
      <Typography
        name="body/semibold"
        color="main/label"
        align="center"
        mt={16}
      >
        {title}
      </Typography>
    </View>
  );
}

function ItemSeparator() {
  return <View style={styles.separator} />;
}

export function OptionSheet(props: OptionSheetProps) {
  const { ref, options, loading, onSelect } = props;
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');
  const isSearchVisible = !!props.showSearch;
  const normalizedSearch = search.trim().toLowerCase();
  const filteredOptions = useMemo(() => {
    if (!isSearchVisible || !normalizedSearch) return options;
    return options.filter(option =>
      option.label.toLowerCase().includes(normalizedSearch),
    );
  }, [isSearchVisible, normalizedSearch, options]);

  function handleDismiss() {
    setSearch('');
  }

  return (
    <BottomSheet
      ref={ref}
      enableDynamicSizing={!isSearchVisible}
      snapPoints={isSearchVisible ? ['100%'] : undefined}
      topInset={insets.top}
      onDismiss={handleDismiss}
      stackBehavior="push"
      index={0}
      headerComponent={
        props.title || props.label ? (
          <BottomSheetHeader
            title={props.title || props.label}
            onClosePress={() => ref.current?.close()}
          />
        ) : undefined
      }
    >
      {isSearchVisible ? (
        <OptionSheetSearch search={search} setSearch={setSearch} />
      ) : null}

      <BottomSheetFlashList
        data={filteredOptions}
        keyboardDismissMode="on-drag"
        style={styles.flatList}
        ItemSeparatorComponent={ItemSeparator}
        removeClippedSubviews={false}
        ListEmptyComponent={
          loading ? (
            <LoadingComponent />
          ) : (
            <EmptyComponent title={props.listEmptyTitle} />
          )
        }
        contentContainerStyle={styles.flatListContent}
        keyExtractor={(item: any) => item.value}
        renderItem={({ item }: any) => {
          const isActive = props.value === item.value;
          return (
            <TouchableOpacity
              style={styles.option}
              onPress={() => onSelect(item.value)}
            >
              <Flex align="center" gap={12} flexShrink>
                {item.prefix}
                <Typography name="subheadline/medium" color="main/label" flex>
                  {item.label}
                </Typography>
              </Flex>
              <Division>
                {isActive ? (
                  <Icon name="check-line" size="xl" color="main/primary" />
                ) : undefined}
              </Division>
            </TouchableOpacity>
          );
        }}
      />
    </BottomSheet>
  );
}
