import { useGetPostList } from "@src/features/post";
import { Button, Division, FlashList, Layout } from "@src/shared/ui";
import { PostCard } from "@src/widgets/post";
import { styles } from "./home.style";
import { UnistylesRuntime } from "react-native-unistyles";

function PostSeparator() {
  return <Division p={6} />;
}

export default function Home() {
  const { data: posts = [], isRefetching, refetch } = useGetPostList();

  function toggleTheme() {
    console.log(UnistylesRuntime.themeName);
    UnistylesRuntime.setTheme(UnistylesRuntime.themeName === "light" ? "dark" : "light");
  }

  return (
    <Layout bg="system/white">
      <Layout.Header>
        <Layout.Header.Title>Home</Layout.Header.Title>
        <Layout.Header.Right>
          <Button icon="star-fill" onPress={toggleTheme} />
        </Layout.Header.Right>
      </Layout.Header>

      <Layout.Content bg="system/page">
        <FlashList
          data={posts}
          renderItem={({ item }) => <PostCard postId={item.id} style={styles.postCard} />}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={PostSeparator}
          contentContainerStyle={styles.listContent}
          refreshing={isRefetching}
          onRefresh={() => refetch()}
          ListHeaderComponent={<Layout.Header.Height />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </Layout.Content>
    </Layout>
  );
}
