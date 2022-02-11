import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'dart run {path}'],
  language: 'dart' as Language,
  archiveName: 'input.dart',
  extension: 'dart',
};
