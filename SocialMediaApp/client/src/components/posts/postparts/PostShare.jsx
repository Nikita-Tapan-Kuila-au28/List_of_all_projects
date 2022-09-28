import React from 'react';
import {useRef ,useState} from "react";
import "./PostShare.css";
import profileImg from "../../../images/profileImg.jpg"

const PostShare = () => {

   const [image, setImage] = useState(null);
    const imageRef = useRef();
    const onImageChange=(e)=>{
      if(e.target.files && e.target.files[0]){
        let img=e.target.files[0];
        setImage({
          image: URL.createObjectURL(img)
        })
      
      }


      }

    

    return (
        <div className="PostShare">
            <img src={profileImg} alt="" />
            <div>
                <input type="text" placeholder="What's happening?" />
                <div className="PostOptions">
                    <div className="option" onClick={()=>imageRef.current.click()} style={{ color: "var(--red)" }}><i class="fa-regular fa-image"></i>Images</div>
                    <div className="option" style={{ color: "var(--green)" }}><i class="fa-solid fa-video"></i>Video</div>
                    <div className="option" style={{ color: "var(--yellow)" }}> <i class="fa-solid fa-location-dot"></i>Location</div>
                    <div className="option" style={{ color: "var(--lightblue)" }}> <i class="fa-solid fa-music"></i> Audio</div>

                    <button className="button ps-button">Share</button>
                    <div style={{display:"none"}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}></input>
                    </div>
                    

                </div>
                {
                    image &&
                    <div className="previewImage">
                    <i class="fa-regular fa-circle-xmark" onClick={()=>{setImage(null)}  }></i>
                    <img src={image.image} alt=""></img>  
                   
                </div>
                }
                

            </div>

        </div>

    )
}

export default PostShare