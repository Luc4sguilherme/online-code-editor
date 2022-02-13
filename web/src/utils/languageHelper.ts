function getFormatted(language: string) {
  switch (language) {
    case 'bash':
      return 'Bash';

    case 'c':
      return 'C';

    case 'cpp':
      return 'C++';

    case 'clojure':
      return 'Clojure';

    case 'dart':
      return 'Dart';

    case 'elixir':
      return 'Elixir';

    case 'erlang':
      return 'Erlang';

    case 'go':
      return 'Go';

    case 'groovy':
      return 'Groovy';

    case 'haskell':
      return 'Haskell';

    case 'java':
      return 'Java';

    case 'julia':
      return 'Julia';

    case 'kotlin':
      return 'Kotlin';

    case 'nodejs':
      return 'Nodejs';

    case 'ocaml':
      return 'OCaml';

    case 'perl':
      return 'Perl';

    case 'php':
      return 'PHP';

    case 'r':
      return 'R';

    case 'ruby':
      return 'Ruby';

    case 'rust':
      return 'Rust';

    case 'scala':
      return 'Scala';

    case 'swift':
      return 'Swift';

    case 'typescript':
      return 'Typescript';

    default:
      return 'Python';
  }
}

export default {
  getFormatted,
};
