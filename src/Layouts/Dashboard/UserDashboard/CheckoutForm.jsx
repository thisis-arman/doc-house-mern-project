import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastBar, Toaster, toast } from "react-hot-toast";


const CheckoutForm = ({ fees }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    // const payAmount = fees.map(p => p.fee)

    // // const fee = payAmount[0]
    const { name, email, fee, category, number
    } = fees[0]
    console.log(name, email, fee, category)


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ fee })
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [fee])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        console.log(card)
        if (card == null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );


        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(true)
        if (paymentIntent?.status === 'succeeded') {
            console.log(paymentIntent, 'Payment intent')
            setTransactionId(paymentIntent.id)
            const payment = { name, email, userEmail: user.email, category, fee, date: new Date(), transactionId: paymentIntent.id }
            fetch('http://localhost:5000/payment', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Payment successfully')
                    }
                })


        }
    }

    return (
        <section className="md:w-2/3 mx-auto border">
            <div className="py-8">
                <form onSubmit={handleSubmit} className="border p-10  bg-white shadow">
                    <CardElement className="border "
                        options={{
                            style: {
                                base: {
                                    padding: "20px",
                                    fontSize: '16px',
                                    color: '#424770',
                                    border: '4px solid black',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="bg-green-500 md:mx-48 border text-center px-24 btn-outline my-6 p-1 shadow-md text-white hover:bg-green-400 rounded-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>

                    {cardError ? <p className="text-red-500 text-center">{cardError}</p> : ''}
                    {transactionId && <p className="text-green-500">Payment Successful. Transaction ID : {transactionId}</p>}
                </form>

            </div>
            {/* <ToastBar /> */}
            <Toaster />
        </section>
    );

}

export default CheckoutForm