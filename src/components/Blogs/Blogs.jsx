import React from 'react';
import { useState, useEffect } from 'react';
import img from '../../images/blog/recent-blog.png';

export default function Blogs() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, getItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://dummyjson.com/posts")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            setIsLoaded(true);
            getItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
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
        <ul>
          {Object.items.map((item) => (
            <li key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      );
    }
    }