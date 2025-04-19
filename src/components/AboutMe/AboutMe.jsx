"use client";
import { motion } from "motion/react";
import { CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ownerImage } from "@/helpers/dataStore";

const AboutMe = () => {
  return (
    <section className="bg-[#f8f4f0] text-[#3d2b1f] px-6 py-20 md:px-20">
      <motion.div
        className="flex flex-wrap items-center justify-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image Section */}
        <motion.div
          className="w-full max-w-sm overflow-hidden rounded-xl shadow-lg md:flex-1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src={ownerImage}
            alt="Certified Gele Artist"
            className="w-full h-auto rounded-xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:flex-1 max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-[#b89430] mb-2">
            Meet Your Certified Gele & Auto-Gele Artist
          </h2>
          <p className="text-base leading-relaxed mb-4">
            I am a passionate and certified Gele & Auto-Gele artist with years
            of experience creating <strong>stunning</strong> and{" "}
            <strong>unique</strong> headwraps for brides, special occasions, and
            everyday elegance.
          </p>

          {/* Features List */}
          <ul className="list-none p-0 space-y-3">
            <motion.li
              className="flex items-center gap-2 text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle size={20} className="text-[#b89430]" />
              Expert in Bridal & Auto-Gele Styling
            </motion.li>
            <motion.li
              className="flex items-center gap-2 text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle size={20} className="text-[#b89430]" />
              Professional Gele Training Classes
            </motion.li>
            <motion.li
              className="flex items-center gap-2 text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle size={20} className="text-[#b89430]" />
              Over 5+ Years of Experience
            </motion.li>
            <motion.li
              className="flex items-center gap-2 text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles size={20} className="text-[#b89430]" />
              Personalized & Custom Designs
            </motion.li>
          </ul>

          {/* Call to Action */}
          <Link href="/book">
            <motion.p
              className="inline-block mt-6 bg-[#b89430] text-white font-bold text-base px-6 py-3 rounded-lg cursor-pointer transition hover:bg-[#3d2b1f] active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Session
            </motion.p>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
