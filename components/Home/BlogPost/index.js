import styles from './styles'
import CardPost from '../CardPost'
const BlogPost = ({ blogs }) => {
  blogs.forEach((blog, idx) => {
    if (idx === 0) {
      blog.shortDesc = 'The best time is when the puppy is 2-3 weeks old. Worms are dangerous parasites ...'
    } else if (idx === 1) {
      blog.shortDesc = 'Psychological care of the mother dog after giving birth ...'
    } else if (idx === 2) {
      blog.shortDesc = 'Catnip grass (also known as dry cat grass, catnip grass for cats) is a plant species ...'
    }
  })

  return (
    <div className="container">
      <div className="title">
        <h2>Blog Post</h2>
        <p>Best advices for your pet</p>
      </div>
      <div className="cards-wrapper">
        {blogs.map((blog) => {
          return <CardPost blog={blog} key={blog._id} />
        })}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}
export default BlogPost
