import './style.css';

import { useEffect, useRef, useState } from 'react';

import DragHandleIcon from '@mui/icons-material/DragHandle';

import Editor from '../../components/Editor';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Menu from '../../components/Menu';
import { useCode } from '../../contexts/codeContext';
import { useLanguage } from '../../contexts/languageContext';
import { useLoading } from '../../contexts/loadingContext';
import { useResult } from '../../contexts/resultContext';

function Home() {
  const { language } = useLanguage();
  const { result } = useResult();
  const { code, setCode } = useCode();
  const { loading } = useLoading();

  const [paneBottomHeight, setPaneBottomHeight] = useState('50%');
  const [editorDragCoverDisplay, setEditorDragCoverDisplay] = useState('none');
  const [paneBottomDisplay, setPaneBottomDisplay] = useState('flex');

  const paneBottomRef = useRef<HTMLDivElement>(null);
  const paneTopRef = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);
  const editorDragCoverRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent) {
    e.preventDefault();

    const ressize = resizerRef.current;

    if (ressize) {
      if (
        e.clientY > window.innerHeight - ressize.offsetHeight ||
        e.clientY < 200
      ) {
        return;
      }

      setPaneBottomHeight(`${window.innerHeight - e.pageY}px`);
    }
  }

  function onTouchmove(e: TouchEvent) {
    e.preventDefault();

    const ressize = resizerRef.current;

    if (ressize) {
      const { clientY } = e.touches[0];

      if (
        clientY > window.innerHeight - ressize.offsetHeight ||
        clientY < 200
      ) {
        return;
      }

      setPaneBottomHeight(`${window.innerHeight - clientY}px`);
    }
  }

  function onMouseUp() {
    document.body.removeEventListener('mousemove', onMouseMove);
    document.body.removeEventListener('touchmove', onTouchmove);

    document.body.removeEventListener('mouseup', onMouseUp);
    document.body.removeEventListener('touchend', onMouseUp);

    setPaneBottomDisplay('flex');
    setEditorDragCoverDisplay('none');
  }

  function onMouseDown() {
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('touchmove', onTouchmove);

    document.body.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('touchend', onMouseUp);

    document.body.addEventListener('touchcancel', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseUp);

    setPaneBottomDisplay('block');
    setEditorDragCoverDisplay('block');
  }

  useEffect(() => {
    if (paneBottomRef.current) {
      if (resizerRef.current) {
        resizerRef.current.addEventListener('mousedown', onMouseDown);
        resizerRef.current.addEventListener('touchstart', onMouseDown);
      }
    }

    return () => {
      if (resizerRef.current) {
        resizerRef.current.removeEventListener('mousedown', onMouseDown);
        resizerRef.current.removeEventListener('touchstart', onMouseDown);
      }
    };
  }, []);

  return (
    <>
      <Menu />

      <Error>
        <div className="container">
          <div className="pane top-pane" ref={paneTopRef}>
            <Editor language={language} onChange={setCode} value={code} />
          </div>
          <div
            className="editor-drag-cover"
            ref={editorDragCoverRef}
            style={{ display: editorDragCoverDisplay }}
          />
          <div
            className="pane bottom-pane"
            ref={paneBottomRef}
            style={{ height: paneBottomHeight, display: paneBottomDisplay }}
          >
            <div className="resizer" ref={resizerRef}>
              <DragHandleIcon style={{ color: 'var(--primaryText)' }} />
            </div>
            <div className="result-wrapper">
              {loading ? <Loading /> : <pre id="result-area">{result}</pre>}
            </div>
          </div>
        </div>
      </Error>
    </>
  );
}

export default Home;
