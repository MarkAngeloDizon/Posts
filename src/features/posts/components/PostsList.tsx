import React from 'react'
import { useGetPosts } from '../posts.hooks'

const PostsList = () => {
const {isLoading, isError, error, data } = useGetPosts();

    if(isLoading) return <p>loading...</p>;
    if(isError) return <p>{error.message}</p>

  return (
    <div>
        {JSON.stringify(data)}
    </div>
  )
}

export default PostsList
