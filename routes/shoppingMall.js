const express = require('express');
const router = express.Router();
const ShoppingMallController = require('../controllers/ShoppingMallController'); 

router.get('/', ShoppingMallController.getAll);
router.post('/', ShoppingMallController.post);

module.exports = router;
