const express = require('express');
const router = express.Router();
const Get = require('../model/post')

router.get("/", async(req, res) => {
    try {
        const posts = await Get.find();
        res.json({"result" : posts})
    }catch (err){
        res.json({message: err});
    }
})

router.get("/:getId", async (req, res) => {
    try {
        const post = await Get.findById(req.params.getId);
        res.json({ "result": post })
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router