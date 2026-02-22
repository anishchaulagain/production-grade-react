import { useState } from "react";
import { PostsResponse } from "./types";
import { Posts } from "./api";

export const usePosts = () => {
  const [data, setData] = useState<PostsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
  return { data, loading, error, fetchPosts };
};
