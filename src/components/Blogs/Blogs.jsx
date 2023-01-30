import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from '../../images/blog/recent-blog.png';

export default function Blogs() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
        // .then((res) => console.log(res))
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Wrapper>
        <div className="blog-container">
          <div className='container'>
            <HeaderInfo>
              <h1 className="font40 extraBold">Recent Stories</h1>
              <p className="font13">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                <br />
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </HeaderInfo>
            search iems
            <div className='text-center'>
              <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                    {items?.map(({id, title, body})=>(
                    <li key={id}>
                    <article className="card" >
                        <div className="card-image">
                            <img src={img} alt={title} />
                        </div>
                        <div className="card-content">
                          <p>Author: <span>Mike Saunchile,</span> <span>2 Days Ago</span> </p>
                            <h4 className="card-name">{title}</h4>
                            <ol className="card-list">
                                <li>
                                    population:{" "}
                                    <span>{body}</span>
                                </li>
                                
                            </ol>
                        </div>
                    </article>
                </li>
                  ))}

              </div>
            </div>
          </div>
        </div>
        </Wrapper>
      );
    }
    }


    const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
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
`;
