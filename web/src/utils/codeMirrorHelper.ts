function getMode(language: string) {
  switch (language) {
    case 'assembly32bit':
      return 'gas';

    case 'assembly64bit':
      return 'gas';

    case 'bash':
      return 'text/x-sh';

    case 'c':
      return 'text/x-csrc';

    case 'cpp':
      return 'text/x-c++src';

    case 'csharp':
      return 'text/x-csharp';

    case 'clojure':
      return 'text/x-clojure';

    case 'crystal':
      return 'text/x-crystal';

    case 'cobol':
      return 'text/x-cobol';

    case 'coffeescript':
      return 'text/x-coffeescript';

    case 'dart':
      return 'dart';

    case 'elixir':
      return 'elixir';

    case 'erlang':
      return 'text/x-erlang';

    case 'fortran':
      return 'text/x-fortran';

    case 'fsharp':
      return 'text/x-fsharp';

    case 'go':
      return 'text/x-go';

    case 'groovy':
      return 'text/x-groovy';

    case 'haskell':
      return 'text/x-haskell';

    case 'java':
      return 'text/x-java';

    case 'julia':
      return 'text/x-julia';

    case 'kotlin':
      return 'text/x-kotlin';

    case 'lua':
      return 'text/x-lua';

    case 'nodejs':
      return 'javascript';

    case 'objectivec':
      return 'text/x-objectivec';

    case 'ocaml':
      return 'text/x-ocaml';

    case 'pascal':
      return 'text/x-pascal';

    case 'perl':
      return 'text/x-perl';

    case 'php':
      return 'text/x-php';

    case 'r':
      return 'text/x-rsrc';

    case 'ruby':
      return 'text/x-ruby';

    case 'rust':
      return 'text/x-rustsrc';

    case 'scala':
      return 'text/x-scala';

    case 'swift':
      return 'text/x-swift';

    case 'typescript':
      return 'text/typescript';

    case 'python':
    case 'python3':
      return 'text/x-python';

    case 'visualbasic':
      return 'text/x-vb';

    default:
      return 'javascript';
  }
}

export default {
  getMode,
};
