import Image from 'next/image'
import Link from 'next/link'
import { LIMIT_PRODUCT_ORDER_LIST, ORDER_STATUS } from 'utils/constant'
import styles from './styles'
import { DeliveryIcon } from 'components/Utils/Icon'

const OrderList = ({ orderList }) => {
  const currentStatus = -1
  // const [searchText, setSearchText] = useState('')
  const shippingColor = {
    ready_to_pick: '#E3503E ',
    picking: '#F3A638',
    picked: '##54B7D3',
    storing: '#1E91CF',
    return: '#E3D4D4',
  }
  const shippingTitle = {
    ready_to_pick: 'Ready to Pick',
    picking: 'Picking',
    picked: 'Picked',
    storing: 'Storing',
    return: 'Return',
  }

  if (orderList.length === 0)
    return (
      <div>
        <p>You do not have any orders.</p>
        <Link href="/products">
          <a>Click here to buy our products!</a>
        </Link>
      </div>
    )

  return (
    <div className="wrapper">
      <div className="nav-container">
        {Object.entries(ORDER_STATUS).map(([key, value]) => {
          return (
            <div className={`status-container ${value === currentStatus ? 'active' : ''}`} key={key}>
              <p className="status">{key}</p>
            </div>
          )
        })}
      </div>
      {/* <div className="search-container">
        <div className="search-icon">
          <Image src="/search-icon.svg" width={16} height={16} alt="search icon" />
        </div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by OrderID"
        />
        <div className="search-button">Search</div>
      </div> */}
      <div className="order-container">
        {orderList.map((order) => {
          return (
            <div className="card" key={order.id}>
              <div className="top">
                <div className="status">
                  <DeliveryIcon width={20} height={20} stroke={shippingColor[order.shipping.status]} fill={'white'} />
                  <p style={{ color: shippingColor[order.shipping.status] }}>{shippingTitle[order.shipping.status]}</p>
                  {/* <div className="column-divider"></div>
                  <p style={{ color: '#DD583B' }}>DELIVERED</p> */}
                </div>
                <div className="divider"></div>
                <div className="product-container">
                  {order.cart.map((product, idx) => {
                    if (idx + 1 > LIMIT_PRODUCT_ORDER_LIST) return <div key={idx}></div>
                    return (
                      <div key={product.id} className="product">
                        <div className="info-container">
                          <div className="image">
                            <Image
                              src={product.images.length ? product.images[0].url : '/images/no-image.png'}
                              width={104}
                              height={104}
                              alt="Product Image"
                            />
                          </div>
                          <div className="info">
                            <p>{product.name}</p>
                            <p>x{product.quantity}</p>
                          </div>
                        </div>
                        <div className="cost">
                          <p>{product.price}$</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="divider"></div>
              <div className="bottom">
                <div className="total-cost">
                  <p style={{ fontWeight: 700, fontSize: 16 }}>
                    Total: <span style={{ color: '#dd583b' }}>{order.totalPrice + order.shippingFee}$</span>
                  </p>
                </div>
                <Link href={`/order-management/${order._id}`}>
                  <a>View detail</a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderList
