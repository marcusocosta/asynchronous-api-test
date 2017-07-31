
const assert = require('chai').assert;
const moment = require('moment');
const getNextExecution = require('../../source/tests/services/get-next-execution');

describe('Busca a próxima data de execução - Teste unitário', () => {
  it('Deve retornar uma data válida quando o data de agendamento for interpretada', () => {
    const nextExecution = getNextExecution('at 08:00 PM');
    assert.isTrue(moment(nextExecution).isValid());
  });

  it('Deve retornar uma data válida quando o data de agendamento não for interpretada', () => {
    const nextExecution = getNextExecution('upa');
    assert.isTrue(moment(nextExecution).isValid());
  });
});
