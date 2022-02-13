function getExtension(language: string) {
  switch (language) {
    case 'bash':
      return 'sh';

    case 'c':
      return 'c';

    case 'cpp':
      return 'cpp';

    case 'clojure':
      return 'clj';

    case 'dart':
      return 'dart';

    case 'elixir':
      return 'ex';

    case 'erlang':
      return 'erl';

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

    case 'nodejs':
      return 'js';

    case 'ocaml':
      return 'ml';

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
