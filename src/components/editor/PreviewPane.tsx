import React from "react";
import styled from "styled-components";

const StyledPreviewPaneContainer = styled.div`
  .preview-pane {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
    font-size: 1.125rem;
    .title {
      font-size: 2.5rem;
      font-weight: 300;
      padding-bottom: 2rem;
      border-bottom: 1px solid grey;
    }
  }
`;

const PreviewPane = () => {
  return (
    <StyledPreviewPaneContainer>
      <div className="preview-pane">
        <h1 className="title">Title</h1>
        <div>Content</div>
      </div>
    </StyledPreviewPaneContainer>
  );
};

export default PreviewPane;
