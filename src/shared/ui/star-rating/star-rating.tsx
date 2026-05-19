import React from "react";
import { Pressable, View } from "react-native";
import { Icon, Typography } from "../index";
import { styles } from "./star-rating.style";
import { StarRatingProps } from "./star-rating.types";

function StarRating(props: StarRatingProps) {
  const { label, value, onChange, error, disabled, required } = props;
  styles.useVariants({
    disabled: !!disabled,
  });

  return (
    <View style={styles.container}>
      {label ? (
        <Typography name="caption1/medium" color="main/label-secondary" mb={8}>
          {label} {required ? <Typography name="caption1/medium" color="main/error" children="*" /> : undefined}
        </Typography>
      ) : undefined}

      <View style={styles.starsContainer}>
        {Array.from({ length: 5 }).map((_, index) => {
          const isActive = index < value;
          return (
            <Pressable key={index} onPress={() => onChange(index + 1)}>
              <Icon name="star-fill" size="xxxl" color={isActive ? "main/warning" : "gray/200"} />
            </Pressable>
          );
        })}
      </View>

      {error ? (
        <Typography name="caption1/medium" color="main/error" mt={2}>
          {error}
        </Typography>
      ) : undefined}
    </View>
  );
}

export default React.memo(StarRating);
