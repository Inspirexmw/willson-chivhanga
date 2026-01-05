import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Clock, Tag } from "lucide-react";
import NewsletterSignup from "@/components/forms/NewsletterSignup";

const categories = ["All", "Essays", "Reflections", "Book Excerpts"];

const articles = [
  {
    id: 1,
    title: "The Myth of the Self-Made Leader",
    excerpt: "In a culture obsessed with individual achievement, we have forgotten that all leadership is relational. Every decision we make ripples outward, affecting lives we may never see.",
    category: "Essays",
    readTime: "8 min",
    date: "March 2024"
  },
  {
    id: 2,
    title: "What My Grandmother Knew About Systems Change",
    excerpt: "She never used the word 'ecosystem' or spoke of 'stakeholder engagement.' Yet her way of organizing a village around collective action taught me more about transformation than any theory.",
    category: "Reflections",
    readTime: "6 min",
    date: "February 2024"
  },
  {
    id: 3,
    title: "On the Violence of 'Best Practices'",
    excerpt: "When we impose frameworks designed in one context onto communities living in another, we commit a subtle form of violence. The question is not what works, but what serves.",
    category: "Essays",
    readTime: "10 min",
    date: "January 2024"
  },
  {
    id: 4,
    title: "Umunthu 360: A Preview",
    excerpt: "The following is an excerpt from the forthcoming book, exploring why a 360-degree reset—a complete reorientation of our systems toward humanity—is both necessary and possible.",
    category: "Book Excerpts",
    readTime: "12 min",
    date: "December 2023"
  },
  {
    id: 5,
    title: "The Courage to Be Slow",
    excerpt: "In a world addicted to speed, choosing slowness is an act of resistance. It is also, paradoxically, the only path to the deep change we claim to seek.",
    category: "Reflections",
    readTime: "5 min",
    date: "November 2023"
  },
  {
    id: 6,
    title: "Stories as Medicine",
    excerpt: "Before the diagnosis, before the prescription, there was the story. Healing has always begun with being truly heard—a truth our healthcare systems have forgotten.",
    category: "Essays",
    readTime: "7 min",
    date: "October 2023"
  }
];

export default function Writing() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-stone-500">
              Writing & Thought Leadership
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1]">
              Essays, Reflections
              <br />
              <span className="italic text-[#2D5A3D]">& Provocations</span>
            </h1>
            <p className="mt-6 text-xl text-stone-600 leading-relaxed">
              Long-form thinking on leadership, storytelling, and what it means to 
              build systems worthy of our humanity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-8 overflow-x-auto pb-4 -mb-px">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm whitespace-nowrap pb-4 border-b-2 transition-colors ${
                  activeCategory === category 
                    ? "border-[#2D5A3D] text-stone-900" 
                    : "border-transparent text-stone-500 hover:text-stone-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-0 divide-y divide-stone-200">
            {filteredArticles.map((article, index) => (
              <Link key={article.id} to={createPageUrl(`Article?id=${article.id}`)}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="py-12 group cursor-pointer"
                >
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-2">
                      <span className="text-sm text-stone-400">{article.date}</span>
                    </div>
                    
                    <div className="md:col-span-8">
                      <h2 className="font-serif text-2xl md:text-3xl text-stone-900 group-hover:text-[#2D5A3D] transition-colors">
                        {article.title}
                      </h2>
                      <p className="mt-4 text-stone-600 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="mt-6 flex items-center gap-6 text-sm text-stone-500">
                        <span className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime} read
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex justify-end">
                      <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#2D5A3D] group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-stone-500">
              Stay Connected
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-stone-900 leading-tight">
              Receive New Writing
            </h2>
            <p className="mt-4 text-stone-600">
              Occasional essays and reflections delivered directly to your inbox. 
              No noise, only substance.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <NewsletterSignup variant="light" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}