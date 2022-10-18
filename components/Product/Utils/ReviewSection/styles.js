import css from 'styled-jsx/css'

export default css`
  .material-icons-outlined {
    font-family: 'Material Icons';
  }

  .woocommerce-Reviews {
    color: #999999 !important;

    h2 {
      font-size: 20px;
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
      line-height: 1.2;
    }

    .review-form-wrapper {
      padding: 20px 0;

      .review-form {
        .comment-form {
          .comment-notes {
            font-family: 'Raleway', sans-serif;
            font-size: 15px;
            margin: 0;
            width: 100%;
            span {
              font-weight: bold;
            }
          }
          .comment-form-author,
          .comment-form-email {
            input {
              width: 100%;
              margin: 10px 0;
              padding: 5px 0;
              border: none;
              border-bottom: 1px solid #666666;
              overflow: visible;
              font-family: 'Raleway', sans-serif;
              font-size: 15px;
              line-height: 1.5;
            }
          }

          .comment-form-comment {
            textarea {
              margin: 10px 0;
              width: 100%;
              padding: 5px 0;
              border: none;
              border-bottom: 1px solid #666666;
              overflow: auto;
              resize: vertical;
              font-family: 'Raleway', sans-serif;
              line-height: 1.5;
              font-size: 15px;
            }
          }

          .form-submit {
            width: 20%;
            input {
              width: 100%;
              margin: 10px 0;
              padding: 10px 0;
              border: 1px solid #333333;
              background: white;
              color: #333333;
              cursor: pointer;

              :hover {
                color: white;
                background: black;
              }
            }
          }
        }
      }
    }

    .comment-list {
      .comment-item {
        .comment-content {
          padding: 20px 0;
          border-bottom: 1px solid #e6e6e6;

          .row {
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;

            .col {
              position: relative;
              width: 100%;
              padding-right: 15px;
              padding-left: 15px;

              &.md-2 {
                flex: 0 0 16.666667%;
                max-width: 16.666667%;
              }

              &.md-8 {
                flex: 0 0 66.666667%;
                max-width: 66.666667%;

                .comment-body {
                  margin-left: 20px !important;

                  .comment-author {
                    .author {
                      font-size: 1rem;
                      font-weight: bold;
                      line-height: 1.5;
                      text-align: left;
                    }

                    .star-rating {
                      display: flex;

                      .stars {
                        font-size: 20px;
                        color: #ffcc33;
                      }
                    }
                  }

                  .comment-time {
                    color: #cccccc;
                    font-size: 15px;
                    font-weight: normal;
                    line-height: 1.5;
                  }

                  p {
                    font-family: 'Raleway', sans-serif;
                    font-size: 15px;
                    margin-bottom: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
