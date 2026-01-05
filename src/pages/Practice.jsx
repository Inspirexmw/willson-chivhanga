import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Compass, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

const practices = [
  {
    icon: Compass,
    title: "Leadership",
    subtitle: "Cultivating Human-Centered Leaders",
    description: "Leadership in the Umunthu tradition is not about individual heroism but about creating conditions for collective flourishing. It requires a fundamental shift in how we understand power, decision-making, and responsibility.",
    outcomes: [
      "Leaders who center humanity in their approach to power",
      "Teams that practice collective discernment",
      "Organizations with cultures of genuine belonging",
      "Decision-making processes that honor interdependence"
    ]
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    subtitle: "Reclaiming Narrative Sovereignty",
    description: "Stories shape our sense of what is possible. For too long, dominant narratives have marginalized Afrikan wisdom and reinforced extractive worldviews. Umunthu storytelling is about reclaiming the power to define ourselves and imagine new futures.",
    outcomes: [
      "Authentic voices amplified and honored",
      "Narratives that heal collective trauma",
      "Stories that bridge generations and cultures",
      "Communication that inspires transformative action"
    ]
  },
  {
    icon: Users,
    title: "Social Impact",
    subtitle: "Building Systems That Serve Humanity",
    description: "True impact is not measured in outputs but in the restoration of human dignity and the creation of conditions for communities to thrive. This requires moving beyond charity to genuine systems change.",
    outcomes: [
      "Programs designed with—not for—communities",
      "Metrics that capture human flourishing",
      "Strategies that address root causes",
      "Movements that build collective power"
    ]
  }
];

export default function Practice() {
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
              Practice Areas
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1]">
              Where Philosophy
              <br />
              <span className="italic text-[#2D5A3D]">Becomes Practice</span>
            </h1>
            <p className="mt-6 text-xl text-stone-600 leading-relaxed">
              Willson's work spans three interconnected domains—leadership, storytelling, 
              and social impact—each informed by Umunthu philosophy and designed for 
              practical application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <practice.icon className="w-8 h-8 text-[#2D5A3D]" />
                    <span className="text-xs tracking-[0.2em] uppercase text-stone-500">
                      Practice Area 0{index + 1}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-stone-900">
                    {practice.title}
                  </h2>
                  <p className="mt-2 text-lg text-[#2D5A3D] italic">
                    {practice.subtitle}
                  </p>
                  <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                    {practice.description}
                  </p>
                </div>

                <div className={`bg-stone-50 p-8 md:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-sm tracking-[0.15em] uppercase text-stone-500 mb-6">
                    What This Looks Like
                  </h3>
                  <ul className="space-y-4">
                    {practice.outcomes.map((outcome, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] mt-2.5 flex-shrink-0" />
                        <span className="text-stone-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 md:py-32 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionHeading
              eyebrow="The Approach"
              title="Not Services, But Partnership"
            />
            <div className="mt-8 space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                Willson does not offer transactional services. Each engagement is a 
                partnership—a journey of mutual learning and co-creation. The goal is 
                not dependency but empowerment; not extraction but regeneration.
              </p>
              <p>
                Whether working with a multinational organization, a grassroots movement, 
                or an individual leader, the process begins with deep listening and ends 
                with sustainable capacity—not quick fixes or borrowed frameworks, but 
                genuine transformation rooted in context and community.
              </p>
            </div>
            <Link to={createPageUrl("Contact")}>
              <Button className="mt-8 bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-base rounded-none group">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}