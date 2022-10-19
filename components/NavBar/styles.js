import css from 'styled-jsx/css'

export default css`
  .isChosen {
    background: #ffa6a8;
    color: white !important;
    border-radius: 10px;
  }
  nav.top-navbar-wrapper {
    position: sticky;
    top: 0;
    z-index: 500;
    background: white;
    .navbar-container {
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;

      .image-logo {
        height: 40px;
        img {
          height: 100%;
        }
      }

      .menus {
        display: flex;
        justify-content: space-between;
        gap: 55px;
        .menu-items {
          padding-top: 10px;
          position: relative;
          .title {
            border-radius: 10px;
            color: #707387;
            font-weight: 600;
            font-size: 1.12rem;
            padding: 5px 10px;
            transition: background 0.15s linear;
            cursor: pointer;
          }
          &:hover {
            .title {
              background: #ffa6a8;
              color: white;
            }
          }

          &.left {
            & > .subnav-content {
              left: 0;
            }

            .tooltip-arrow {
              left: 30px;
            }
          }

          &.right {
            & > .subnav-content {
              right: 0;
            }

            .tooltip-arrow {
              right: 30px;
            }
          }

          &.with-subnav {
            & > .subnav-content {
              display: none;
            }
            &:hover {
              & > .subnav-content {
                display: grid;
                column-gap: 25px;
                position: absolute;
                top: 40px;
                width: max-content;
                z-index: 199;
                padding: 20px 10px 15px 25px;
                background: white;
                border: 1px solid rgba(17, 17, 26, 0.1);
                border-top: none;
                border-radius: 10px;
                box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
                font-weight: 600;

                & > .background-layer {
                  position: absolute;
                  background: white;
                  top: 0px;
                  left: -1px;
                  width: calc(100% + 2px);
                  height: 30px;

                  & > .border-layer {
                    position: absolute;
                    top: 15px;
                    width: 100%;
                    height: 20px;
                    border-top: 1px solid rgba(17, 17, 26, 0.1);
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    border-left: 1px solid rgba(17, 17, 26, 0.1);
                    border-right: 1px solid rgba(17, 17, 26, 0.1);
                  }

                  & > .tooltip-arrow {
                    position: absolute;
                    top: 5px;
                    width: 20px;
                    height: 20px;
                    background: black;
                    transform: rotate(45deg);
                    background: white;
                    border-top: 1px solid rgba(17, 17, 26, 0.1);
                    border-left: 1px solid rgba(17, 17, 26, 0.1);
                  }
                }

                & > .content-items {
                  color: #333;
                  font-size: 16px;
                  padding: 10px 20px 0 0;
                  font-family: 'Raleway', sans-serif;
                  text-transform: uppercase;

                  &:not(&:last-child) {
                    border-right: 1px solid rgba(17, 17, 26, 0.1);
                  }

                  & > div {
                    padding: 10px 0;

                    &:hover {
                      color: #ffa6a8;
                    }
                  }

                  & > .cate-items {
                    font-size: 14px;
                    text-transform: capitalize;
                    font-weight: 400;
                  }
                }
              }
            }
          }
        }
      }

      .icons {
        display: flex;
        gap: 25px;
        .shopping-bag {
          position: relative;

          &:hover {
            .cart-wrapper {
              opacity: 1 !important;
              visibility: visible !important;
            }
          }

          .shopping-bag-icon {
            cursor: pointer;
          }

          .num-product {
            position: absolute;
            top: 8.5px;
            font-size: 10px;
            cursor: pointer;
          }

          .cart-wrapper {
            position: absolute;
            background: white;
            top: calc(100% + 10px);
            right: -70px;
            padding: 20px;
            min-width: 300px;
            border-radius: 4px;
            border: 1px solid rgba(17, 17, 26, 0.1);
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s linear, visibility 0.3s linear;

            .tooltip-arrow {
              position: absolute;
              top: -11px;
              right: 66px;
              width: 20px;
              height: 20px;
              background: white;
              border-top: 1px solid rgba(17, 17, 26, 0.1);
              border-left: 1px solid rgba(17, 17, 26, 0.1);
              transform: rotate(45deg);
            }

            .cart-container {
              max-height: 400px;
              overflow-y: auto;

              .cart-card {
                display: flex;
                column-gap: 10px;
                justify-content: space-between;

                &:not(:first-child) {
                  border-top: 1px solid #ececec;
                  padding-top: 10px;
                  margin-top: 10px;
                }

                .cart-img {
                  max-width: 70px;
                }

                .cart-info {
                  font-size: 18px;
                  line-height: 1.25;
                  color: #777;

                  .cart-name {
                    text-decoration: none;
                    font-family: 'Raleway', sans-serif;
                    color: #777;

                    &:hover {
                      color: #333;
                    }
                  }

                  .cart-quantity {
                    font-family: 'Raleway', sans-serif;
                  }

                  .cart-price {
                    font-weight: bold;
                    font-family: 'Raleway', sans-serif;
                  }

                  .unit-price {
                    font-family: 'Raleway', sans-serif;
                    font-weight: bold;
                    font-size: 14px;
                  }
                }

                .remove {
                  cursor: pointer;
                  color: #ccc;
                  background: white;
                  border-radius: 50%;
                  font-size: 28px;
                  width: 28px;
                  height: 28px;

                  &:hover {
                    color: #333;
                  }
                }
              }
            }

            .row {
              border-top: 1px solid #ececec;
              margin-top: 10px;
              padding-top: 10px;
              display: flex;
              justify-content: center;
              font-size: 18px;

              .total {
                color: #777;
                font-weight: bold;
                font-family: 'Raleway', sans-serif;
              }

              .cart-total {
                margin-left: 8px;
                font-weight: bold;
                color: #333;
                font-family: 'Raleway', sans-serif;
              }

              .unit-price {
                color: #333;
                font-weight: bold;
                font-size: 18px;
                font-family: 'Raleway', sans-serif;
              }

              .cart-review {
                text-transform: uppercase;
                text-align: center;
                cursor: pointer;
                width: 100%;
                padding: 12px 0px;
                text-decoration: none;
                color: white;
                background: #ffa6a8;
                border: 2px solid white;
                transition: background 0.3s, color 0.3s, border 0.3s;
                font-family: 'Raleway', sans-serif;
                font-size: 18px;
                font-weight: bold;

                &:hover {
                  color: #ffa6a8;
                  border-color: #ffa6a8;
                  background: white;
                }
              }
            }
          }
        }
        .panel {
          span {
            font-family: 'Material Icons';
            font-size: 22px;
            font-weight: 300;
          }
        }
      }
    }
  }
`
