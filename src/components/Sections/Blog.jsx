import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import ClientSlider from "../Elements/ClientSlider";
import { blogs } from "../Data/Data";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <Wrapper>
      <div className="blog-container" >
        <div className="container">
          <HeaderInfo>
            <h1 className="font30 extraBold">Recent Stories</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <SingleBlog>
              {blogs.map((blog) => 
              <WrapperBtn className="animate">
              <BlogWrapper className="whiteBg radius8 shadow">
                <img src={blog.image} alt='blog' />
                <p className="font13 extraBold" style={{ padding: "20px 0" }}>{blog.author}</p>
                <p className="font13" >
                  {blog.description}
                </p>
                <div className="flex">
                <Link to={blog.link} className='links'>
                  <p className="tag coralBg radius6 font13 extraBold">{blog.category}</p>
                </Link>
                </div>
              </BlogWrapper>
              
            </WrapperBtn> 
              )}
            </SingleBlog>  
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More"/>
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '30px'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font30 extraBold">Trusted clients</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ClientSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 0px;
  justify-content: center;
    align-items: center;
    flex-direction: column;
    
    align-content: center;
    text-align: center;
    margin: 0 auto;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const BlogWrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
  @media (max-width: 860px) {
    width: fit-content;
  }

`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
const SingleBlog = styled.div`
  display:flex;
  @media (max-width: 860px) {
    flex-direction:column;
    align-content:center;
  }
`;

