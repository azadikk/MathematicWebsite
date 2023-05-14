import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageContainer;
