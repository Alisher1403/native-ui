import { useAppDispatch } from "@src/app/store/hooks";
import { Post, postsUpserted } from "@src/entities/post/post.slice";
import { axiosClient } from "@src/shared/config/axios";
import { useQuery } from "@tanstack/react-query";

type ProductsResponse = {
  products: Post[];
  total: number;
  skip: number;
  limit: number;
};

export function useGetPostList() {
  const dispatch = useAppDispatch();
  const query = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axiosClient.get<ProductsResponse>("https://dummyjson.com/products");
      dispatch(postsUpserted(data.products));
      return data.products;
    },
  });

  return query;
}
