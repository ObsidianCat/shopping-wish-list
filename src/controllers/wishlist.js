const db = require('../services/inMemoryDatabase');

function postItem({req, res, next}) {
    const wish = req.body.wish;
    if (!wish) {
        next("No wish provided");
        return;
    }
    try{
        const result = db.createItem(wish);
        res.send(result);
    } catch(error){
        next(error);
    }
}

function getItems({req, res, next}) {
    try{
        const result = db.getItems();
        res.send(result);
    } catch(error){
        next(error);
    }

}

function deleteItem({req, res, next}) {
    let id = req.params.id;
    if (!id) {
        next("No id provided");
        return;
    }

    try{
        const result = db.deleteItem(id);
        res.send(result);
    } catch(error){
        next(error);
    }

}


module.exports = {
    postItem,
    getItems,
    deleteItem,

};
