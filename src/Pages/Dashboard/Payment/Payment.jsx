import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import useBookCart from "../../../component/hook/useBookCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
const Payment = () => {
    const [cart] = useBookCart();

    const total = cart.reduce((acc, value) => acc + value.price, 0);
    const price=parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <h1 className="text-4xl text-center mb-10">Payment page</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart}  price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;