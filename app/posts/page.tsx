'use client'
import { usePosts } from '@/features/posts/hooks';
import React from 'react'

const Posts = () => {
    const { data, loading, error } = usePosts();
  return (
    <div>
        <div>Posts</div>
        {data && (
            <div>
                {data.results.map((result)=>{
                    return (
                        <div key={result.id}>{result.title}</div>

                    )
                })}
            </div>
        )}
    </div>
     
  )
}

export default Posts