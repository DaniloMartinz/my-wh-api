import DB from "./db.json" assert {type: "json"};
import utils from "./utils.js";

const findAllArticles = () => {
    return DB.inventory;
};

const findArticle = (articleId) => {
    const art = DB.inventory.find((item)=> item.art_id === articleId)
    if(!art) {
        return{
            status: 400,
            msg: `Article ${articleId} not found`
        }
    }
    return art;
};

const createNewArticle = (newArt) => {
    const isAlreadyInDB = DB.inventory.findIndex(
        (art)=> art.name === newArt.name
    ) > -1;
    if(isAlreadyInDB){
        return;
    }
    DB.inventory.push(newArt);
    utils.saveToDataBase(DB);

    return newArt;
}

const updateArticle = (art) => {
    const articleIndex = DB.inventory.findIndex(
        (item)=> item.art_id === art.art_id
    ) 
    if(articleIndex<0) {
        return {status: 400, msg:"Article not found"};
    }
    DB.inventory[articleIndex].name = art.name;
    DB.inventory[articleIndex].stock = art.stock;
    utils.saveToDataBase(DB);
    return art;
}


export default {
    findAllArticles,
    createNewArticle,
    findArticle,
    updateArticle    
}
