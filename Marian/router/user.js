const router=require('express').Router();
const path=require('path');
//const {isAuth}=require('../middleware')
const {postsignup,postlogin,getlogin,getsignup,booking,sql}=require('../controller/usercontroller');


router.get('/login',getlogin)//getlogin request
router.post('/login',postlogin)//postlogin 


router.get('/main',(req,res)=>{
    return res.render('main')
})

router.get('/gallery',(req,res)=>{
    return res.render('gallery.ejs')
})
router.get('/attraction',(req,res)=>{
    return res.render('attraction.ejs')
})
router.get('/room',(req,res)=>{
    return res.render('room')
})
router.get("/book",(req,res)=>{
    return res.render('book')
})


router.get('/signup',getsignup)
router.post('/signup',postsignup)





module.exports=router;