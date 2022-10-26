import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categories=useLoaderData();
    return (
        <div>
            <h2>{categories.map(cat=><div>{cat.name}</div>)}</h2>
        </div>
    );
};

export default Category;