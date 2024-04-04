const products = require('../Models/productSchema')

//get all products
exports.getAllProducts = async(req,res)=>{
    try{
        const AllProducts = await products.find()
        res.status(200).json(AllProducts)
    }
    catch(err){
        res.status(404).json(err)
    }
}

//view product details
exports.viewProduct = async(req,res)=>{
    //get an id from url
    const {id} = req.params
    try{
        const viewAProduct = await products.findOne({id})
        res.status(200).json(viewAProduct)
    }
    catch(err){
        res.status(404).json(err)
    }
}

