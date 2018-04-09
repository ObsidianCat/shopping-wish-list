const request = require('supertest')
const app = require('../app')
const db = require('../services/inMemoryDatabase')

const testWish = {
  'suggestion': 'Agravic 3-Layer Jacket',
  'image': 'https://www.adidas.co.uk/dis/dw/image/v2/aagl_prd/on/demandware.static/Sites-adidas-GB-Site/Sites-adidas-products/en_GB/v1523230551100/zoom/CG2498_21_model.jpg?sw=60&sh=60&sm=fit',
  'url': 'http://www.adidas.co.uk/agravic-3-layer-jacket/CG2498.html',
  'rating': '5',
  'reviews': '1',
  'subTitle': 'Men adidas TERREX',
  'isPreorder': '',
  'salePrice': null,
  'standardPrice': 199.95
}

describe('Test the POST wish end point', () => {
  test('The valid inputs data should be saved in database and contain all required properties', async () => {
    const expectedId = db.getIdCounter()
    try {
      let response = await request(app)
        .post(`/wishlist`)
        .send({'wish': testWish})

      expect(response.statusCode).toEqual(200)

      const responseFromDb = db.getItems()
      expect(responseFromDb[expectedId]).toEqual(expect.objectContaining(testWish))
    } catch (error) {
      throw new Error(error)
    } finally {
      db.deleteItem(expectedId)
    }
  })

  test('Request with empty object in body should be resulted in error response', async () => {
    try {
      let response = await request(app)
        .post(`/wishlist`)
        .send({})

      expect(response.statusCode).toEqual(500)
    } catch (error) {
      throw new Error(error)
    }
  })
})

describe('Test the DELETE wish end point', () => {
  test('When valid id is passed as param, the wish should be deleted from db', async () => {
    const id = db.createItem(testWish).id
    expect(db.getItemById(id)).not.toBeUndefined()

    await request(app)
      .delete(`/wishlist/${id}`)

    expect(db.getItemById(id)).toBeUndefined()
  })
})
