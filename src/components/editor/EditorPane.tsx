import React from "react";
import styled from "styled-components";

import CodeMirror from "codemirror";

import "codemirror/mode/markdown/markdown"; // 마크다운 문법 색상
// 마크다운 내부에 들어가는 코드 색상
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/shell/shell";

// CodeMirror를 위한 CSS 스타일
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";

const StyledEditorPaneContainer = styled.div`
.editor-pane {
    flex: 1; 
    display: flex;
    flex-direction: column;
  
    .title {
      background: grey;
      border: none;
      outline: none;
      font-size: 1.5rem;
      padding: 1rem;
      color: white;
      font-weight: 500;
      &::placeholder {
        color: rgba(255,255,255,0.75);
      }
    }
  
    .code-editor {
      flex: 1; 
      background: grey;
      display: flex;
      flex-direction: column; 
      :global .CodeMirror {
        font-size: 1rem;
        flex: 1;
        font-family: 'D2 Coding';
      }
    }
  
    .tags {
      padding-left: 1rem;
      padding-right: 1rem;
      height: 2rem;
      background: grey;
      display: flex;
      align-items: center;
      .description {
        font-size: 0.85rem;
        color: white;
        font-weight: 600;
        margin-right: 1rem;
      }
  
      input {
        font-size: 0.85rem;
        border: none;
        flex: 1;
        background: none;
        outline: none;
        font-weight: 600;
        color: rgba(255,255,255,0.9);
        &::placeholder {
          color: rgba(255,255,255,0.75);
        }
      }
    }
  }
  © 2019 GitHub, Inc.
`;

const EditorPane = (props: any): JSX.Element => {
  let editor: HTMLElement;
  let codeMirror: CodeMirror.Editor;
  let cursor: null;

  const initializeEditor = () => {
    codeMirror = CodeMirror(editor, {
      mode: "markdown",
      theme: "monokai",
      lineNumbers: true, // 좌측에 라인 넘버 띄우기
      lineWrapping: true // 내용이 너무 길면 다음 줄에 작성
    } as CodeMirror.EditorConfiguration);
    codeMirror.on("change", handleChangeMarkDown);
  };

  const handleChangeMarkDown = (doc: any) => {
    const { onChangeInput } = props;
    cursor = doc.getCursor();
  };

  return (
    <StyledEditorPaneContainer>
      <div className="editor-pane">
        <input className="title" placeholder="Input Title" name="title" />
        <div className="code-editor" />
        <div className="tags">
          <div className="description">Tag</div>
          <input name="tags" placeholder="input Tag(identified by comma)" />
        </div>
      </div>
    </StyledEditorPaneContainer>
  );
};

export default EditorPane;
