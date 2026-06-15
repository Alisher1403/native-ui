import { useAppSelector } from "@src/app/store/hooks";
import { postSelectors } from "@src/entities/post/post.slice";
import { useImageColors } from "@src/shared/hooks";
import { Icon, PressableZoom, Typography } from "@src/shared/ui";
import FastImage from "react-native-fast-image";
import { View } from "react-native";
import { PostCardStyleProps, styles } from "./post-card.style";
import { PostCardProps } from "./post-card.types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/shared/types/navigation/screen-params";

export function PostCard(props: PostCardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const post = useAppSelector(state => postSelectors.selectById(state, props.postId));
  const imageColors = useImageColors(post?.thumbnail);
  const postCardStyle: PostCardStyleProps = { imageColors };

  function handlePress() {
    navigation.navigate("Post", { postId: props.postId });
  }

  if (!post) return null;

  return (
    <PressableZoom
      accessibilityRole="button"
      accessibilityLabel={post.title}
      accessibilityHint="Opens product details"
      style={[styles.card(postCardStyle), props.style]}
      scale={0.95}
      onPress={handlePress}
    >
      <View style={styles.imageContainer(postCardStyle)}>
        <FastImage source={{ uri: post.thumbnail }} resizeMode="contain" style={styles.image} />

        <View style={styles.ratingBadge}>
          <Icon name="star-fill" size={13} color="main/warning" />
          <Typography name="caption1/bold" color="system/white">
            {post.rating.toFixed(1)}
          </Typography>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.categoryBadge}>
          <Typography name="caption2/bold" color="main/primary" numberOfLines={1} style={styles.category}>
            {post.category}
          </Typography>
        </View>

        <Typography name="subheadline/semibold" color="main/label" numberOfLines={2} style={styles.title}>
          {post.title}
        </Typography>

        <View style={styles.meta}>
          <Typography name="body/bold" color="main/label">
            ${post.price.toFixed(2)}
          </Typography>

          <View style={styles.openButton}>
            <Icon name="arrow-right-line" size={16} color="main/primary" />
          </View>
        </View>
      </View>
    </PressableZoom>
  );
}
