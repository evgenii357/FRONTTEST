const Product = require('../database/models/product');

describe('Testing the database model', () => {
    let product = null;

    beforeAll(async () => {
        product = new Product({
            name: 'Сякэ с лососем',
            price: 75,
            weight: 50,
            ribbon: 'Hit',
            pictureUri: 'Sushi_Syake_Kunsei.jpg'
        });

        await product.save();
    });

    afterAll(async () => {
        await product.remove();
    });

    it('Testing product name type', async () => {
        let _product = await Product.findById(product.id);

        expect(typeof _product.name).toEqual('string');
    });
    it('Testing product price type', async () => {
        let _product = await Product.findById(product.id);

        expect(typeof _product.price).toEqual('number');
    });
    it('Testing product weight type', async () => {
        let _product = await Product.findById(product.id);

        expect(typeof _product.weight).toEqual('number');
    });
    it('Testing product ribbon type', async () => {
        let _product = await Product.findById(product.id);

        expect(typeof _product.ribbon).toEqual('string');
    });
    it('Testing product pictureUri type', async () => {
        let _product = await Product.findById(product.id);

        expect(typeof _product.pictureUri).toEqual('string');
    });

});