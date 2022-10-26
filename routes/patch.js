const express = require('express');
const router = express.Router();
const Post = require('../model/post')

router.patch("/:postId", async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                }
            }
        );
        res.json({
           updatedPost
        });
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router