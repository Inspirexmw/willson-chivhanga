import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-stone-500">
              About
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1] max-w-4xl">
              A Journey Rooted in Ubuntu,
              <br />
              <span className="italic text-[#2D5A3D]">Reaching Toward Tomorrow</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light">
                Willson Chivhanga is an Afrikan thought leader, author, and strategist 
                whose work sits at the intersection of indigenous wisdom and contemporary 
                systems change. For over fifteen years, he has walked alongside leaders, 
                organizations, and movements across the continent—always returning to one 
                central question: What does it mean to lead with humanity?
              </p>

              <div className="h-px bg-stone-200 my-12" />

              <h2 className="font-serif text-2xl text-stone-900">The Ubuntu Foundation</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Born and raised in Zimbabwe, Willson's worldview was shaped by the Nguni 
                philosophy of Ubuntu—"I am because we are." This understanding of shared 
                humanity, of our inextricable interconnection, became the lens through which 
                he would later examine leadership, storytelling, and social transformation.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                In the Chichewa and Chinyanja languages of Malawi and Eastern Zambia, this 
                philosophy is known as Umunthu. It is this term—Umunthu—that Willson has 
                adopted as the framework for his life's work, honoring the linguistic 
                diversity of Afrikan wisdom traditions while speaking to a universal truth.
              </p>

              <blockquote className="my-12 pl-8 border-l-2 border-[#2D5A3D]">
                <p className="font-serif text-2xl md:text-3xl text-stone-800 italic leading-relaxed">
                  "The crisis of our time is not one of resources or technology. 
                  It is a crisis of imagination—a forgetting of who we are to each other."
                </p>
              </blockquote>

              <h2 className="font-serif text-2xl text-stone-900">Fifteen Years Across Afrika</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Willson's journey has taken him across the African continent—from boardrooms 
                in Johannesburg to community gatherings in Nairobi, from policy tables in 
                Addis Ababa to storytelling circles in Accra. In each context, he has 
                witnessed both the fractures caused by extractive systems and the resilience 
                of communities holding onto their humanity.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                This lived experience across diverse Afrikan contexts informs his approach: 
                grounded in local realities, yet reaching for continental and global 
                resonance. He has worked with multinational organizations, social enterprises, 
                civil society movements, and government institutions—always as a bridge-builder 
                between worlds.
              </p>

              <h2 className="font-serif text-2xl text-stone-900">Building Platforms for Change</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Beyond his advisory and speaking work, Willson has founded and co-created 
                several platforms dedicated to Afrikan transformation:
              </p>
              <ul className="space-y-4 text-lg text-stone-600">
                <li className="flex gap-3">
                  <span className="text-[#2D5A3D]">—</span>
                  <span><strong className="text-stone-800">Thrive Afrika:</strong> A leadership development ecosystem nurturing purpose-driven leaders who can navigate complexity with integrity.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2D5A3D]">—</span>
                  <span><strong className="text-stone-800">Afrotellers:</strong> A storytelling collective reclaiming narrative sovereignty and amplifying authentic Afrikan voices.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2D5A3D]">—</span>
                  <span><strong className="text-stone-800">Umunthu Social Impact Forum:</strong> A convening space for practitioners advancing human-centered approaches to systems change.</span>
                </li>
              </ul>

              <h2 className="font-serif text-2xl text-stone-900">The Bridge Between Worlds</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                What distinguishes Willson's work is his ability to translate ancient wisdom 
                into contemporary practice. He does not romanticize tradition nor dismiss 
                modernity. Instead, he holds both in creative tension, asking: How might 
                Afrikan philosophy speak to the global challenges of our time?
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                His forthcoming book on Umunthu 360 articulates this vision—a comprehensive 
                framework for a 360-degree reset in how we lead, tell stories, and create 
                impact. It is both a provocation and an invitation: to remember who we are, 
                and to act accordingly.
              </p>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 lg:col-start-9"
            >
              <div className="sticky top-32 space-y-12">
                <div className="aspect-[3/4] bg-stone-200 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b99a262537c0de83f974e/ee3f22060_Gemini_Generated_Image_84uvyw84uvyw84uv.png"
                    alt="Willson Chivhanga"
                    className="w-full h-full object-cover object-top scale-110 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                <div className="p-8 bg-stone-100">
                  <h3 className="font-serif text-lg text-stone-900">Key Focus Areas</h3>
                  <ul className="mt-4 space-y-2 text-sm text-stone-600">
                    <li>• Leadership Development</li>
                    <li>• Narrative & Storytelling</li>
                    <li>• Systems Change</li>
                    <li>• Afrikan Philosophy</li>
                    <li>• Organizational Transformation</li>
                  </ul>
                </div>

                <Link to={createPageUrl("Contact")}>
                  <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-6 rounded-none group">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}