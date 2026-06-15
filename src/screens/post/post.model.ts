import { RouteProp, useRoute } from "@react-navigation/native";
import { useGetPost } from "@src/features/post";
import { RootStackParamList } from "@src/shared/types/navigation/screen-params";

export function useModel() {
  const { params } = useRoute<RouteProp<RootStackParamList, "Post">>();
  const postResponse = useGetPost({ postId: params.postId });

  return { postResponse };
}
