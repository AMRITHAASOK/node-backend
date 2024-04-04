const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controllers/wishlistController')

const router = new express.Router()

router.get('/all-products',productController.getAllProducts)
router.get('/view-product/:id',productController.viewProduct)
router.post('/user/register',userController.register)
router.post('/user/login',userController.login)
router.post('/product/add-wishlist',jwtMiddleware,wishlistController.addToWishlist)
module.exports = router
 