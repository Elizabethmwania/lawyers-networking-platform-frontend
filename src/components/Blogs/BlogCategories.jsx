import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom';

export default function BlogCategories() {
    const [categories, setCategories] = useState([]);
    
    useEffect (() => {
    const fetchCategories = async () => {
      const response = await fetch (  
        //each category with blogs
        "http://3.133.90.3:8000/publication/"
      );
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <>
    <div className="blogs-sidebar">
      <div className="blogSidebarItem">
          <span className="blogSidebarTitle">CATEGORIES</span>
            <ul className="blogSidebarList">
            {categories.map((category) =>
              <li className="sidebarListItem">
                <Link className="link" to="/">
                  {category.Category} &nbsp; &nbsp; &nbsp; 
                  <span className="itemNumber">(2)</span>
                </Link>
              </li>
              )}
            </ul>
        </div>
    </div>
    </>
  )
}
