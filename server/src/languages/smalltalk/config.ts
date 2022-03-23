import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'gst {path}'],
  language: 'smalltalk' as Language,
  archiveName: 'input.st',
  extension: 'st',
};
