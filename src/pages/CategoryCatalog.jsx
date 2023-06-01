import React from 'react';
import {useParams} from "react-router-dom";
const CategoryCatalog = () => {
    const {category} = useParams()

    return (
        <div>
            {category}
        </div>
    );
};

export default CategoryCatalog;