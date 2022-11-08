import { useState } from 'react'
import styles from './styles'
import Link from 'next/link'

const ProductInformation = ({ productSingleData }) => {
  const [showIdx, setShowIdx] = useState(0)

  return (
    <div className="information">
      <ul className="nav nav-pills" role="tablist">
        {/* Bỏ "Bình luận" */}
        {['Description', 'Additional information'].map((title, index) => {
          return (
            <li className="nav-item" key={index} onClick={() => setShowIdx(index)}>
              <Link href="#">
                <a className={`nav-link ${showIdx === index ? 'active' : null}`}>{title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="tab-content">
        {[
          productSingleData.description,
          productSingleData.additionInfos,
          /* <ReviewSection />, */
        ].map((description, index) => {
          return (
            <div className={`tab-pane fade ${showIdx === index ? 'active show' : null}`} key={index}>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          )
        })}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ProductInformation
