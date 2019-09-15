import React from "react";
import styled from "styled-components";

const StyledPostBody = styled.div`
  .paper {
    padding: 2rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    background: white;
    @include material-shadow(4, 0.5);
    transform: translateY(-3rem);
    margin: 0 auto;
    min-height: 20rem;

    width: 1024px;
    @include media("<large") {
      width: 768px;
    }
    @include media("<medium") {
      width: calc(100% - 2rem);
    }
  }
`;

const PostBody = () => {
  return (
    <StyledPostBody>
      <div className="paper">Contents</div>
    </StyledPostBody>
  );
};

export default PostBody;
