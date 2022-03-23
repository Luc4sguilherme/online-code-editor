function getFormatted(language: string) {
  switch (language) {
    case 'assembly32bit':
      return 'Assembly 32bit';

    case 'assembly64bit':
      return 'Assembly 64bit';

    case 'bash':
      return 'Bash';

    case 'c':
      return 'C';

    case 'cpp':
      return 'C++';

    case 'csharp':
      return 'C#';

    case 'clojure':
      return 'Clojure';

    case 'crystal':
      return 'Crystal';

    case 'cobol':
      return 'Cobol';

    case 'commonlisp':
      return 'Common Lisp';

    case 'coffeescript':
      return 'CoffeeScript';

    case 'dart':
      return 'Dart';

    case 'elixir':
      return 'Elixir';

    case 'erlang':
      return 'Erlang';

    case 'fortran':
      return 'Fortran';

    case 'fsharp':
      return 'F#';

    case 'go':
      return 'Go';

    case 'groovy':
      return 'Groovy';

    case 'haskell':
      return 'Haskell';

    case 'java':
      return 'Java';

    case 'javascriptspidermonkey':
      return 'Javascript (Spidermonkey)';

    case 'julia':
      return 'Julia';

    case 'kotlin':
      return 'Kotlin';

    case 'lua':
      return 'Lua';

    case 'nodejs':
      return 'Nodejs';

    case 'objectivec':
      return 'Objective-C';

    case 'ocaml':
      return 'OCaml';

    case 'pascal':
      return 'Pascal';

    case 'perl':
      return 'Perl';

    case 'php':
      return 'PHP';

    case 'python':
      return 'Python';

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

    case 'visualbasic':
      return 'VB.net';

    default:
      return 'Python 3';
  }
}

export default {
  getFormatted,
};
