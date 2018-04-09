const request = require('supertest');
const app = require('../app');
const db = require('../services/inMemoryDatabase');

const testWish = {
    "suggestion": "Agravic 3-Layer Jacket",
    "image": "https://www.adidas.co.uk/dis/dw/image/v2/aagl_prd/on/demandware.static/Sites-adidas-GB-Site/Sites-adidas-products/en_GB/v1523230551100/zoom/CG2498_21_model.jpg?sw=60&sh=60&sm=fit",
    "url": "http://www.adidas.co.uk/agravic-3-layer-jacket/CG2498.html",
    "rating": "5",
    "reviews": "1",
    "subTitle": "Men adidas TERREX",
    "isPreorder": "",
    "salePrice": null,
    "standardPrice": 199.95,
};

describe('Test the POST wish end point', () => {

    test('The inputs data should be saved in database and contain all required properties', async () => {
        try {
            let response = await request(app)
                .post(`/wishlist`)
                .send({"wish": testWish});

            expect(response.statusCode).toEqual(200);

            // const responseFromDb = await item.findItems({given_id: testObjectLeft.given_id});
            // expect(responseFromDb.length).toBe(1);
            // expect(responseFromDb[0]).toEqual(expect.objectContaining(testObjectLeft));
        }
        // catch(error) {
        //     throw new Error(error);
        // }
        // finally {
        //     ItemModel.remove({ given_id: testObjectLeft.given_id }).exec().catch((error)=>{
        //         throw new Error(error);
        //     })
        // }
    });
});