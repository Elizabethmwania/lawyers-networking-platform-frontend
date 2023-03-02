import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import { Link } from "react-router-dom";
import blogImg from '../../images/blog/blog1.png';
import { Fade } from "react-awesome-reveal";

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
          <Fade direction="up" delay={500}>
            <h1 className="font30 extraBold">Recent Stories</h1>
          </Fade>
          </HeaderInfo>
          <div className="flex textCenter">
              <BlogWrapper className="flex whiteBg radius8">
              {blogs.slice(0, 3).map((blog) =>
                <SingleBlog>
                  <Fade key={blog.id}  direction="up" cascade delay={blog.id * 200} duration={1000} fraction={0.1}>
                  <Link key={blog.id} className='blogItem-link' to={`/blog/${blog.id}`}>            
                  <img src={blogImg} alt='blog' />
                  </Link>
                  <p className="font13 extraBold" style={{ padding: "20px 0" }}>{blog.Title}
                  <span className="font12"> - Published:
                  <span className="tag font11">{blog.DatePublished}</span>
                  </span>
                  </p>
                  <p className="font13" >
                    {blog.Description.slice(0, 180)}..
                  </p>
                  <div className="flex flexSpaceNull">
                    <p className="whiteColor tag coralBg radius6 font12">{
                      blog.Category
                    }    
                    </p>
                    <span className=" radius6 tag font13">
                      <Link key={blog.id} className='blogItem-link' to={`/blog/${blog.id}`}>
                      Read More ➝
                      </Link>
                    </span>
                  </div>
                  </Fade>
                </SingleBlog>
                )}
              </BlogWrapper>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <Link to="/blog" >
              <ButtonsRow>
               <FullButton title="Load More..."/>
              </ButtonsRow>
              </Link>
            </div>
          </div>
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
animation-duration: 1s;
animation-iteration-count: 1;
transform-origin: bottom;

:hover {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-50px); }
  100% { transform: translateY(0); }
}
  @media (max-width: 860px) {
    width: fit-content;
    display: flex;
    flex-direction:column;
    align-content:center;
    flex-wrap: wrap;
  }
`;
const ButtonsRow = styled.div`
justify-content: center;
float:right;
width:fit-content;
animation-duration: 1s;
animation-iteration-count: 1;
transform-origin: bottom;

:hover {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-30px); }
  100% { transform: translateY(0); }
}
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

