import styles from './styles'
import Link from 'next/link'

const Title = ({ orderId }) => {
  return (
    <div className="title-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 inner-title-page">
            <h1>Shop</h1>
            <div className="breadscrum">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/order-management">
                <a>/Order Management</a>
              </Link>
              {orderId ? `/${orderId}` : ''}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Title
