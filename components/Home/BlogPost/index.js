import styles from './styles'
import Image from 'next/image'
import CardPost from '../CardPost'
const BlogPost = () => {
  return (
    <div className="container">
      <div className="title">
        <h2>Blog Post</h2>
        <p>Best advices for your pet</p>
      </div>
      <div className="cards-wrapper">
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}
export default BlogPost
