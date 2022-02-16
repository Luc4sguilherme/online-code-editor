import type { Language } from '~/types/language';

export default {
  cmd: [
    'sh',
    '-c',
    'gcc {path} `gnustep-config --objc-flags` `gnustep-config --objc-libs` -lobjc -lgnustep-base -o input && ./input',
  ],
  language: 'objectivec' as Language,
  archiveName: 'input.m',
  extension: 'm',
};
