const request = require("supertest")
const app = require("../index");

describe('GET /set', () => {
  test('responds with 201', async () => {
    const response = await request(app).get('/set?name=John')
    expect(response.statusCode).toBe(201)
  });
})

describe('GET /get', () => {
  test('responds with 200', async () => {
    const response = await request(app).get('/get?key=name')
    expect(response.statusCode).toBe(200)
  });
})

describe('request sequences', () => {
  test('write a key and read it back', async () => {
    await request(app).get('/set?name=John')
    const value = await request(app).get('/get?key=name')
    expect(value.text).toBe('John')
  })

  test('write a key, overwrite it, and read it back', async () => {
    await request(app).get('/set?name=John')
    await request(app).get('/set?name=Paul')
    const value = await request(app).get('/get?key=name')
    expect(value.text).toBe('Paul');
  })
})
