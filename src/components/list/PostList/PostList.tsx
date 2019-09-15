import React from "react";

const PostItem = () => {
  return (
    <div>
      <h2>
        <a>Title</a>
      </h2>
      <div>2019-09-15</div>
      <p>Content</p>
      <div>
        <a>#tag</a>
        <a>#tag</a>
        <a>#tag</a>
      </div>
    </div>
  );
};

const PostList = () => {
  return (
    <div>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default PostList;
