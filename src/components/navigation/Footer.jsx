import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-serif text-2xl text-stone-100">Willson Chivhanga</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Leading with humanity in a fractured world through Umunthu philosophy.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-6">Navigate</h4>
            <div className="space-y-3">
              {["About", "Umunthu360", "Practice", "Speaking", "Writing", "Contact"].map((page) => (
                <Link
                  key={page}
                  to={createPageUrl(page)}
                  className="block text-sm text-stone-400 hover:text-stone-100 transition-colors"
                >
                  {page === "Umunthu360" ? "Umunthu 360" : page}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-6">Platforms</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-stone-400 hover:text-stone-100 transition-colors">
                Thrive Afrika
              </a>
              <a href="#" className="block text-sm text-stone-400 hover:text-stone-100 transition-colors">
                Afrotellers
              </a>
              <a href="#" className="block text-sm text-stone-400 hover:text-stone-100 transition-colors">
                Umunthu Social Impact Forum
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Willson Chivhanga. All rights reserved.
          </p>
          <p className="text-xs text-stone-600 italic">
            "I am because we are"
          </p>
        </div>
      </div>
    </footer>
  );
}