import styles from './styles'
import Image from 'next/image'
import CardPost from '../CardPost'
const BlogPost = () => {
  return (
    <div className="container">
      <div className='title'>
        <h2>Blog Post</h2>
        <p>Best advices for your pet</p>
      </div>
      <CardPost />
      <CardPost />
      <CardPost />
    
      <style jsx>{styles}</style>
    </div>
  )
}
export default BlogPost
