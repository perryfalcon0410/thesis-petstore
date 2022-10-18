/* eslint-disable @next/next/no-img-element */
import styles from "./styles";
import CardProduct from "components/Product/ProductSingle/CardProduct";

const RelatedProduct = ({ productSingleData }) => {
  return (
    <div className="container">
      <div className="product-related">
        <div className="title">
          <h3 className="text-center">Related Products</h3>
        </div>
        <div className="row product">
          <CardProduct productSingleData={productSingleData} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default RelatedProduct;
