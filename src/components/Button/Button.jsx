import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ title, variant = "primary", href, onClick }) => {
  if (href) {
    return (
      <Link href={href}>
        <button className="active:scale-95 active:shadow-inner transition-all duration-150 bg-primary-500 text-white px-6 py-3 rounded-lg shadow-md cursor-pointer">
          {title}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition cursor-pointer"
      >
        <p>{title}</p>
      </button>
    );
  }
};

export default Button;
