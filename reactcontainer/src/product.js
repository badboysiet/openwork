import React, { useEffect, useRef } from "react";
 import { mount } from "products/ProductsIndex";
import { useHistory } from "react-router-dom";

const Product = () => {
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current, history);
  }, []);

  return <>hello</>;
};

export default Product;
