import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'
const CardPost = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="img-wrapper">
          <Image src="/image4.jpg" alt="Blog image" width={500} height={300} objectFit="cover" />
        </div>
        <div className="content">
          <h2 className="title">Something</h2>
          <div className="description">
            <p className="short-desc">Chế độ dinh dưỡng blah blah</p>
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
