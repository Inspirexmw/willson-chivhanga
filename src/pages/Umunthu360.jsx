import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Circle, Compass, Users, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: Compass,
    title: "Leadership",
    description: "Reimagining power as service, decision-making as collective discernment, and authority as responsibility to the whole."
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    description: "Reclaiming narrative sovereignty—telling stories that heal, connect, and reimagine possible futures."
  },
  {
    icon: Users,
    title: "Social Impact",
    description: "Building systems and structures that center human dignity and create conditions for flourishing."
  },
  {
    icon: Lightbulb,
    title: "Systems Change",
    description: "Moving beyond symptoms to transform the underlying logics that shape institutions and societies."
  }
];

export default function Umunthu360() {
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
              The Framework
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1]">
              Umunthu 360
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-stone-600 leading-relaxed">
              A human-centered framework for leadership and systems transformation, 
              calling for a complete 360-degree reset away from extraction and 
              individualism toward shared humanity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why a Reset */}
      <section className="py-24 md:py-32 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                eyebrow="The Crisis"
                title="Why a Human Reset Is Needed"
              />
              <div className="mt-8 space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  We live in a world of extraordinary capability and devastating 
                  fracture. Our systems—economic, political, social—have optimized 
                  for extraction rather than regeneration, for individual accumulation 
                  rather than collective flourishing.
                </p>
                <p>
                  The result is a crisis that is simultaneously ecological, social, 
                  and spiritual. Climate breakdown, widening inequality, democratic 
                  erosion, mental health epidemics—these are not separate problems 
                  but symptoms of the same underlying disease: a forgetting of our 
                  shared humanity.
                </p>
                <p>
                  Umunthu 360 emerges from the recognition that incremental reforms 
                  are insufficient. What is needed is a fundamental reorientation—a 
                  360-degree turn back toward our interconnection.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-stone-200 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-8 border-2 border-dashed border-stone-300 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="text-center px-12">
                  <span className="font-serif text-6xl md:text-7xl text-[#2D5A3D]">360°</span>
                  <p className="mt-4 text-stone-600 text-sm">Complete Reset</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="The 360° Shift"
            title="Four Dimensions of Transformation"
            align="center"
          />

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 border border-stone-200 hover:border-[#2D5A3D] transition-colors duration-500 group"
              >
                <pillar.icon className="w-10 h-10 text-stone-400 group-hover:text-[#2D5A3D] transition-colors duration-300" />
                <h3 className="mt-6 font-serif text-2xl text-stone-900">{pillar.title}</h3>
                <p className="mt-4 text-stone-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="py-24 md:py-32 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                eyebrow="Application"
                title="Where Umunthu 360 Works"
                dark={true}
              />
              <div className="mt-8 space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  Umunthu 360 is not an abstract philosophy—it is a practical framework 
                  designed for application across multiple contexts:
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { title: "Organizations", desc: "Transforming workplace cultures, leadership practices, and strategic direction." },
                { title: "Communities", desc: "Strengthening social bonds and collective capacity for self-determination." },
                { title: "Movements", desc: "Building coalitions grounded in shared values rather than transactional alliances." },
                { title: "Societies", desc: "Reimagining policy, governance, and public life around human dignity." }
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <Circle className="w-2 h-2 mt-2 text-[#2D5A3D] flex-shrink-0 fill-current" />
                  <div>
                    <h4 className="font-serif text-xl text-stone-100">{item.title}</h4>
                    <p className="mt-1 text-stone-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Teaser */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-stone-500">
              Forthcoming
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight">
              The Book
            </h2>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              Willson is currently completing a comprehensive book on Umunthu 360—a 
              deep exploration of the framework, its philosophical foundations, and 
              its practical applications for our time. Sign up to be notified when 
              it becomes available.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button className="mt-8 bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-base rounded-none group">
                Stay Informed
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}