import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import useBookCart from "../../../component/hook/useBookCart";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
const Payment = () => {
    const { id } = useParams()
    const [cart] = useBookCart();
    const singleClassItem = cart.find(item => item._id == id)
    // //console.log(singleClassItem)
    // const singleclassBookId = singleClassItem?.classBookId
    // console.log(singleclassBookId)


    // const price = cart.reduce((acc, value) => acc + value.price, 0);
    
    return (
        <div className="w-full">
            <h1 className="text-4xl text-center mb-10">Payment page</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} id={id} price={singleClassItem?.price} />
            </Elements>
        </div>
    );
};

export default Payment;