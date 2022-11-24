/* eslint-disable @next/next/no-img-element */
import styles from './styles'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { IMAGE_QUALITY } from 'utils/constant'
import { removeItemById, resetCheckout } from 'store/reducers/checkoutSlice'
import { resetUser } from 'store/reducers/userSlice'
import Cookies from 'js-cookie'

const NavBar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const CheckoutSlice = useSelector((state) => state.checkout)
  const UserSlice = useSelector((state) => state.user)

  const cartList = Object.values(CheckoutSlice.cart)
  const totalCost = CheckoutSlice.totalPrice
  let totalQuantity = 0
  cartList.forEach((cart) => {
    totalQuantity += cart.quantity
  })

  const handleSignOut = () => {
    // Remove cookie from application
    Cookies.remove('user')

    // Remove user from redux
    dispatch(resetUser())

    // Remove cart from redux
    dispatch(resetCheckout())
  }

  if (!router.isReady) return null

  return (
    <nav className="top-navbar-wrapper">
      <div className="navbar-container">
        <div className="image-logo">
          <Image src="/images/logo.png" alt="companyLogo" loading="lazy" width={120} height={40} />
        </div>

        <div className="menus">
          <div className="menu-items">
            <Link href="/" passHref>
              <div className={classNames('title', { isChosen: router.asPath === '/' })}>Home</div>
            </Link>
          </div>
          <div className="menu-items">
            <Link href="/products" passHref>
              <div className={classNames('title', { isChosen: router.asPath === '/products' })}>Product</div>
            </Link>
          </div>
          <div className="menu-items">
            <div className="title">About us</div>
          </div>
        </div>

        <div className="icons">
          <div className="shopping-bag">
            <img className="shopping-bag-icon" src="/images/icon-shopping-bag.png" alt="shopping" />
            <div className="num-product">{totalQuantity}</div>
            <div className="cart-wrapper">
              <div className="tooltip-arrow"></div>
              <div className="cart-container">
                {cartList.map((cart) => {
                  return (
                    <div className="cart-card" key={cart.id}>
                      <div className="cart-img">
                        <Image
                          src={cart.images.length !== 0 ? cart.images[0].url : '/images/no-image.png'}
                          alt={cart.name}
                          width={IMAGE_QUALITY.MED}
                          height={IMAGE_QUALITY.MED}
                        />
                      </div>
                      <div className="cart-info">
                        <Link href={`/products/${cart.id}`}>
                          <a className="cart-name">{cart.name}</a>
                        </Link>
                        <p className="cart-quantity">
                          {cart.quantity} &#215; <span className="cart-price">{cart.price}</span>
                          <span className="unit-price">$</span>
                        </p>
                      </div>
                      <span
                        className="material-icons-outlined remove"
                        onClick={() => dispatch(removeItemById(cart.id))}
                      >
                        cancel
                      </span>
                    </div>
                  )
                })}
              </div>
              <div className="row">
                <p className="total">Subtotal:</p>
                <p className="cart-total">
                  <span className="cart-price">{totalCost}</span>
                  <span className="unit-price">$</span>
                </p>
              </div>
              <div className="row">
                <Link href="/checkout" passHref>
                  <a className="cart-review">View cart</a>
                </Link>
              </div>
            </div>
          </div>
          {UserSlice.id === '' ? (
            <Link href="/sign-in">
              <a className="user-href">
                <div className="user">
                  <img className="user-icon" src="/images/Navbar/user.svg" alt="user" />
                  <p>Login/Sign up</p>
                </div>
              </a>
            </Link>
          ) : (
            <div className="user">
              <img className="user-icon" src="/images/Navbar/user.svg" alt="user" />
              <p>{UserSlice.firstName + ' ' + UserSlice.lastName}</p>
              <div className="tooltip-arrow"></div>
              <div className="user-menu">
                <Link href="/order-management">
                  <a>
                    <div className={classNames('title', { isChosen: router.asPath === '/order-management' })}>
                      Your order
                    </div>
                  </a>
                </Link>
                <div className="sign-out" onClick={handleSignOut}>
                  Sign out
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{styles}</style>
    </nav>
  )
}

export default NavBar
