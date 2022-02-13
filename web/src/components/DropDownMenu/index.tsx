import { useRef } from 'react';

import DropDownItem from '../DropDownItem';

import './style.css';

type DropDownMenu = {
  show: boolean;
  changeLanguage: (language: string) => void;
};

function DropDownMenu({ show, changeLanguage }: DropDownMenu) {
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  function languageChangeHandler(language: string) {
    changeLanguage(language);

    if (dropDownMenuRef.current) {
      dropDownMenuRef.current.style.display = 'none';
    }
  }

  return (
    <div
      className="dropdown-menu"
      style={{ display: show ? 'block' : 'none' }}
      ref={dropDownMenuRef}
    >
      <DropDownItem
        language="Bash"
        handler={() => languageChangeHandler('bash')}
      />
      <DropDownItem language="C" handler={() => languageChangeHandler('c')} />
      <DropDownItem
        language="C++"
        handler={() => languageChangeHandler('cpp')}
      />
      <DropDownItem
        language="C#"
        handler={() => languageChangeHandler('csharp')}
      />
      <DropDownItem
        language="Clojure"
        handler={() => languageChangeHandler('clojure')}
      />
      <DropDownItem
        language="Dart"
        handler={() => languageChangeHandler('dart')}
      />
      <DropDownItem
        language="Elixir"
        handler={() => languageChangeHandler('elixir')}
      />
      <DropDownItem
        language="Erlang"
        handler={() => languageChangeHandler('erlang')}
      />
      <DropDownItem language="Go" handler={() => languageChangeHandler('go')} />
      <DropDownItem
        language="Groovy"
        handler={() => languageChangeHandler('groovy')}
      />
      <DropDownItem
        language="Haskell"
        handler={() => languageChangeHandler('haskell')}
      />
      <DropDownItem
        language="Java"
        handler={() => languageChangeHandler('java')}
      />
      <DropDownItem
        language="Julia"
        handler={() => languageChangeHandler('julia')}
      />
      <DropDownItem
        language="Kotlin"
        handler={() => languageChangeHandler('kotlin')}
      />
      <DropDownItem
        language="Nodejs"
        handler={() => languageChangeHandler('nodejs')}
      />
      <DropDownItem
        language="OCaml"
        handler={() => languageChangeHandler('ocaml')}
      />
      <DropDownItem
        language="Perl"
        handler={() => languageChangeHandler('perl')}
      />
      <DropDownItem
        language="PHP"
        handler={() => languageChangeHandler('php')}
      />
      <DropDownItem
        language="Python"
        handler={() => languageChangeHandler('python')}
      />
      <DropDownItem language="R" handler={() => languageChangeHandler('r')} />
      <DropDownItem
        language="Ruby"
        handler={() => languageChangeHandler('ruby')}
      />
      <DropDownItem
        language="Rust"
        handler={() => languageChangeHandler('rust')}
      />
      <DropDownItem
        language="Scala"
        handler={() => languageChangeHandler('scala')}
      />
      <DropDownItem
        language="Swift"
        handler={() => languageChangeHandler('swift')}
      />
      <DropDownItem
        language="Typescript"
        handler={() => languageChangeHandler('typescript')}
      />
      <DropDownItem
        language="VB.net"
        handler={() => languageChangeHandler('visualbasic')}
      />
    </div>
  );
}

export default DropDownMenu;
