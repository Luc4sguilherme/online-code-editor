function getExtension(language: string) {
  switch (language) {
    case 'assembly32bit':
      return 'asm';

    case 'assembly64bit':
      return 'asm';

    case 'bash':
      return 'sh';

    case 'c':
      return 'c';

    case 'cpp':
      return 'cpp';

    case 'csharp':
      return 'cs';

    case 'clojure':
      return 'clj';

    case 'crystal':
      return 'cr';

    case 'cobol':
      return 'cob';

    case 'dart':
      return 'dart';

    case 'elixir':
      return 'ex';

    case 'erlang':
      return 'erl';

    case 'fortran':
      return 'f';

    case 'fsharp':
      return 'fs';

    case 'go':
      return 'go';

    case 'groovy':
      return 'groovy';

    case 'haskell':
      return 'hs';

    case 'java':
      return 'java';

    case 'julia':
      return 'jl';

    case 'kotlin':
      return 'kt';

    case 'lua':
      return 'lua';

    case 'nodejs':
      return 'js';

    case 'objectivec':
      return 'm';

    case 'ocaml':
      return 'ml';

    case 'pascal':
      return 'pas';

    case 'perl':
      return 'pl';

    case 'php':
      return 'php';

    case 'r':
      return 'R';

    case 'ruby':
      return 'rb';

    case 'rust':
      return 'rs';

    case 'scala':
      return 'scala';

    case 'swift':
      return 'swift';

    case 'typescript':
      return 'ts';

    case 'visualbasic':
      return 'vb';

    default:
      return 'py';
  }
}

function createFile(code: string, language: string) {
  const fileExtension = getExtension(language);
  const codeFile = new File([code], `input.${fileExtension}`, {
    type: 'text/plain',
  });

  return codeFile;
}

export default {
  getExtension,
  createFile,
};
