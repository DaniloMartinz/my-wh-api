const getAllArticles = (req, res) => {
    res.send(`Get article ${req.params.articleId}`);
};

const getArticle = (req, res) => {
    res.send(`Get article ${req.params.articleId}`);
};

const createArticle = (req, res) => {
    res.send(`Create Article ${req.params.articleId}`);
};

const updateArticle = (req, res) => {
    res.send(`Update Article ${req.params.articleId}`);
};

const deleteArticle = (req, res) => {
    res.send(`Delete Article ${req.params.articleId}`);
};

export default {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
}