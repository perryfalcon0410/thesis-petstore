import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Product from 'components/Product'
import { PRODUCT_TYPE } from 'utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoriesData, setProductData, setQueryParams } from 'store/reducers/productSlice'

const ProductListPage = ({ productList, queryParams }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const productSlice = useSelector((state) => state.product)

  useEffect(() => {
    const updateProductSlice = () => {
      dispatch(setProductData(productList))
      dispatch(setQueryParams(queryParams))
    }
    updateProductSlice()

    const fetchCategoriesData = async () => {
      if (productSlice.categories.length === 0) {
        const categoryList = await axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`)
          .then((res) => res.data)
        dispatch(setCategoriesData(categoryList))
      }
    }
    fetchCategoriesData()

    return () => {}
  }, [productList, queryParams])

  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  return <Product productType={PRODUCT_TYPE.LIST} productData={productSlice} />
}

export async function getServerSideProps(context) {
  const queryParams = {
    page: context.query.page ? context.query.page : 1,
    limit: context.query.limit ? context.query.limit : 9,
    orderBy: context.query.orderBy ? context.query.orderBy : '',
    categories: context.query.categories ? context.query.categories : '',
    maxPrice: context.query.maxPrice ? context.query.maxPrice : '',
    minPrice: context.query.minPrice ? context.query.minPrice : '',
  }
  const options = {
    page: queryParams.page,
    limit: queryParams.limit,
  }
  if (queryParams.orderBy) options.orderBy = queryParams.orderBy
  if (queryParams.categories) options.categories = queryParams.categories
  if (queryParams.maxPrice) options.maxPrice = queryParams.maxPrice
  if (queryParams.minPrice) options.minPrice = queryParams.minPrice

  const productList = await axios.get(`${process.env.BACKEND_URL}/product`, { params: options }).then((res) => res.data)

  return {
    props: { productList, queryParams },
  }
}

export default ProductListPage
