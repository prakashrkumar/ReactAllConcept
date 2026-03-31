import React from 'react'
import { useState,useEffect } from 'react';

const Post = () => {
const [posts,setPosts]=useState([])
useEffect(()=>{
   const fetchPosts=async()=>{
       const res=await fetch('https://jsonplaceholder.typicode.com/posts')
       const data=await res.json()
       setPosts(data)
   }
   fetchPosts()
},[])
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
            <li key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Post
