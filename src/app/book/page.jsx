"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Calendar,
  User,
  CreditCard,
  Scissors,
} from "lucide-react";
import ServiceSelection from "@/components/ServiceSelection/ServiceSelection";
import DateTimeSelection from "@/components/DateTimeSelection/DateTimeSelection";
import UserInfo from "@/components/UserInfo/UserInfo";
import Payment from "@/components/Payment/Payment";
import { useSession } from "next-auth/react";

const steps = [
  { id: 1, title: "Service Selection", icon: <Scissors className="w-5 h-5" /> },
  { id: 2, title: "Date & Time", icon: <Calendar className="w-5 h-5" /> },
  { id: 3, title: "Your Information", icon: <User className="w-5 h-5" /> },
  { id: 4, title: "Payment", icon: <CreditCard className="w-5 h-5" /> },
];

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { data: session } = useSession();

  const handlePaymentSuccess = async (ref) => {
    try {
      await fetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          amount: 1000,
          date: new Date(formData?.data),
          ref: ref.reference,
          status: "success",
        }),
      });
      alert("Booking successful!");
    } catch (err) {
      console.error("Saving booking failed:", err);
    }
  };

  const onNextForm = (data) => {
    switch (currentStep) {
      case 1:
        if (!data.eventType || !data.artist) {
          return alert("Please select an event type and artist");
        } else {
          setFormData({ ...formData, ...data });
          setCurrentStep(2);
        }
        break;
      case 2:
        if (!data.date || !data.time || !data.address) {
          return alert("Please fill in all fields");
        } else {
          setFormData({ ...formData, ...data });
          setCurrentStep(3);
        }
        break;
      case 3:
        if (!data.name || !data.phone || !data.email) {
          return alert("Please fill in all fields");
        } else {
          setFormData({ ...formData, ...data });
          setCurrentStep(4);
        }
        break;

      default:
        break;
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelection onChange={onNextForm} handleBack={handleBack} />
        );
      case 2:
        return (
          <DateTimeSelection handleBack={handleBack} onChange={onNextForm} />
        );
      case 3:
        return <UserInfo handleBack={handleBack} onChange={onNextForm} />;
      case 4:
        return (
          <Payment
            onPaymentSuccess={handlePaymentSuccess}
            email={formData?.email}
            handleBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-6 shadow-md hidden md:block">
        <h2 className="text-xl font-semibold text-zinc-700 mb-4">
          Book Your Gele Session
        </h2>
        <ul className="space-y-4">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`flex items-center space-x-2 p-3 rounded-lg transition ${
                currentStep === step.id
                  ? "bg-light text-primary-500"
                  : "bg-gray-50 text-gray-600"
              }`}
              // onClick={() => setCurrentStep(step.id)}
            >
              {currentStep > step.id ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                step.icon
              )}
              <span>{step.title}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 sm:px-6 md:px-8 bg-white shadow-md w-full max-w-4xl mx-auto">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStepContent()}
        </motion.div>
      </main>
    </div>
  );
};

export default BookingPage;
