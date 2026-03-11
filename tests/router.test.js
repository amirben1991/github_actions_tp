const request = require('supertest');
const app = require('../src/app');

describe('GET /api/health', ()=> {
    it('should return status ok', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({status: 'ok'});
    })
})

describe('GET /api/greet/:name', ()=> {
    it('greet the given name', async () => {
        const res = await request(app).get('/api/greet/Amir');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({message: 'Hello, Amir!'});
    })
})