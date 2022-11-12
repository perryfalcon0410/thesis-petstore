import axios from "axios";
import { useEffect } from "react";

export default function Delivery({res}){
    useEffect(() => {
        const x = 1;
        if (x == 1){
            document.getElementById("hello").classList.add('text-white');
            document.getElementById("hello").classList.add('bg-dark');
        }
    }, []);
	return (
		<div className="container">
            <div height="800px" class="stepper" id="stepper2">
                <div class="steps-container">
                    <div className="steps">
                        <div className="step" id="1">
                            <div id="hello" className="step-title p-3">
                                <span className="step-number">01</span>
                                <div className="step-text">Confirmed</div>
                            </div>
                        </div>
                        <div><img width='100px' src="/images/arrow.png"/></div>
                        <div className="step" id="2">
                            <div className="step-title p-3">
                                <span className="step-number">02</span>
                                <div className="step-text">Pick-up</div>
                            </div>
                        </div>
                        <div><img width='100px' src="/images/arrow.png"/></div>
                        <div className="step" id="3">
                            <div className="step-title p-3">
                                <span className="step-number">03</span>
                                <div className="step-text">Delivering</div>
                            </div>
                        </div>
                        <div><img width='100px' src="/images/arrow.png"/></div>
                        <div className="step" id="4">
                            <div className="step-title p-3">
                                <span className="step-number">04</span>
                                <div className="step-text">Delivered</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
		</div>
	);
    
}

// export async function getServerSideProps(context) {
//     const res = await axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail',{'order_code': 'LLGA9M'},
//     {
//         headers: {
//             'Token': '5afa38c1-5c4b-11ed-b8cc-a20ef301dcd7',
//             'Content-Type': 'application/json'
//         }
//     }).then((response)=>{
//         return response.data;
//     });
  
//     if (!res) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: { res }, // will be passed to the page component as props
//     }
// }