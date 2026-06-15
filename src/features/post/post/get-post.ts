import { Post } from "@src/entities/post/post.slice";
import { axiosClient } from "@src/shared/config/axios";
import { useQuery } from "@tanstack/react-query";

type GetPostProps = {
  postId: number;
};

export function useGetPost(props: GetPostProps) {
  const query = useQuery<Post>({
    queryKey: ["post", props.postId],
    queryFn: async () => {
      const { data } = await axiosClient.get<Post>(`https://dummyjson.com/products/${props.postId}`);
      return data;
    },
  });

  return query;
}
