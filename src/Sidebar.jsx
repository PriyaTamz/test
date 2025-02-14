import React, { useState, useCallback } from "react";

const Sidebar = () => {

  return (
    <div>
        <nav>
            <a href="cart">Cart</a>
            <a href="shipping">Shipping</a>
            <a href="payment">Payment</a>
            <a href="confirmation">Confirmation</a>
        </nav>
    </div>
  );
};

export default Sidebar;

