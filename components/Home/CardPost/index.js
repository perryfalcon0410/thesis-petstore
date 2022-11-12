import React from 'react'
import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'
const CardPost = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="img-wrapper">
          <img src="/image4.jpg" alt="Hot air balloons"></img>
        </div>
        <div className="content">
          <h2 className="title">Something</h2>
          <div className="description">
            <p>Chế độ dinh dưỡng blah blah</p>
            <Link href={''}>
              <a>Read more ...</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default CardPost
