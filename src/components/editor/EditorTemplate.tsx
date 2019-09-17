import React, { useState } from "react";
import styled from "styled-components";

interface EditorTemplateIF {
  header: JSX.Element,
  editor: JSX.Element,
  preview: JSX.Element
}

const StyledEditorTemplateContainer = styled.div`
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
`;

const EditorTemplate = (props: EditorTemplateIF): JSX.Element => {
  const [state, setState] = useState({ leftPercentage: 0.5 });

  const { header, editor, preview } = props;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setState({ leftPercentage: e.clientX / window.innerWidth });
  };

  const handleMouseUp = (_e: React.MouseEvent) => {
    document.body.removeEventListener("mousemove", _e => handleMouseMove);
  };

  const handleSeperatorMouseDown = (_e: React.MouseEvent) => {
    document.body.addEventListener("mousemove", _e => handleMouseMove);
    window.addEventListener("mouseup", _e => handleMouseUp);
  };

  const leftStyle = {
    flex: state.leftPercentage
  };

  const rightStyle = {
    flex: 1 - state.leftPercentage
  };

  const separatorStyle = {
    left: `${state.leftPercentage * 100}%`
  };

  return (
    <StyledEditorTemplateContainer>
      <div className="editor-template">
        {header}
        <div className="panes">
          <div className="pane editor" style={leftStyle}>
            {editor}
          </div>
          <div className="pane preview" style={rightStyle}>
            {preview}
          </div>
          <div
            className="separator"
            style={separatorStyle}
            onMouseDown={handleSeperatorMouseDown}
          />
        </div>
      </div>
    </StyledEditorTemplateContainer>
  );
};

export default EditorTemplate;
