import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"helo no 1 street no 2"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"fizan"}
          </p>
          <p>
            <b>Phone</b>
            {1380983089}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-3-2023"}
          </p>
          <p>
            <b>Delivered At</b>
            {"23-3-2024"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"skjdfhds78348"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-3-2024"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total:</b>
            Rs{278}
          </p>
          <p>
            <b>Shipping Charges:</b>
            Rs{100}
          </p>
          <p>
            <b>Tax:</b>
            Rs{20}
          </p>
          <p>
            <b>Total Amount:</b>
            Rs{20 + 100 + 278}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{200}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{300}</span>
            </div>
          </div>
          <div>
            <h4>Burger with fries</h4>
            <div>
              <span>{10}</span> x <span>{400}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>Rs: {2000}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
