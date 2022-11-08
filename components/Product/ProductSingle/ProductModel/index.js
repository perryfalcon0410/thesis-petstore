import styles from "./styles";
import ProductSingle from "components/Product/ProductSingle";
import Image from "next/image";

const ProductModel = ({ setPopupState, productSingleData }) => {
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-container">
          <ProductSingle isModel={true} productSingleData={productSingleData} />
          <div className="close-button">
            <Image
              src="/images/Product/close.png"
              alt="close button"
              onClick={() => setPopupState(-1)}
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default ProductModel;
