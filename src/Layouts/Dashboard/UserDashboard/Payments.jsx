import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payments = () => {


    const stripePromise = loadStripe('pk_test_51NEOh0J6vP03PB2ILt5O7hn75B5d8YyGSS2sPiBDw5lNR3YPDB8osmyLP0I1mbbBJyIsOkcPLjt5kGTFBp70yoUi00C93xJduk')
    return (
        <div className=' bg-slate-300 p-8'>
            <h2 className='text-4xl font-bold'>Payments</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>


        </div>
    );
};

export default Payments;