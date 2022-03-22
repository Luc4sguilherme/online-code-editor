import CodeMirror from 'codemirror';
import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/theme/neo.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/lint/lint';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/dart/dart';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/r/r';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/go/go';
import 'codemirror/mode/php/php';
import 'codemirror/mode/julia/julia';
import 'codemirror/mode/python/python';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/perl/perl';
import 'codemirror/mode/groovy/groovy';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/haskell/haskell';
import 'codemirror/mode/erlang/erlang';
import 'codemirror/mode/clojure/clojure';
import 'codemirror/mode/mllike/mllike';
import 'codemirror/mode/vb/vb';
import 'codemirror/mode/gas/gas';
import 'codemirror/mode/lua/lua';
import 'codemirror/mode/pascal/pascal';
import 'codemirror-mode-elixir';
import 'codemirror/mode/crystal/crystal';
import 'codemirror/mode/fortran/fortran';
import 'codemirror/mode/cobol/cobol';
import 'codemirror/mode/coffeescript/coffeescript';

import './style.css';

import { useTheme } from '../../contexts/themeContext';
import codeMirrorHelper from '../../utils/codeMirrorHelper';

type EditorProps = {
  language: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

function Editor({ language, value, onChange }: EditorProps) {
  const { theme } = useTheme();

  function handleChange(currentValue: string) {
    onChange(currentValue);
  }

  function isValidKey(keyCode: number) {
    const input = String.fromCharCode(keyCode);
    const regex = /[a-zA-Z0-9-_ ]/;

    return regex.test(input);
  }

  const handleKeydown = (editor: CodeMirror.Editor, event: KeyboardEvent) => {
    if (!editor.state.completionActive && isValidKey(event.keyCode)) {
      editor.showHint({ completeSingle: false });
    }
  };

  return (
    <div className="editor-wrapper">
      <ControlledEditor
        onBeforeChange={(_editor, _data, currentValue) =>
          handleChange(currentValue)
        }
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          mode: codeMirrorHelper.getMode(language),
          extraKeys: { 'Ctrl-Space': 'autocomplete' },
          matchBrackets: true,
          autoCloseBrackets: true,
          autoCloseTags: true,
          lint: true,
          theme: theme === 'dark' ? 'material' : 'neo',
          lineNumbers: true,
        }}
        onKeyDown={handleKeydown}
      />
    </div>
  );
}

export default Editor;
