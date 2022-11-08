import styles from "./styles";
import Image from "next/image";
import CLONEDATA from "./CLONEDATA";

const CommentItem = ({ AvatarSrc, Author, commentTime, commentDesc }) => {
  return (
    <div className="comment-item">
      <div className="comment-content">
        <div className="row">
          <div className="col md-2">
            <Image src={AvatarSrc} alt="" width={400} height={400} />
          </div>
          <div className="col md-8">
            <div className="comment-body">
              <div className="comment-author">
                <span className="author">{Author}</span>
                <div className="star-rating">
                  {[0, 1, 2, 3, 4].map((ele) => {
                    return (
                      <div className="stars" key={ele}>
                        <span className="material-icons-outlined">star</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="comment-time">{commentTime}</div>
              <p>{commentDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

const ReviewForm = () => {
  return (
    <div className="review-form-wrapper">
      <div className="review-form">
        <form className="comment-form">
          <p className="comment-notes">
            <span>Thêm câu bình luận. </span>
            <span id="email-note">
              Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc
              được đánh dấu
            </span>
          </p>
          <p className="comment-form-author">
            <input
              id="author"
              name="author"
              type="text"
              required=""
              placeholder="Tên"
            />
          </p>
          <p className="comment-form-email">
            <input
              type="email"
              required=""
              pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
              name="email"
              id="email"
              placeholder="Email"
            />
          </p>
          <p className="comment-form-comment">
            <textarea
              id="comment"
              name="comment"
              required=""
              placeholder="Viết câu bình luận..."
            />
          </p>
          <p className="form-submit">
            <input
              name="submit"
              type="submit"
              id="submit"
              className="submit au-btn btn-small"
              value="Submit"
            />
            <span>
              <i className="zmdi zmdi-arrow-right"></i>
            </span>
          </p>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="woocommerce-Reviews">
      <h2>2 đánh giá cho Reframe quan điểm của bạn</h2>
      <div className="comment-list">
        {CLONEDATA.map((ele, index) => {
          return (
            <CommentItem
              AvatarSrc={ele.avatarSrc}
              Author={ele.author}
              commentTime={ele.commentTime}
              commentDesc={ele.commentDesc}
              key={index}
            />
          );
        })}
      </div>
      <ReviewForm />
      <style jsx>{styles}</style>
    </div>
  );
};

export default ReviewSection;
