import express from "express";
import { createPost ,getPost,updatePost,deletePost,postLikes,postTimeLine} from "../Controllers/postController.js";


const router=express.Router();

router.post('/',createPost);
router.get("/:id",getPost);
router.put("/:id",updatePost);
router.delete("/:id",deletePost);
router.put("/:id/like",postLikes);
router.get("/:id/timelinepost",postTimeLine);



export default router;