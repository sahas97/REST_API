const express = require('express');
const router = express.Router();
const Post = require('../model/post')



router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    })

    try {
        const savedPost = await post.save();
        res.json({
            "message": 'data save successfully',
            "id": savedPost.id,
        })
    } catch (err) {
        res.json({ message: err });
    }

})

module.exports = router