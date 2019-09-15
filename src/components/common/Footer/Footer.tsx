import React from "react";
import { Jumbotron } from "reactstrap";

const Footer: React.FC = (): JSX.Element => {
  return (
    <Jumbotron style={{textAlign:'center', marginBottom:'0'}}>
      <h1>reactblog</h1>
      <p>
        管理者ログイン
      </p>
    </Jumbotron>
  );
};

export default Footer;
