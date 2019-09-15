import React from "react";
import styled from "styled-components";

const StyledPostInfo = styled.div`
  background: $oc-blue-6;
  height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .info {
    margin-top: -5rem; // 헤더 크기만큼 위로
    width: 1024px;
    padding: 1rem;
    color: white;
    h1 {
      font-weight: 300;
      font-size: 3rem;
      margin: 0;
      word-wrap: break-word; // 내용이 너무 길면 다음 줄에 작성
    }
    .tags {
      margin-top: 1rem;
      font-size: 1.25rem;
      font-weight: 500;
      a {
        &:hover {
          text-decoration: underline;
        }
      }
      a + a {
        margin-left: 0.25rem; // 사이 여백
      }
    }
    .date {
      text-align: right;
      opacity: 0.75;
      font-style: italic;
      font-size: 1.25rem;
    }
  }

  @include media("<large") {
    .info {
      h1 {
        font-size: 2rem;
      }
      .tags,
      .date {
        font-size: 1rem;
      }
      width: 768px;
    }
  }
  @include media("<medium") {
    height: auto;
    padding-bottom: 4rem;
    .info {
      padding-top: 0;
      margin: 0;
      .tags {
        margin-top: 0.25rem;
      }
      .tags,
      .date {
        font-size: 0.85rem;
      }
    }
  }
`;

const PostInfo = () => {
  return (
    <StyledPostInfo>
      <div className="info">
        <h1>Title</h1>
        <div className="tags">
          <a>#tag</a>
          <a>#tag</a>
          <a>#tag</a>
        </div>
        <div className="date">Sep 15, 2018</div>
      </div>
    </StyledPostInfo>
  );
};

export default PostInfo;
