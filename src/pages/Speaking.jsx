import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Quote, Mic, Users, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

const themes = [
  "Leading with Humanity in a Fractured World",
  "The 360-Degree Reset: Why Incremental Change Won't Save Us",
  "Umunthu Leadership: Power as Service, Not Domination",
  "Reclaiming Narrative: Storytelling as Resistance and Healing",
  "From Extraction to Regeneration: Systems Change for Our Time",
  "The Bridge Between Worlds: Afrikan Wisdom for Global Challenges"
];

const audiences = [
  { icon: Users, title: "Executive Teams", desc: "Leadership retreats and strategic offsites" },
  { icon: Lightbulb, title: "Conferences", desc: "Keynotes and plenary sessions" },
  { icon: Heart, title: "Movements", desc: "Coalition gatherings and strategy sessions" },
  { icon: Mic, title: "Institutions", desc: "Universities, foundations, and policy forums" }
];

export default function Speaking() {
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
              Speaking & Facilitation
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1]">
              Provocation That
              <br />
              <span className="italic text-[#2D5A3D]">Transforms</span>
            </h1>
            <p className="mt-6 text-xl text-stone-600 leading-relaxed">
              Willson's keynotes and facilitations don't just inspire—they challenge 
              audiences to interrogate assumptions, embrace complexity, and commit to action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Quote className="w-12 h-12 text-[#2D5A3D] mb-8" />
              <blockquote className="font-serif text-2xl md:text-3xl text-stone-200 leading-relaxed italic">
                "I don't speak to entertain or to comfort. I speak to disrupt—to create 
                the conditions for genuine reflection and, ultimately, for action that 
                aligns with our deepest values."
              </blockquote>
              <span className="mt-6 block text-stone-500">— Willson Chivhanga</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-stone-300 leading-relaxed"
            >
              <p>
                Every engagement begins with a question: What transformation is this 
                audience ready for? Willson meets people where they are, but never 
                leaves them there. His approach combines intellectual rigor with 
                emotional resonance, weaving together philosophy, storytelling, and 
                practical frameworks.
              </p>
              <p>
                The goal is not applause but awakening—a shift in consciousness that 
                opens new possibilities for how we lead, relate, and create impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Signature Themes"
            title="Provocations & Inquiries"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {themes.map((theme, index) => (
              <motion.div
                key={theme}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 border border-stone-200 hover:border-[#2D5A3D] hover:bg-stone-50 transition-all duration-300 group"
              >
                <span className="text-xs text-stone-400 tracking-wider">0{index + 1}</span>
                <p className="mt-2 font-serif text-lg text-stone-800 group-hover:text-[#2D5A3D] transition-colors">
                  {theme}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who He Works With */}
      <section className="py-24 md:py-32 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Audiences"
            title="Who Willson Works With"
            align="center"
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-white border border-stone-200 flex items-center justify-center">
                  <audience.icon className="w-7 h-7 text-[#2D5A3D]" />
                </div>
                <h3 className="mt-6 font-serif text-xl text-stone-900">{audience.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{audience.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Audiences Leave With */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                eyebrow="The Outcome"
                title="What Audiences Leave With"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul className="space-y-6">
                {[
                  "A deeper understanding of their own assumptions and blind spots",
                  "Practical frameworks for leading with humanity",
                  "A renewed sense of possibility and agency",
                  "Clear next steps for personal and collective transformation",
                  "Connection to a larger narrative of hope and responsibility"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#2D5A3D] mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#2D5A3D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Ready to Transform Your Gathering?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Whether you're planning a conference, leadership retreat, or strategic 
              gathering, let's explore how Willson can contribute to meaningful 
              transformation.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button className="mt-8 bg-white text-[#2D5A3D] hover:bg-stone-100 px-10 py-6 text-base rounded-none group">
                Book a Keynote or Facilitation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}