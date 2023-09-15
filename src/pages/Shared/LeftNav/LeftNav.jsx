import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error));
    },[]);

    return (
        <div>
            <h4>News categories</h4>
            <div  className='text-start'>
                {
                    categories.map(category => <p
                    key={category.id}
                    >
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;