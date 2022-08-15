import express from "express";

const router = express.Router();

router.route("/").get((res) => {
    res.send("My Warehouse")
})

export default router;