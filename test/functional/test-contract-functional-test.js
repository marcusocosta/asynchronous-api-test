
const assert = require('chai').assert;
const testFixture = require('../utils/fixtures/test');
const request = require('supertest');

const app = require('../../source/application');

describe('Teste de contrato da rota /tests', () => {
  it('Deve retornar formato de requisição inválido quando não for passado o body da requisição', (done) => {

    request(app)
      .post('/tests')
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado o objeto de filters', (done) => {
    const body = testFixture({filters : {experience : 'teste-teste'}});
    body.filters = undefined;

    request(app)
      .post('/tests')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado a campo description', (done) => {
    const body = testFixture({filters : {experience : 'teste-teste'}});
    body.description = undefined;

    request(app)
      .post('/tests')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado a campo input', (done) => {
    const body = testFixture({filters : {experience : 'teste-teste'}});
    body.input = undefined;

    request(app)
      .post('/tests')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado a campo input.url', (done) => {
    const body = testFixture({filters : {experience : 'teste-teste'}});
    body.input.url = undefined;

    request(app)
      .post('/tests')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado a campo input.method', (done) => {
    const body = testFixture({filters : {experience : 'teste-teste'}});
    body.input.method = undefined;

    request(app)
      .post('/tests')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando o method não for GET, POST, DELETE', (done) => {
    const body = testFixture({filters : {experience : 'teste-teste'}});
    body.input.method = 'upa';

    request(app)
      .post('/tests')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function (err, res) {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });
});
