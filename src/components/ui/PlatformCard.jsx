import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PlatformCard({ name, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group flex items-start gap-6 py-8 border-b border-stone-200 last:border-b-0 cursor-pointer"
    >
      <div className="flex-1">
        <h3 className="font-serif text-2xl md:text-3xl text-stone-900 group-hover:text-[#2D5A3D] transition-colors duration-300">
          {name}
        </h3>
        <p className="mt-2 text-stone-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      <ArrowRight className="mt-2 w-5 h-5 text-stone-400 group-hover:text-[#2D5A3D] group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
    </motion.div>
  );
}