import { useRef } from 'react';

import DropDownItem from '../DropDownItem';

import './style.css';

type DropDownMenu = {
  show: boolean;
  changeLanguage: (language: string) => void;
};

function DropDownMenu({ show, changeLanguage }: DropDownMenu) {
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  function handlerChangeLanguage(language: string) {
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
        handler={() => handlerChangeLanguage('bash')}
      />
      <DropDownItem language="C" handler={() => handlerChangeLanguage('c')} />
      <DropDownItem
        language="C++"
        handler={() => handlerChangeLanguage('cpp')}
      />
      <DropDownItem
        language="Dart"
        handler={() => handlerChangeLanguage('dart')}
      />
      <DropDownItem
        language="Elixir"
        handler={() => handlerChangeLanguage('elixir')}
      />
      <DropDownItem language="Go" handler={() => handlerChangeLanguage('go')} />
      <DropDownItem
        language="Groovy"
        handler={() => handlerChangeLanguage('groovy')}
      />
      <DropDownItem
        language="Haskell"
        handler={() => handlerChangeLanguage('haskell')}
      />
      <DropDownItem
        language="Java"
        handler={() => handlerChangeLanguage('java')}
      />
      <DropDownItem
        language="Julia"
        handler={() => handlerChangeLanguage('julia')}
      />
      <DropDownItem
        language="Nodejs"
        handler={() => handlerChangeLanguage('nodejs')}
      />
      <DropDownItem
        language="Perl"
        handler={() => handlerChangeLanguage('perl')}
      />
      <DropDownItem
        language="PHP"
        handler={() => handlerChangeLanguage('php')}
      />
      <DropDownItem
        language="Python"
        handler={() => handlerChangeLanguage('python')}
      />
      <DropDownItem language="R" handler={() => handlerChangeLanguage('r')} />
      <DropDownItem
        language="Ruby"
        handler={() => handlerChangeLanguage('ruby')}
      />
      <DropDownItem
        language="Rust"
        handler={() => handlerChangeLanguage('rust')}
      />
      <DropDownItem
        language="Swift"
        handler={() => handlerChangeLanguage('swift')}
      />
      <DropDownItem
        language="Typescript"
        handler={() => handlerChangeLanguage('typescript')}
      />
    </div>
  );
}

export default DropDownMenu;
