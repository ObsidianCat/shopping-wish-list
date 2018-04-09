const express = require('express');
const router = express.Router();
const wishListController = require('../controllers/wishlist');


//router.post('/', wishListController.postItem);

router.post('/', (req, res, next)=> {
    wishListController.postItem({req, res, next});
});
router.get('/', (req, res, next)=> {
    wishListController.getItems({req, res, next});
});

router.delete('/:id', (req, res, next)=> {
    wishListController.deleteItem({req, res, next});
});


module.exports = router;
