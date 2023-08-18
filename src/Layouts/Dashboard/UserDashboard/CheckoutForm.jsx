import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
    }

    return (
        <section className="">
            <div className="flex h-screen items-center  justify-center">
                <form onSubmit={handleSubmit} className="border p-10 bg-white shadow">
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
                    <button className="bg-green-500 px-24 btn-outline my-6 p-1 shadow-md text-white hover:bg-green-400 rounded-sm" type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </form>

            </div>
        </section>
    );
};

export default CheckoutForm;