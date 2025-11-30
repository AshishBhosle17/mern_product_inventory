const Products = require('../models/userModel')

exports.createProduct = async(req, res) =>{
    try {
        const product = await Products.create(req.body);
        res.status(201).json(product);

    } catch (error) {
        console.log(error);
        
    }
};

exports.getProduct =async(req,res)=>{
    try {
        const product =await Products.find();
        res.json(product);

    } catch (error) {
        console.log(error);
        
    }

}

exports.getProductById = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        res.json(product);
    } catch (err) {
        console.log(err);
        
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updated = await Products.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true }
        );
        res.json(updated);

    } catch (err) {
        console.log(err);
        
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await Products.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted" });
    } catch (err) {
        console.log(err);
        
    }
};
