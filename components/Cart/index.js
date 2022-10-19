import styles from './styles'
import MainSection from './MainSection'
import { useState } from 'react'

const Cart = ({ cartSlice }) => {
  const [stepIdx, setStepIdx] = useState(0)

  return (
    <div className="cart-wrapper">
      <MainSection stepIdx={stepIdx} setStepIdx={setStepIdx} cartSlice={cartSlice} />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Cart
