import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('')

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
    };



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
                    <button className="bg-green-500 md:mx-48 border text-center px-24 btn-outline my-6 p-1 shadow-md text-white hover:bg-green-400 rounded-sm" type="submit" disabled={!stripe}>
                        Pay
                    </button>

                    {cardError ? <p className="text-red-500 text-center">{cardError}</p> : ''}
                </form>

            </div>
        </section>
    );
};

export default CheckoutForm;