import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'
const CardPost = ({ blog }) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="img-wrapper">
          <Image
            src={blog.images.length !== 0 ? blog.images[0].url : '/images/no-image.png'}
            alt={blog.images.length !== 0 ? blog.images[0].image_name : 'blog image'}
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="content">
          <h2 className="title">{blog.title}</h2>
          <div className="description">
            <p className="short-desc">{blog.shortDesc}</p>
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
