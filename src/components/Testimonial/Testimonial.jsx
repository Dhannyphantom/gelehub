// "use client";
// import { motion } from "motion/react";
// import styles from "./Testimonial.module.css";
// import Image from "next/image";
// import { testimonials } from "@/helpers/dataStore";

// const Testimonial = () => {
//   return (
//     <section className={styles.testimonial}>
//       <motion.h2
//         className={styles.title}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         What Our Customers Say
//       </motion.h2>

//       <motion.div
//         className={styles.grid}
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 30 },
//           visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
//         }}
//       >
//         {testimonials.map((testimonial) => (
//           <motion.div
//             key={testimonial.id}
//             className={styles.card}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             variants={{
//               hidden: { opacity: 0, x: -50 },
//               visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//             }}
//           >
//             <Image
//               src={testimonial.image}
//               alt={testimonial.name}
//               width={80}
//               height={80}
//               className={styles.avatar}
//             />
//             <p className={styles.review}>"{testimonial.review}"</p>
//             <h3 className={styles.name}>- {testimonial.name}</h3>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Testimonial;
"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { testimonials } from "@/helpers/dataStore";

const Testimonial = () => {
  return (
    <section className="text-center px-6 sm:px-12 md:px-20 py-16 bg-white">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-[#3d2b1f] mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Customers Say
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-[#f8f4f0] p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-[#3d2b1f] italic text-base mb-2">
              "{testimonial.review}"
            </p>
            <h3 className="text-[#b89430] font-semibold text-lg">
              - {testimonial.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonial;
