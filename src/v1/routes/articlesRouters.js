import express from "express";
import articleController from "../../controllers/articleController.js";
const router = express.Router();

router
    .get("/", articleController.getAllArticles)
    .get("/:articleId", articleController.getArticle)
    .post("/", articleController.createArticle)
    .patch("/:articleId", articleController.updateArticle)
    .delete("/:articleId", articleController.deleteArticle)

export default router;
