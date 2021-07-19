/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './textEditor.scss';

type OnChangeHandler = (e: any) => void;

interface TextEditorProps {
  value: string;
  onChange: OnChangeHandler;
}

const TextEditor: React.FC<TextEditorProps> = ({ value = '', onChange }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createWithContent(
    ContentState.createFromText(value),
  ));
  useEffect(() => {
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState]);

  return (
    <div className="text-editor">
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={setEditorState}
      />
    </div>
  );
};

export default TextEditor;
