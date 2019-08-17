const fs = require('fs');
const mongoose = require('mongoose');

let ProductSchema = mongoose.Schema({
	category: {
        type: Number,
        required: true
	},	
    title: {
        type: String,
        required: true
	},	
	description: {
        type: String,
        required: true
    },		
    price: {
        type: Number,
        required: true
	},
	gram: {
        type: Number,
        required: true
	},
	type: {
        type: String,
        required: true
	},	
    uri: {
        type: String,
        required: true
    }
});

let Product = mongoose.model('Product', ProductSchema);

Product.getProducts = category => {
	console.log('category', category);
	return new Promise((resolve, reject) => {
		Product.find({category: category}).lean().exec((err, data) => {
			err ? reject(err) : resolve(data);
		});
	});
};

Product.generateProducts = async () => {
	let products = JSON.parse(fs.readFileSync(__dirname + '/products.json' ));
	
	await Product.remove({});

	products.forEach(element => {
		new Product({
			category: element.category,
			title: element.title,
			description: element.description,
			price: element.price,
			gram: element.gram,
			type: element.type,
			uri: element.uri
		}).save();
	});
};

module.exports = Product;