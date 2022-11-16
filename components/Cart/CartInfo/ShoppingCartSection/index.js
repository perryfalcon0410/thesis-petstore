import React, { useState } from 'react'
import styles from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { formatVNprice } from 'utils/function'
import { IMAGE_QUALITY } from 'utils/constant'
import { decQuantityById, incQuantityById, updateQuantityById, removeItemById } from 'store/reducers/checkoutSlice'
import { SignInForm, SignUpForm } from './form'

const ShoppingCartSection = ({ cartList, totalCost }) => {
  const router = useRouter()
  const userSlice = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const [formState, setFormState] = useState(1)
  const [openModal, setOpenModal] = useState(false)

  const setSignIn = () => {
    setFormState(1)
  }

  const setSignUp = () => {
    setFormState(2)
  }

  const setResetPassword = () => {
    setFormState(3)
  }

  const props = {
    setSignIn,
    setSignUp,
    setResetPassword,
    callback: () => {
      setOpenModal(false)
    },
  }

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-large-7">
          <table>
            <thead>
              <tr>
                <th colSpan={3} className="product-name">
                  Product
                </th>
                <th className="product-price">Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-subtotal">Temporary price</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((cart) => {
                return (
                  <tr key={cart.id}>
                    <td>
                      <span
                        className="material-icons-outlined remove"
                        onClick={() => dispatch(removeItemById(cart.id))}
                      >
                        cancel
                      </span>
                    </td>
                    <td style={{ minWidth: '60px', maxWidth: '90px', width: '90px' }} className="product-thumbnail">
                      <Image
                        src={cart.images.length !== 0 ? cart.images[0].url : '/images/no-image.png'}
                        alt={cart.name}
                        width={IMAGE_QUALITY.MED}
                        height={IMAGE_QUALITY.MED}
                      />
                    </td>
                    <td className="product-name">{cart.name}</td>
                    <td className="product-price">
                      <span>{formatVNprice(cart.price)}$</span>
                    </td>
                    <td className="product-quantity">
                      <div>
                        <span
                          className="material-icons sub"
                          onClick={() => {
                            if (cart.quantity == 0) return
                            dispatch(decQuantityById(cart.id))
                          }}
                        >
                          remove
                        </span>
                        <input
                          type="number"
                          className="quantity"
                          min={0}
                          inputMode="numeric"
                          value={cart.quantity}
                          onChange={(e) =>
                            dispatch(
                              updateQuantityById({
                                id: cart.id,
                                quantity: Math.ceil(Number(e.target.value).toFixed(0)),
                              }),
                            )
                          }
                        />
                        <span className="material-icons add" onClick={() => dispatch(incQuantityById(cart.id))}>
                          add
                        </span>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span>{formatVNprice(cart.price * cart.quantity)}$</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Link href="/products">
            <a className="product-path">
              <div className="go-back">
                <span className="material-icons back">west</span>
                <p>Continue to view products</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-large-5">
          <div className="title">Cart infomation</div>
          <div className="inner-row">
            <p className="subtotal">Temporary price</p>
            <p className="price">{formatVNprice(totalCost)}$</p>
          </div>
          <div className="inner-row">
            <p className="shipping">Delivery</p>
            <div>
              <p className="destination">Shipping options will be updated during checkout</p>
            </div>
          </div>
          <div className="inner-row">
            <p className="total">Total</p>
            <p className="price">{formatVNprice(totalCost)}$</p>
          </div>
          <div
            className="continue"
            onClick={() => {
              if (userSlice.id) {
                setOpenModal(false)
                router.push('/checkout/customer-info')
              } else {
                setOpenModal(true)
              }
            }}
          >
            Make a payment
          </div>
        </div>
      </div>
      <div
        className="absolute-form"
        onClick={(e) => {
          if (e.target.className.includes('absolute-form')) {
            setOpenModal(false)
          }
        }}
        style={openModal ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
      >
        {formState === 1 && <SignInForm {...props} />}
        {formState === 2 && <SignUpForm {...props} />}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ShoppingCartSection
