import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';
import 'react-toastify/dist/ReactToastify.css'; 
// import { toast } from 'react-toastify'; 
import { ToastContainer, toast } from 'react-toastify';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    toast.success('Item successfully added to the cart', {
      position: 'bottom-right',
      autoClose: 2000,
    });
  };

  if (status === STATUSES.LOADING) {
    return (
      <div className="spinner">
        <h3>
          <span className="visually-hidden">visuallyhidden</span>
        </h3>
      </div>
    );
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="productsWrapper">
        
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
          <ToastContainer/>
        </div>
      ))}
    </div>
  );
};

export default Products;
