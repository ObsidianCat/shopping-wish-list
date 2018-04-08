const express = require('express');
const router = express.Router();
const wishListController = require('../controllers/wishlist');


router.post('/', wishListController.postItem);

router.get('/', wishListController.getItems);

router.delete('/', wishListController.deleteItem);


module.exports = router;
