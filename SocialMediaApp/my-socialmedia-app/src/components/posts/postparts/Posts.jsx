import React from 'react';
import { PostsData } from '../../../Data/PostsData';
import Post from "./Post.jsx"
import "./posts.css"
const Posts = () => {


  return (
    <div className="Posts">

      {
      PostsData.map((post, id) => {
        return <Post data={post} id={id}/>
      }
      )
      }


    </div>
  )
}

export default Posts