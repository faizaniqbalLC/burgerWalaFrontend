import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

import { GiArmoredBoomerang } from "react-icons/gi";

const Orders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Ids</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amounts</th>
              <th>Payment Method</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((a) => (
              <tr key={a}>
                <td>#9%%%%^</td>
                <td>Processing</td>
                <td>23</td>
                <td>Rs{897}</td>

                <td>COD</td>
                <td>Fizan</td>
                <td>
                  <Link to={`/order/${"kjdhsakjdha"}`}>
                    <AiOutlineEye />
                  </Link>
                  <button>
                    <GiArmoredBoomerang />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
