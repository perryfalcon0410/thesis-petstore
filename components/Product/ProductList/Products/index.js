import Link from 'next/link'
import Image from 'next/image'
import styles from './styles'
import { useRouter } from 'next/router'

const Products = ({ productListData, query, setQuery }) => {
  const router = useRouter()

  const firstCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const { data, total, page, last_page } = productListData

  const handleChangePage = (page) => {
    router.replace({
      pathname: '/products',
      query: {
        ...query,
        page,
      },
    })
    setQuery({
      ...query,
      page,
    })
  }

  const handleChangeOrder = (e) => {
    const orderBy = e.target.value
    router.replace({
      pathname: '/products',
      query: {
        ...query,
        orderBy,
      },
    })
    setQuery({
      ...query,
      orderBy,
    })
  }

  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <p className="woocommerce-result-count">{`Show ${(page - 1) * 9 + 1} - ${
            page * 9 > total ? total : page * 9
          } of ${total} products`}</p>
          <form className="woocommerce-ordering" action="">
            <select name="orderby" className="select-order" onChange={handleChangeOrder}>
              <option value="">Default order</option>
              <option value="priceAsc">Price order from Low to High</option>
              <option value="priceDesc">Price order from High to Low</option>
            </select>
          </form>
          <ul className="products">
            {data.map((product, idx) => (
              <li className="product" key={idx}>
                <div className="product-img">
                  <Image src={product.images[0].url} alt={`Images of ${product.name}`} width={900} height={900} />
                </div>
                <div className="product-detail">
                  <span className="product-category">{firstCapitalize(product.categories[0].category_name)}</span>
                  <Link href={`/products/${product._id}`} passHref>
                    <a className="product-link">
                      <h2>{product.name}</h2>
                    </a>
                  </Link>
                  <span className="price">{`${product.price}$`}</span>
                </div>
              </li>
            ))}
          </ul>
          <nav className="woocommerce-pagination">
            <ul>
              {[...Array(last_page).keys()].map((ele, idx) => (
                <li
                  className="page-number"
                  key={idx}
                  onClick={() => {
                    handleChangePage(ele + 1)
                  }}
                >
                  <span>{ele + 1}</span>
                </li>
              ))}
              <li className="page-number" key={last_page + 1}>
                <span>→</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Products
