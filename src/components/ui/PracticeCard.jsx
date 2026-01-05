import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PracticeCard({ title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 md:p-10 border border-stone-200 hover:border-stone-400 transition-all duration-500 cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#2D5A3D] group-hover:w-full transition-all duration-500" />
      
      <span className="text-xs tracking-[0.15em] text-stone-400 uppercase">
        0{index + 1}
      </span>
      
      <h3 className="mt-4 font-serif text-xl md:text-2xl text-stone-900 group-hover:text-[#2D5A3D] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="mt-3 text-stone-600 leading-relaxed text-sm">
        {description}
      </p>
      
      <ArrowUpRight className="mt-6 w-5 h-5 text-stone-400 group-hover:text-[#2D5A3D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
    </motion.div>
  );
}