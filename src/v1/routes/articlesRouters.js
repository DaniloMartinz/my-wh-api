import express from "express";
import articleController from "../../controllers/articleController.js";
const router = express.Router();
process.setMaxListeners(0)
router
    .get("/", articleController.getAllArticles(req, res))

    .get("/:articleId", articleController.getArticle(req, res))

    .post("/:articleId", articleController.createArticle(req, res))

    .patch("/:articleId", articleController.updateArticle(req,res))

    .delete("/:articleId", articleController.deleteArticle(req, res))

export default router;
