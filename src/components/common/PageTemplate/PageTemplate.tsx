import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const Template = styled.main`
  .main {
    background: #f8f9fa;
    min-height: 70vh;
  }
`;

const PageTemplate: React.FC = ({ children }): JSX.Element => {
  return (
    <Template>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </Template>
  );
};

export default PageTemplate;
