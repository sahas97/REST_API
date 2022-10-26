const express = require('express');
const router = express.Router();
const Delete = require('../model/post')

router.delete("/:deleteId", async (req, res) => {
    try {
        const deletePost = await Delete.remove(
            { _id: req.params.deleteId }
        );
        res.json({
            deletePost
        });
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router