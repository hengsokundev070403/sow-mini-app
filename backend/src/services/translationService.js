import Translation from '../models/Translation.js';

export const getTranslation = async (languageCode) => {
  const translation = await Translation.findAll({
    where: { lg_code: languageCode },
    attributes: ['text_key', 'value']
  });

  if (translation.length == 0) {
    throw new Error('language not found');
  }

  const flatTranslation = {};
  translation.forEach((item) => {
    flatTranslation[item.text_key] = item.value;
  });

  return flatTranslation;
};
