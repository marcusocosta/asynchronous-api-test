
const assert = require('chai').assert;
const testFixture = require('../utils/fixtures/test');
const request = require('supertest');

const app = require('../../source/application');

describe('Teste de contrato da rota /tests', () => {
  it('Deve retornar formato de requisição inválido quando não for passado o body da requisição', (done) => {
    request(app)
      .post('/tests')
      .expect(400)
      .end((err, res) => {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado o objeto de filters', (done) => {
    const data = testFixture({ filters: { experience: 'teste-teste' } });
    data.filters = undefined;

    request(app)
      .post('/tests')
      .send(data)
      .expect(400)
      .end((err, res) => {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado a campo description', (done) => {
    const data = testFixture({ filters: { experience: 'teste-teste' } });
    data.description = undefined;

    request(app)
      .post('/tests')
      .send(data)
      .expect(400)
      .end((err, res) => {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado a campo input', (done) => {
    const data = testFixture({ filters: { experience: 'teste-teste' } });
    data.input = undefined;

    request(app)
      .post('/tests')
      .send(data)
      .expect(400)
      .end((err, res) => {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado a campo input.url', (done) => {
    const data = testFixture({ filters: { experience: 'teste-teste' } });
    data.input.request.url = undefined;

    request(app)
      .post('/tests')
      .send(data)
      .expect(400)
      .end((err, res) => {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando não for passado a campo input.method', (done) => {
    const data = testFixture({ filters: { experience: 'teste-teste' } });
    data.input.request.method = undefined;

    request(app)
      .post('/tests')
      .send(data)
      .expect(400)
      .end((err, res) => {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });

  it('Deve retornar formato de requisição inválido quando o method não for GET, POST, DELETE', (done) => {
    const data = testFixture({ filters: { experience: 'teste-teste' } });
    data.input.request.method = 'upa';

    request(app)
      .post('/tests')
      .send(data)
      .expect(400)
      .end((err, res) => {
        const body = res.body;
        assert.isNull(err);

        assert.equal('Formato de requisição inválido!', body.message);
        done();
      });
  });
});
