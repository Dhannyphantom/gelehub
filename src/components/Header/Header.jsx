"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

import Button from "../Button/Button";
import UserWelcomeCard from "../UserWelcomeCard";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { data: session } = useSession();

  const isAuth = pathname.startsWith("/auth");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white drop-shadow-sm z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl text-accent-500 font-light whitespace-nowrap">
          Jewelryhub<span className="text-primary-500 font-semibold">Gele</span>
        </h1>

        {/* Mobile Right Section */}
        <div className="flex items-center md:hidden gap-3">
          {session?.user && <UserWelcomeCard />}
          <AnimatePresence mode="wait" initial={false}>
            <motion.button
              key={isOpen ? "close" : "menu"}
              className="text-gray-700 text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </AnimatePresence>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {!isAuth &&
            ["Home", "Book", "Services", "About", "Contact Us"].map(
              (text, index) => {
                const href =
                  text === "Home"
                    ? "/"
                    : `/${text.toLowerCase().replace(" ", "-")}`;
                const isActive = pathname === href;
                return (
                  <li key={index}>
                    <Link
                      href={href}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        isActive
                          ? "text-primary-500 font-semibold border-b-4 border-light-500"
                          : "text-gray-700 hover:text-primary-500"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {text}
                    </Link>
                  </li>
                );
              }
            )}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {isAuth ? (
            <motion.h1
              className="text-xl font-bold bg-gradient-to-r from-primary-500 via-light-500 to-primary-600 bg-[length:200%_100%] bg-clip-text text-transparent"
              initial={{ backgroundPosition: "200% 0%" }}
              animate={{ backgroundPosition: "0% 0%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              Join us & sparkle in style!
            </motion.h1>
          ) : session?.user ? (
            <UserWelcomeCard />
          ) : (
            <Button title={"Sign In"} href={"/auth"} />
          )}
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden px-4 pb-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {!isAuth &&
            ["Home", "Book", "Services", "About", "Contact Us"].map(
              (text, index) => {
                const href =
                  text === "Home"
                    ? "/"
                    : `/${text.toLowerCase().replace(" ", "-")}`;
                const isActive = pathname === href;
                return (
                  <li key={index}>
                    <Link
                      href={href}
                      className={`block px-4 py-2 rounded-md ${
                        isActive
                          ? "text-primary-500 font-semibold bg-light-100"
                          : "text-gray-700 hover:text-primary-500"
                      }`}
                    >
                      {text}
                    </Link>
                  </li>
                );
              }
            )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
