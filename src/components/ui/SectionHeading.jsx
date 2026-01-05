import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className={`text-xs tracking-[0.2em] uppercase ${dark ? "text-stone-400" : "text-stone-500"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight ${dark ? "text-stone-100" : "text-stone-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-lg leading-relaxed ${dark ? "text-stone-300" : "text-stone-600"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}