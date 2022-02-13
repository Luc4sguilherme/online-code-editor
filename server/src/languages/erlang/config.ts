import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'erlc {path} && erl -noshell -s input main -s init stop'],
  language: 'erlang' as Language,
  archiveName: 'input.erl',
  extension: 'erl',
};
