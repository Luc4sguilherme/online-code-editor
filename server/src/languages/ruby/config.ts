import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'ruby {path}'],
  language: 'ruby' as Language,
  archiveName: 'input.rb',
  extension: 'rb',
};
