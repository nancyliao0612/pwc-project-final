import React from "react";
import styled from "styled-components";
import Pdf from "./util/2022-precision-medicine-web.pdf";

const Wrapper = styled.div`
  padding: 5rem 0;
  text-align: center;
  a {
    text-decoration: none;
    color: var(--background-color);
    background: var(--theme-color);
    padding: 15px;
    font-size: 1.4rem;
    border-radius: 5px;
  }
`;

const DownloadPDF = () => {
  return (
    <Wrapper>
      <a href={Pdf} target="_blank">
        下載 PDF
      </a>
    </Wrapper>
  );
};

export default DownloadPDF;
