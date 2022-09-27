import React from 'react'
import "./post.css"
const Post = ({ data }) => {

  return (
    <div className="Post">
      <img src={data.img} alt="" ></img>

      <div className="PostReact">
        <div className={data.liked ? "heart" : "Unlike"} onClick={() => { return !data.liked }}><i class="fa-solid fa-heart"></i></div>
        <div className="comment"> <i class="fa-regular fa-comment"></i></div>
        <div className="message"><i class="fa-solid fa-location-arrow"></i>
        </div>


      </div>
      <span style={{color:"var(--gray)",fontSize:"14px"}}>{data.likes} likes</span>
      <div className="details">
        <span><b>{data.name}</b></span>
        <span> {data.caption}</span>
      </div>

    </div>
  )
}

export default Post;