import React from 'react'
import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'
const CardPost = () => {
  return (
    <div className="cards">
      <article className="card">
        <img src="/image4.jpg" alt="Hot air balloons"></img>

        <div className="content">
          <h2>Something</h2>
          <p>
            Chế độ dinh dưỡng blah blah
          </p>
          <Link href={""}>Read more</Link>
        </div>
      </article>
      <style jsx>{styles}</style>
    </div>
  )
}

export default CardPost
