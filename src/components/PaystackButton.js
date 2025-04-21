// components/FlutterwaveButton.js
"use client";

import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const FlutterwaveButton = ({ booking, handleSuccess }) => {
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: booking.amount,
    currency: "NGN",
    payment_options: "card,ussd,banktransfer",
    customer: {
      email: booking.email,
      name: booking.name,
    },
    customizations: {
      title: "GeleHub Booking",
      description: "Payment for gele styling session",
      // logo: "/logo.png", // Replace with your logo path or URL
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay Now",
    callback: (response) => {
      handleSuccess(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      alert("Payment cancelled");
    },
  };

  return (
    <FlutterWaveButton
      className="px-4 py-2 bg-primary-500 text-white rounded-lg"
      {...fwConfig}
    />
  );
};

export default FlutterwaveButton;
