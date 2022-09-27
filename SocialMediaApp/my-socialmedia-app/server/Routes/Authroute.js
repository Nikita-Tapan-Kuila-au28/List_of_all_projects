import express from "express";
import {loggedIn, register } from "../Controllers/Authcontroller.js";
const router=express.Router();


router.post('/signup',register)
router.post('/login',loggedIn)

export default router;