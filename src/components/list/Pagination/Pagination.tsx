import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;

    .pageNo {
        flex: 1;
        text-align: center;
    }
`

const Pagination = () => {
  return (
    <StyledDiv>
      <Button>Previous Page</Button>
      <div className="pageNo">Page 1</div>
      <Button>Next Page</Button>
    </StyledDiv>
  );
};

export default Pagination;
