import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import PracticeCard from "@/components/ui/PracticeCard";
import PlatformCard from "@/components/ui/PlatformCard";

const practices = [
  {
    title: "Umunthu Leadership",
    description: "Cultivating leaders who center humanity, interdependence, and collective flourishing in their approach to power and decision-making."
  },
  {
    title: "Umunthu Storytelling",
    description: "Reclaiming narrative sovereignty through stories that honor Afrikan wisdom and reimagine our collective futures."
  },
  {
    title: "Umunthu Social Impact",
    description: "Building systems and movements that restore human dignity and create conditions for communities to thrive."
  },
  {
    title: "Umunthu 360 Framework",
    description: "A comprehensive methodology for organizational and societal transformation rooted in indigenous philosophy."
  }
];

const platforms = [
  {
    name: "Thrive Afrika",
    description: "A leadership development ecosystem nurturing the next generation of purpose-driven Afrikan leaders."
  },
  {
    name: "Afrotellers",
    description: "A storytelling collective amplifying authentic Afrikan voices and narratives across the continent and diaspora."
  },
  {
    name: "Umunthu Social Impact Forum",
    description: "A convening space for practitioners, scholars, and changemakers advancing human-centered systems change."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-stone-900 leading-[1.1]">
                Leading with Humanity
                <br />
                <span className="italic text-[#2D5A3D]">in a Fractured World</span>
              </h1>
              
              <p className="mt-8 text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
                Willson Chivhanga is an Afrikan author, keynote speaker, and strategist 
                advancing Umunthu as a practical framework for leadership, storytelling, 
                and social impact.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl("Speaking")}>
                  <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-base rounded-none group">
                    Invite Willson to Speak
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Umunthu360")}>
                  <Button variant="outline" className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-6 text-base rounded-none">
                    Explore Umunthu 360
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] bg-stone-200"
            >
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800"
                alt="Willson Chivhanga"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <Quote className="w-12 h-12 text-[#2D5A3D] mx-auto lg:mx-0 mb-8 opacity-60" />
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-stone-200">
                "I am because we are. In a world fractured by individualism and extraction, 
                Umunthu calls us back to our shared humanity—a reminder that our liberation 
                is bound together."
              </p>
              <span className="mt-8 block text-stone-500 text-sm tracking-wider uppercase">
                — On the Philosophy of Umunthu
              </span>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative aspect-square bg-stone-800"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                alt="Umunthu Philosophy"
                className="w-full h-full object-cover opacity-70"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Areas of Practice"
            title="Where Umunthu Meets Action"
            description="Translating ancient wisdom into contemporary frameworks for transformation across leadership, storytelling, and systemic change."
          />
          
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <PracticeCard
                key={practice.title}
                title={practice.title}
                description={practice.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Platforms */}
      <section className="py-24 md:py-32 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Platforms & Initiatives"
                title="Ecosystems of Change"
              />
              
              <div className="mt-12">
                {platforms.map((platform, index) => (
                  <PlatformCard
                    key={platform.name}
                    name={platform.name}
                    description={platform.description}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Side Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 relative aspect-[3/4] bg-stone-200"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Community & Platforms"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Highlight */}
      <section className="py-24 md:py-32 bg-[#2D5A3D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] lg:aspect-square"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b99a262537c0de83f974e/3fdcbfd2d_1749152611544.jpg"
                alt="Willson Chivhanga Speaking"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-white/60">
                Speaking & Facilitation
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                Provocation That Transforms
              </h2>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Willson's keynotes don't just inspire—they challenge audiences to 
                interrogate assumptions, embrace complexity, and commit to action. 
                Every engagement is an invitation to remember our humanity.
              </p>
              <Link to={createPageUrl("Speaking")}>
                <Button className="mt-8 bg-white text-[#2D5A3D] hover:bg-stone-100 px-8 py-6 text-base rounded-none group">
                  Book a Keynote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}