"use client";

import PaystackButton from "@/components/PaystackButton";

const Payment = ({ onPaymentSuccess, email, handleBack }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Payment</h2>
      <p className="text-gray-700">
        Complete your payment securely using Paystack.
      </p>
      <div className="text-lg font-semibold text-gray-900">
        Booking Fee: <span className="text-primary-500">₦1000</span>
      </div>
      <p className="text-gray-600 italic">
        Secure your spot now and let us make your gele experience unforgettable!
      </p>
      <PaystackButton
        booking={{ email, amount: 1000 }}
        handleSuccess={onPaymentSuccess}
      />
      {/* <button}
        className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg cursor-pointer disabled:opacity-50"
        onClick={handlePayment}
      >
        Proceed to Payment
      </button> */}
      {/* Nav Content */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={handleBack}
          className="w-full sm:w-auto px-6 py-2 bg-gray-300 text-gray-800 rounded-lg cursor-pointer "
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Payment;
