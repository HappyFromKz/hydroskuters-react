import React from 'react';
import {useParams} from "react-router-dom";

const Product = () => {
  const {product} = useParams()

  return (
    <div>
      {product}
    </div>
  );
};

export default Product;