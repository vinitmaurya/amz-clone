import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-display-ads-example-2-final.png?oV7qevVB2XtFyF_O64TG6L27AFM3M2oL&itok=TBfuuTM_"
          className="checkout__ad"
          alt=""
        />
        <div>
          <h3>Hello, Ready to Checkout {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* <CheckoutProduct
            id="lsjdojo"
            title="Image description: a detailed explanation of an image that provides textual access to visual content; most often used for digital graphics online and in digital files; can be used as alt text in coding to provide access to more complete information."
            image="data:image/jpeg;base64,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"
            price={349}
            rating={2}
          /> */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
