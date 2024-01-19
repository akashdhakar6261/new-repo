const express = require("express")
const posdata = require("../controllers/poscontrollers")



const router = new express.Router()




router.post("/post_posdata",posdata.postposdata )
router.get("/get_posdata",posdata.getposdata )


module.exports = router;