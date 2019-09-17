import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const StyledEditorHeader = styled.div`
  .editor-header {
    background: teal;
    height: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;

    .submit {
      margin-left: auto;
    }
  }
`;

const EditorHeader = ({ onGoBack, onSubmit }: any) => {
  return (
    <StyledEditorHeader>
      <div className="editor-header">
        <div className="back">
          <Button onClick={onGoBack} theme="outline">
            Back
          </Button>
        </div>
        <div className="submit">
          <Button onClick={onSubmit} theme="outline">
            Write
          </Button>
        </div>
      </div>
    </StyledEditorHeader>
  );
};

export default EditorHeader;
