"use client";
import CreatePostComponent from "@/components/posts/CreatePost";
import { usePosts } from "@/features/posts/hooks";

const Posts = () => {
  const { data, loading, error, createPost } = usePosts();
  return (
    <div>
      <div>Posts</div>
      <CreatePostComponent createPost={createPost} />
      {data && (
        <div>
          {data.results.map((result) => {
            return <div key={result.id}>{result.title}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
