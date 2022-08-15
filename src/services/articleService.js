import article from "../database/article.js";
import { v4 as uuidv4 } from 'uuid';

const getAllArticles = () => { 
    return article.findAllArticles();
};

const getArticle = (articleId) => {  
    return article.findArticle(articleId);
};

const createArticle = (newArticle) => { 
    const articleToInsert = {
        ...newArticle,
        id: uuidv4()
    }
    return article.createNewArticle(articleToInsert);
};

const updateArticle = (art) => { 
    return article.updateArticle(art);
};

const deleteArticle = () => { 
    return;
};

export default {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle

}