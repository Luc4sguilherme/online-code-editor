import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'lua {path}'],
  language: 'lua' as Language,
  archiveName: 'input.lua',
  extension: 'lua',
};
