"use client"

import { CreatePost } from "@/features/posts/types";
import React, { useState } from "react";

const CreatePostComponent = ({createPost}: {createPost: (post: Omit<CreatePost, "userId">) => Promise<CreatePost>}) => {
  const [formData, setFormData] = useState<Omit<CreatePost, "userId">>({
    title: "",
    body: "",
    tags: [] as string[],
    category: "",
  });

  const handleCreatePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPost = await createPost(formData);
    console.log(newPost);
    if(newPost) {
        console.log("Post created successfully:", newPost);
    }
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleCreatePostSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            id="body"
            name="body"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                tags: e.target.value
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter(Boolean),
              })
            }
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostComponent;
