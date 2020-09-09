import React from 'react'
import "./css/Checkout.css"
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__add"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Recharges/RechargeOffers/final/1083991_in_amazon_payments_pay_offer_1500-X-300_2v3._CB494500262_.jpg"/>
                <div>
                    
                    <h2 className="checkout__title">Your shoping Basket
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
