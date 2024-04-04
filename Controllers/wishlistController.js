const wishlists = require('../Models/wishlistSchema')

//Add to wishlist
exports.addToWishlist=async(req,res)=>{

    const {id,title,price,image} = req.body
    //To check if wishlist item already exists
    console.log("Inside wishlist controller");
    try{
        const wishlistItem = await wishlists.findOne({id})
        if(wishlistItem){
            res.status(401).json("Product already exists")
        }
        else{
            //add wishlist item to wishlist
            //update await- new
            const newProduct = new wishlists({
                id,title,price,image
            })
            await newProduct.save()
            //update
            res.status(200).json("Product Added successfully")
        }

    }
    catch(err){
        res.status(404).json(err)
    }

}