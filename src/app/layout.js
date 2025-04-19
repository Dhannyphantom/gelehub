import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Provider } from "react-redux";
import { store } from "@/store/store";
// import { PersistGate } from "redux-persist/integration/react";

const poppins = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jewelryhub Gele",
  description:
    "We train and style excellently realistic ready to wear (auto) geles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
