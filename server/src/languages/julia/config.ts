import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'julia {path}'],
  language: 'julia' as Language,
  archiveName: 'input.jl',
  extension: 'jl',
};
