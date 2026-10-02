const express=require("express")
const aiController=require("../controllers/ai.controller")
const router=express.Router()

router.post("/getResponse",aiController.getResponse)




module.exports=router