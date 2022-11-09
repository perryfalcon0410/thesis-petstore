import Stripe from 'stripe'

const stripe = new Stripe(
    "sk_test_51LzctHCXcwEyovc5xiYfv4KGNYhHfvXhVfb9EDGzMlbpo5PsxnKt4MTIOHmSGHhG4kF5HljaoY5QiNiN4FzU2ivl00QfxldILJ"
)

export default async function handler(req, res){
    if (req.method == 'POST'){
        try{
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                line_items: req.body.map((item)=>{
                    // const img = item.image.asset._ref;
                    // const newImage = img.replace(
                    //     "image-",
                    //     "https://cdn.sanity.io/images/li6b3ldk/production/"
                    // )
                    // .replace('-jpg','.jpg');
                    return{
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: item.name,
                                images: [],
                            },
                            unit_amount: parseInt(item.price*100)
                        },
                        adjustable_quantity: {
                            enabled: false,
                        },
                        quantity: item.quantity
                    }
                }),
                success_url: `${req.headers.origin}/delivery`,
                cancel_url: `${req.headers.origin}/checkout`
            };

            const session = await stripe.checkout.sessions.create(params);
            console.log(session)
            res.status(200).json(session)

        }catch(error){
            res.status(500).json(error.message)
        }
    }else{
        res.setHeader("Allow","POST");
        res.status(405).end("method not allowed")
    }
}