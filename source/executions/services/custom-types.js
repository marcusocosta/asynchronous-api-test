
const Chance = require('chance');
const logger = require('../../commons/logger');

const customFieldsFunctions = {
  mobile: () => {
    const chance = new Chance();
    return `55319${chance.integer({ min: 70000000, max: 99999999 })}`;
  },
  invalidMobile: () => {
    const chance = new Chance();

    return `5531${chance.integer({ min: 10000000, max: 29999999 })}`;
  },
  operator: () => {
    const chance = new Chance();
    return chance.pickone(['vivo', 'oi', 'tim', 'claro']);
  },
};

module.exports = (customFields) => {
  const fields = {};
  try {
    if (customFields && customFields.length > 0) {
      customFields.forEach((element) => {
        fields[element.name] = element.type ?
          customFieldsFunctions[element.type]() : element.value;
      });
    }
  } catch (error) {
    logger.error('Erro ao geraros campos dinâmicos');
    return undefined;
  }

  logger.info('Variáveis customizadas criadas.');
  return fields;
};
