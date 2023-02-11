import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import ClientSlider from "../Elements/ClientSlider";
import { blogs } from "../Data/Data";
import { Link } from "react-router-dom";
import blogImg from '../../images/blog/blog1.png';


export default function Blog() {

  const [blogs, setBlogs] = useState([]);
  useEffect (() => {
    const fetchBlogs = async () => {
      const response = await fetch (
        //sort=DatePublished:desc&_limit=3
        "http://127.0.0.1:8000/publication/"
      );
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

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
          <div className="flex textCenter">
              <BlogWrapper className="flex whiteBg radius8">
              {blogs.map((blog) => 
              // const date = {blog.DatePublished};
                <SingleBlog>
                  <img src={blogImg} alt='blog' />
                  <p className="font13 extraBold" style={{ padding: "20px 0" }}>{blog.Title}
                  <span className="tag font11">{blog.DatePublished}</span>
                  </p>
                  <p className="font13" >
                    {blog.Description}
                  </p>
                  <div className="flex flexSpaceNull">
                    <p className="tag coralBg radius6 font13 extraBold">{blog.Category}    
                    </p>
                    <span className=" radius6 tag font13">
                      <Link className='blogItem-link' to="/">
                      Read More ➝
                      </Link>
                    </span>
                  {/* </Link> */}
                  </div>
                </SingleBlog>
                )}
              </BlogWrapper>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <Link to="/blog" >
              <FullButton title="Load More"/>
              </Link>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  
  @media (max-width: 860px) {
    width: fit-content;
    display: flex;
    flex-direction:column;
    align-content:center;
    flex-wrap: wrap;
  }
  
`;
const SingleBlog = styled.div`
flex-direction: row;
width: calc(33.33% - 20px);

:hover {
  opacity: 0.5;
}
  @media (max-width: 860px) {
    flex-direction:column;
    align-content:center;
  }
`;

