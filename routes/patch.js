const express = require('express');
const router = express.Router();
const Post = require('../model/post')

router.patch("/:postId", async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    name: req.body.name,
                    age: req.body.description,
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