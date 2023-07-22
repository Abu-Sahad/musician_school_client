import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
const CheckoutForm = ({ cart, price, id }) => {
    const classId = id;
    const { user } = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');



    const { data: card = {} } = useQuery(['create-payment-intent', price], async () => {
        const res = await fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ price }),
        });
        return res.json();
    });

    useEffect(() => {
        if (card?.clientSecret) {
            setClientSecret(card.clientSecret);
        }


    }, [card])



    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        console.log('card', card)
        if (error) {
            console.log('error', error)
            setCardError(error.message);

        }
        else {
            setCardError('');
            console.log('payment method', paymentMethod)
        }
        setProcessing(true)
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
        console.log('payment intent', paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                classId,
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                classItems: cart.map(item => item.classBookId
                ),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            axios.post('http://localhost:5000/payments', payment)
                .then(res => {
                    console.log(res.data);
                    const insertedPayment = res.data;

                    if (insertedPayment.insertedId) {
                        // Payment was successfully inserted into the database
                        // You can display a confirmation message or perform any other action here
                        console.log('Payment successfully inserted:', insertedPayment);
                    }
                })
                .catch(error => {
                    console.error('Error saving payment:', error);
                    // Handle any error that occurred during the request or insertion process
                });


        }



    }
    return (

        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
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
                <button type="submit" disabled={!stripe || !clientSecret || processing} className="btn btn-primary mt-4 btn-sm">
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500 ml-8">{cardError}</p>}

            {transactionId && <p className="text-green-600">Transaction is complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;