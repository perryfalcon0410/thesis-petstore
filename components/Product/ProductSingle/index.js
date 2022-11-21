/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import styles from './styles'
import Image from 'next/image'
import RelatedProduct from 'components/Product/ProductSingle/RelatedProduct'
import Slider from 'components/Utils/Slider/Slider'
import ProductInformation from 'components/Product/Utils/ProductInformation'
import Link from 'next/link'
import { MIN_DESKTOP_WIDTH, MODEL_WIDTH_ABOVE_DESKTOP, MODEL_WIDTH_BELOW_DESKTOP } from 'utils/constant'
import { formatVNprice } from 'utils/function'
import { useDispatch } from 'react-redux'
import { addItem } from 'store/reducers/checkoutSlice'

const ProductSingle = ({ isModel, productSingleData }) => {
  const [dynamicWidth, setDynamicWidth] = useState()
  const [productQuantity, setProductQuantity] = useState(1)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const productCart = {
      id: productSingleData._id,
      name: productSingleData.name,
      images: productSingleData.images,
      price: productSingleData.price,
      quantity: 1,
    }
    dispatch(addItem({ ...productCart, quantity: productQuantity }))
  }

  useEffect(() => {
    const handleWindowChange = () => {
      if (isModel) {
        setDynamicWidth(MODEL_WIDTH_BELOW_DESKTOP)
      } else if (window.innerWidth >= MIN_DESKTOP_WIDTH) {
        setDynamicWidth(MODEL_WIDTH_ABOVE_DESKTOP)
      } else {
        setDynamicWidth(MODEL_WIDTH_BELOW_DESKTOP)
      }
    }
    handleWindowChange()
    window.addEventListener('resize', handleWindowChange)
    return window.removeEventListener('resize', handleWindowChange)
  }, [isModel])

  return (
    <>
      <div className="container">
        <div className="product-single-detail">
          <div className="row product_detail">
            <div className="col-md-6">
              <Slider DynamicWidth={dynamicWidth} sliderData={productSingleData} />
            </div>
            <div className="col-md-6 content-product">
              <h2>
                {productSingleData.name} | {formatVNprice(productSingleData.price)}$
              </h2>
              <div className="star-review">
                {[0, 1, 2, 3, 4].map((ele) => {
                  return (
                    <div className="stars" key={ele}>
                      <span className="material-icons-outlined">star</span>
                    </div>
                  )
                })}
                <p>(1 customer reviews)</p>
              </div>
              {productSingleData.shortDescription ? (
                <div
                  className="product-single-short-desc"
                  dangerouslySetInnerHTML={{
                    __html: productSingleData.shortDescription,
                  }}
                ></div>
              ) : null}
              <div className="infor-product">
                <p>
                  <span>Sku: </span> {productSingleData.productSKU}
                </p>
                <p>
                  <span>Categories: </span>{' '}
                  {productSingleData.categories.map((category, index) =>
                    index !== 0 ? ', ' + category.category_name : category.category_name,
                  )}
                </p>
                <div>
                  <span>Share: </span>
                  {['/images/facebook.png', '/images/instagram.png', '/images/twitter.png'].map((ele, idx) => {
                    return (
                      <Link href="#" key={idx}>
                        <a style={{ marginRight: '10px' }}>
                          <Image src={ele} alt="social application icon" width={15} height={15} />
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div>
                <div className="btn-group">
                  <button
                    className="prev btn"
                    onClick={() => setProductQuantity(productQuantity === 1 ? productQuantity : productQuantity - 1)}
                  >
                    -
                  </button>
                  <button className="show-number btn">{productQuantity}</button>
                  <button className="next btn" onClick={() => setProductQuantity(productQuantity + 1)}>
                    +
                  </button>
                </div>
                <div className="btn-group">
                  <div className="btn add-to-cart" onClick={handleAddToCart}>
                    ADD TO CART
                    <div className="add-to-cart-icon">
                      <Image src="/images/Product/cart-plus-solid.svg" alt="add cart icon" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>
              {isModel ? null : <ProductInformation productSingleData={productSingleData} />}
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
      {isModel ? null : <RelatedProduct productSingleData={productSingleData} />}
    </>
  )
}

export default ProductSingle
