const Product = require('../database/models/product');
const request = require('supertest');

const app = require('../app');

describe('Testing routes controller', () => {
    let product = null;

    it('Create new product', async () => {
        const testProps = {
            name: 'Сякэ с лососем',
            price: 75,
            weight: 50,
            ribbon: 'Hit',
            pictureUri: 'Sushi_Syake_Kunsei.jpg'
        };
        
        const response = await request(app).post('/api/products').send(testProps);

        product = new Product(response.body);

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(product.id).not.toEqual('');

    });

    it('Get product form server', async () => {
        const response = await request(app).get('/api/products');
        const _product = response.body;

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(_product.length).toBeGreaterThan(0);
    });

    it('Edit product', async () => {
        const updatedProduct = { name: 'Таки Сякэ'};
        const response = await request(app).put(`/api/products/${product.id}`).send(updatedProduct);
        const _product = response.body;

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(_product.name).toEqual(updatedProduct.name);
    });

    it('Delete product', async () => {        
        const response = await request(app).delete(`/api/products/${product.id}`);
    
        expect(response.status).toEqual(200); 
    });
});
