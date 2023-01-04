import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51MMWQgKOqMPoUvOiFJNtBH0z2kS1gfsVCWkkuMXH5cuotjOXtjQLSCs4mk9DiGSWfYaEQUIkdmTOGsPDEzzVndkX00BP77yfP6');

const Payment = () => {
    const myCart = useLoaderData();
    console.log(myCart);
    const navigation = useNavigation();
    const { productName, price,img , email } = myCart;
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className=' max-w-[1440px] mx-auto my-24'>
            <h3 className="text-3xl">Payment for {productName}</h3>
            <p className="text-xl"><img src={img} alt="" className='w-40' /> Please pay <strong>${price}</strong> <p>{email}</p></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        myCart={myCart}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;