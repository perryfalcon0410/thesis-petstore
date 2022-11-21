import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedCard = ({ trendingProducts }) => {
  const firstCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <ul className="products">
            {trendingProducts.slice(0, 6).map((product) => (
              <li className="product-wrapper" key={product._id}>
                <div className="product">
                  <div className="product-img">
                    <Image
                      src={product.images.length !== 0 ? product.images[0].url : '/images/no-image.png'}
                      alt={product.images.length !== 0 ? product.images[0].image_name : 'product image'}
                      width={900}
                      height={900}
                      objectFit="cover"
                    />
                  </div>
                  <div className="product-detail">
                    <span className="product-category">{firstCapitalize(product.categories[0].category_name)}</span>
                    <Link href={`/products/${product._id}`} passHref>
                      <a className="product-link">
                        <h2>{product.name}</h2>
                      </a>
                    </Link>

                    <span className="price">{product.price}$</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default FeaturedCard
