import { useEffect, useState } from "react";
import { CreatePost, PostsResponse } from "./types";
import { Posts } from "./api";

export const usePosts = () => {
  const [data, setData] = useState<PostsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await Posts.getPosts();
        setData(response);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

   const createPost = async (payload: Omit<CreatePost, "userId">) => {
    try {
      setLoading(true);
      setError(null);

      const newPost = await Posts.createPost(payload);

      // optimistic update (recommended)
      setData((prev) =>
        prev
          ? {
              ...prev,
              results: [newPost, ...prev.results],
            }
          : prev
      );

      return newPost;
    } catch {
      setError("Failed to create post");
      throw new Error("Create post failed");
    } finally {
      setLoading(false);
    }
  };


  return { data, loading, error, createPost };
};
