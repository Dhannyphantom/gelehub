"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { imagesArr } from "@/helpers/dataStore";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArr.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20 bg-gradient-to-r from-[#f8f4f0] to-white min-h-[90vh] relative overflow-hidden">
      <div className="max-w-xl text-center md:text-left z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3d2b1f] leading-tight">
          Discover the Elegance of{" "}
          <span className="text-[#d4af37]">Jewelry & Gele</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Elevate your style with our exquisite collection of jewelry and
          handcrafted gele.
        </p>
        <Link href="/book">
          <motion.p
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-6 py-3 bg-[#d4af37] text-white text-base font-medium rounded-md cursor-pointer hover:bg-[#b89430] transition"
          >
            Book Now
          </motion.p>
        </Link>
      </div>

      <div className="w-full md:w-[400px] h-[300px] md:h-[450px] mt-10 md:mt-0 relative z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={imagesArr[currentIndex]}
              alt="Gele Style"
              fill
              className="object-cover rounded-[18px] shadow-lg md:rounded-[18px] md:shadow-lg sm:rounded-none sm:shadow-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
