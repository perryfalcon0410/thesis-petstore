import axios from 'axios'

export default function Delivery({ res }) {
  return <div>abc</div>
}

export async function getServerSideProps(context) {
  const res = await axios
    .post(
      'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail',
      { order_code: 'LLGA9M' },
      {
        headers: {
          Token: '5afa38c1-5c4b-11ed-b8cc-a20ef301dcd7',
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => {
      return response.data
    })

  if (!res) {
    return {
      notFound: true,
    }
  }

  return {
    props: res,
  }
}
