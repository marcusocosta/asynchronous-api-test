
const assert = require('chai').assert;
const executionAsserts = require('../../../source/executions/services/execute-asserts');

describe('Execution asserts unit test', () => {
  describe('Testes que verificam se as propriedades existem', () => {
    it('Deve retornar erro quando a propriedade não existir no objeto no  caminho correto', () => {
      const asserts = {
        hasProperties: [
          'data',
          'soma',
        ],
      };

      const obj = {
        data: {
          soma: 40,
        },
      };

      const hasError = executionAsserts(asserts, obj);
      assert.isNotNull(hasError);
    });

    it('Deve retornar erro quando a propriedade não existir no objeto', () => {
      const asserts = {
        hasProperties: [
          'data',
          'naoexiste',
        ],
      };

      const obj = {
        data: {
          soma: 40,
        },
      };

      const hasError = executionAsserts(asserts, obj);
      assert.isNotNull(hasError);
    });

    it('Deve vazio quando todas as propriedades existirem no objeto', () => {
      const asserts = {
        hasProperties: [
          'data',
          'existe.sim',
        ],
      };

      const obj = {
        data: {
          soma: 40,
        },
        existe: {
          sim: 1,
        },
      };

      const hasError = executionAsserts(asserts, obj);
      assert.isNull(hasError);
    });
  });
  describe('Testes que verificam se os valores das propriedades estão iguais', () => {
    it('Deve retornatar erro quando a propriedade não existir no objeto', () => {
      const asserts = {
        hasValues: [
          {
            property: 'data.soma',
            value: '40',
          },
          {
            property: 'data.fowordedValueo',
            value: 1,
          },
        ],
      };

      const obj = {
        data: {
          soma: 40,
        },
      };

      const hasError = executionAsserts(asserts, obj);
      assert.isNotNull(hasError);
    });

    it('Deve retornar erro quando a propriedade existir no objeto mas o valor está errado', () => {
      const asserts = {
        hasValues: [
          {
            property: 'data.soma',
            value: '10',
          },
        ],
      };

      const obj = {
        data: {
          soma: 40,
        },
      };

      const hasError = executionAsserts(asserts, obj);
      assert.isNotNull(hasError);
    });

    it('Deve retornar vazio quando todas as propriedade existem no objeto', () => {
      const asserts = {
        hasValues: [
          {
            property: 'data.fowordedValue',
            value: 1,
          },
        ],
      };

      const obj = {
        data: {
          fowordedValue: 1,
        },
      };

      const hasError = executionAsserts(asserts, obj);
      assert.isNull(hasError);
    });
  });
});
