// components/PaystackButton.js
"use client";

import { useState } from "react";
import { usePaystackPayment } from "react-paystack";

const PaystackButton = ({ booking, handleSuccess }) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY;

  const config = {
    reference: new Date().getTime().toString(),
    email: booking.email,
    amount: booking.amount * 100, // Paystack uses kobo
    publicKey,
  };

  const onSuccess = async (ref) => {
    handleSuccess(ref);
  };

  const onClose = () => alert("Payment cancelled");

  const initializePayment = usePaystackPayment(config);

  return (
    <button
      onClick={() => initializePayment(onSuccess, onClose)}
      className="px-4 py-2 bg-primary-500 text-white rounded-lg"
    >
      Pay Now
    </button>
  );
};

export default PaystackButton;
