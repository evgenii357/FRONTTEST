const Product = require('../database/models/product');

module.exports = {
    async index(req, res){
        let _product = await Product.find();        
        res.status(200).json(_product);
    },

    async create(req, res){
        const newProduct = new Product(req.body);
        await newProduct.save();

        res.status(200).json(newProduct);
    },

    async edit(req, res){        
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
            console.log(doc);
            err ? res.status(500).end() : res.status(200).json(doc);
        });  
    },

    async delete(req, res){
        await Product.remove({ _id: req.params.id });

        res.status(200).end();
    }
}