import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-[#2D5A3D]/10 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[#2D5A3D]" />
          </div>
          <h2 className="mt-6 font-serif text-3xl text-stone-900">Message Received</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Thank you for reaching out. Willson will respond to your inquiry 
            within a few business days.
          </p>
        </motion.div>
      </div>
    );
  }

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
              Contact
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1]">
              Let's Begin
              <br />
              <span className="italic text-[#2D5A3D]">a Conversation</span>
            </h1>
            <p className="mt-6 text-xl text-stone-600 leading-relaxed">
              Whether you're exploring a speaking engagement, partnership opportunity, 
              or simply want to connect—reach out and let's see what becomes possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-stone-700">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="rounded-none border-stone-300 focus:border-[#2D5A3D] focus:ring-[#2D5A3D] py-6"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-stone-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="rounded-none border-stone-300 focus:border-[#2D5A3D] focus:ring-[#2D5A3D] py-6"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-stone-700">Inquiry Type</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) => setFormData({...formData, inquiryType: value})}
                  >
                    <SelectTrigger className="rounded-none border-stone-300 focus:border-[#2D5A3D] focus:ring-[#2D5A3D] py-6">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="speaking">Speaking & Facilitation</SelectItem>
                      <SelectItem value="partnership">Partnerships</SelectItem>
                      <SelectItem value="media">Media & Writing</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-stone-700">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={6}
                    className="rounded-none border-stone-300 focus:border-[#2D5A3D] focus:ring-[#2D5A3D] resize-none"
                    placeholder="Tell me about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-base rounded-none group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 lg:col-start-9"
            >
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">
                    Inquiry Types
                  </h3>
                  <div className="space-y-4">
                    <div className="p-6 bg-stone-50">
                      <h4 className="font-serif text-lg text-stone-900">Speaking & Facilitation</h4>
                      <p className="mt-2 text-sm text-stone-600">
                        Keynotes, workshops, retreats, and strategic facilitation.
                      </p>
                    </div>
                    <div className="p-6 bg-stone-50">
                      <h4 className="font-serif text-lg text-stone-900">Partnerships</h4>
                      <p className="mt-2 text-sm text-stone-600">
                        Collaborative projects, advisory roles, and strategic alliances.
                      </p>
                    </div>
                    <div className="p-6 bg-stone-50">
                      <h4 className="font-serif text-lg text-stone-900">Media & Writing</h4>
                      <p className="mt-2 text-sm text-stone-600">
                        Interviews, contributions, and publication opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-stone-900 text-stone-100">
                  <h4 className="font-serif text-lg">Response Time</h4>
                  <p className="mt-3 text-sm text-stone-400 leading-relaxed">
                    Willson personally reviews all inquiries and aims to respond 
                    within 3-5 business days. For urgent speaking requests, please 
                    indicate the date in your message.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}