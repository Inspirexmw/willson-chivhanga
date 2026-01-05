import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { base44 } from "@/api/base44Client";

export default function NewsletterSignup({ variant = "light", inline = false }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Check if email already exists
      const existing = await base44.entities.NewsletterSubscriber.filter({ email });
      
      if (existing.length > 0) {
        setErrorMessage("You're already subscribed!");
        setStatus("error");
        return;
      }

      // Create new subscriber
      await base44.entities.NewsletterSubscriber.create({
        email,
        name: name || null,
        status: "active",
        subscribed_date: new Date().toISOString()
      });

      setStatus("success");
      setEmail("");
      setName("");

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex items-center gap-3 p-4 rounded-lg ${
          isDark ? "bg-white/10" : "bg-[#2D5A3D]/10"
        }`}
      >
        <CheckCircle className={`w-5 h-5 ${isDark ? "text-white" : "text-[#2D5A3D]"}`} />
        <p className={`text-sm ${isDark ? "text-white" : "text-stone-900"}`}>
          Thank you for subscribing! Check your inbox for confirmation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={inline ? "flex flex-col sm:flex-row gap-3" : "space-y-3"}>
        {!inline && (
          <Input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`rounded-none ${
              isDark 
                ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-white" 
                : "border-stone-300 focus:border-[#2D5A3D] focus:ring-[#2D5A3D]"
            } py-5`}
          />
        )}
        
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`rounded-none ${
            isDark 
              ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-white" 
              : "border-stone-300 focus:border-[#2D5A3D] focus:ring-[#2D5A3D]"
          } py-5 ${inline ? "flex-1" : ""}`}
        />

        <Button
          type="submit"
          disabled={status === "loading"}
          className={`rounded-none py-5 group ${inline ? "sm:w-auto" : "w-full"} ${
            isDark
              ? "bg-white text-stone-900 hover:bg-stone-100"
              : "bg-stone-900 text-white hover:bg-stone-800"
          }`}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mt-3 text-sm text-red-600"
        >
          <AlertCircle className="w-4 h-4" />
          {errorMessage}
        </motion.div>
      )}
    </form>
  );
}