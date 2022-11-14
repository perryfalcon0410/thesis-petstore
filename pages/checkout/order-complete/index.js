import { useState, useEffect } from 'react'
import Cart from 'components/Cart/OrderComplete'
import { useRouter } from 'next/router'

const OrderComplete = () => {
  const router = useRouter()
  const [cartSlice, setCartSlice] = useState('')

  useEffect(() => {
    const completeOrder = localStorage.getItem('completeOrder')
    setCartSlice(JSON.parse(completeOrder))

    return () => {
      setCartSlice('')
    }
  }, [])

  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  if (!cartSlice) return <h1>Loading ...</h1>
  else {
    return <Cart cartSlice={cartSlice} />
  }
}

export default OrderComplete
