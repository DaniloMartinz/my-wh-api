import articleService from '../services/articleService.js'

const getAllArticles = (_req, res) => {
    const allArticles = articleService.getAllArticles();
    res.send({ status : "OK", data: allArticles });
};

const getArticle = (req, res) => {
    if (!req.params){
        res.status(400).send({status: "Failed"});
    }else{
        const articleId = req.params.articleId;
        const article = articleService.getArticle(articleId);
        res.send({status: "Ok", data: article});
    }
    
};

const createArticle = (req, res) => {
    const art = req.body;
    if(
        !art.name ||
        !art.stock
    ) {
        return;
    }
    const newArt = {
        name: art.name,
        stock: art.stock
    }
    const createdArticle = articleService.createArticle(newArt);
    res.status(201).send({ status: "OK", data: createdArticle });
};

const updateArticle = (req, res) => {
    const art = req.body;
    art["art_id"] = req.params.articleId;
    console.log("art", art);
    const updatedArticle = articleService.updateArticle(art);
    res.send({status: "Ok", data: updatedArticle});
};

const deleteArticle = (req, res) => {
    articleService.deleteArticle();
    res.send(`Delete Article ${req.params.articleId}`);
};

export default {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}