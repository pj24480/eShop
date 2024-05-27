import { useSelector } from "react-redux";
import "./_products.scss";
import productSlice from "../../Store/Slices/ProductSlice";

const Products = () => {
  const products = useSelector(productSlice.getInitialState);
  return (
    <div className="products-container">
      {products.map((product, key) => {
        return (
          <div className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img src={require("../../assests/images/Shop/" + product.pImg)} />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{product.pName}</a>
              </h5>

              <p className="product-price">Price : {product.pPrice}</p>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
