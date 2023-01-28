import React from "react";
import styled from "styled-components";
import blog1 from '../../images/blog/blog1.png'

export default function BlogBox({ tag, image, text, action, author }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        <img className="font20 extraBold" src={blog1} />
        <p className="font13 extraBold">{author}</p>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
