import * as translationService from '../services/translationService.js';

export const getTranslation = async (request, reply) => {
  const { lang } = request.params;

  try {
    const dictionary = await translationService.getTranslation(lang);

    return reply.code(200).send({ dictionary });
  } catch (error) {
    if (error.message === 'language not found') {
      return reply.code(404).send({
        message: 'No translations found'
      });
    } 
    request.log.error(error);
    return reply.code(500).send({ message: 'Internal Server Error' });
  }
};
